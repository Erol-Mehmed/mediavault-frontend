import { api } from '@/shared/services/api';
import { AppDispatch } from '@/store/store';
import { setInitialized, setUser } from '@/features/auth/authSlice';

export const initializeAuth = async (dispatch: AppDispatch) => {
  const { data } = await api.get('/auth/me');

  if (data.authenticated) {
    dispatch(setUser(data.user));
  }

  dispatch(setInitialized());
};
