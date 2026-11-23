import { api } from '@/shared/services/api';
import {
  ForgotPasswordRequest,
  MessageResponse,
  LoginRequest,
  LoginResponse,
  SignUpRequest,
  SignUpResponse, ResetPasswordRequest,
} from './authTypes';

export const authService = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', data);

    return response.data;
  },
  async signUp(data: SignUpRequest): Promise<SignUpResponse> {
    const response = await api.post<SignUpResponse>('/users/register', data);

    return response.data;
  },
  async logout() {
    await api.post('/auth/logout');
  },
  async forgotPassword(
    data: ForgotPasswordRequest,
  ): Promise<MessageResponse> {
    const response = await api.post('/auth/forgot-password', data);

    return response.data;
  },
  async resetPassword(data: ResetPasswordRequest): Promise<MessageResponse> {
    const response = await api.post('auth/reset-password', data);

    return response.data;
  },
};
