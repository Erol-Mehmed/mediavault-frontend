import { api } from '@/shared/services/api';
import {
  LoginRequest,
  LoginResponse,
  // SignUpRequest,
  // SignUpResponse,
} from './authTypes';

export const authService = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', data);

    return response.data;
  },
  // async signUp(data: SignUpRequest): Promise<SignUpResponse> {
  // },
  async logout() {
    await api.post('/auth/logout');
  },
};
