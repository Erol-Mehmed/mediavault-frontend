import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { AppDispatch, RootState } from '@/store/store';
import { api } from './api';
import { logout, setCredentials } from '@/features/auth/authSlice';

interface RetryRequest extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;

export function setupAuthInterceptor(
  dispatch: AppDispatch,
  getState: () => RootState,
) {
  api.interceptors.request.use((config) => {
    return config;
  });

  api.interceptors.response.use(
    (response) => response,

    async (error: AxiosError) => {
      const originalRequest = error.config as RetryRequest;

      if (
        error.status !== 401 ||
        originalRequest._retry ||
        originalRequest.url === '/auth/refresh'
      ) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        if (!isRefreshing) {
          isRefreshing = true;

          refreshPromise = api.post('auth/refresh').then(({ data }) => {
            dispatch(
              setCredentials({
                access_token: data.access_token,
                user: data.user,
              }),
            );
          });
        }

        await refreshPromise;

        isRefreshing = false;
        refreshPromise = null;

        return api(originalRequest);
      } catch (err) {
        isRefreshing = false;
        refreshPromise = null;

        dispatch(logout());

        if (typeof window !== undefined) {
          window.location.href = '/login';
        }

        return Promise.reject(err);
      }
    },
  );
}
