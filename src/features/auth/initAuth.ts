import { api } from '@/shared/services/api';
import { AppDispatch } from '@/store/store';
import {
  logout,
  setCredentials,
  setInitialized,
} from '@/features/auth/authSlice';

export const initializeAuth = async (dispatch: AppDispatch) => {
  try {
    const { data } = await api.post('/auth/refresh');

    dispatch(
      setCredentials({
        access_token: data.access_token,
        user: data.user,
      }),
    );
  } catch {
    dispatch(logout());
  } finally {
    dispatch(setInitialized());
  }
};
