import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  is_premium: boolean;
}

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
