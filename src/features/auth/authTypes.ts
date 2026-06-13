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
