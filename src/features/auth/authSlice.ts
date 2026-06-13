import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/features/auth/authTypes';

interface AuthState {
  user: User | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ access_token: string; user: User }>,
    ) {
      state.accessToken = action.payload.access_token;
      state.user = action.payload.user;
    },

    logout(state) {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
