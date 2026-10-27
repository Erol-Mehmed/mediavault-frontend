export interface User {
  id: string;
  email: string;
  is_premium: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  expires_in: string;
  token_type: string;
  user: User;
}

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  id: string;
  email: string;
  username: string;
  is_active: boolean;
  is_premium: boolean;
  created_at: string;
  updated_at: string;
}
