import { api } from '@/services/api';
import { LoginRequest, LoginResponse } from './authTypes';

export const authService = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', data);

    return response.data;
  },
};
