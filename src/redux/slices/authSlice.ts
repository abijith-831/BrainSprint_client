import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  userId: string;
  username: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  currentUser: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupStart(state) {
      state.loading = true;
      state.error = false;
    },
    signupSuccess(
      state,
      action: PayloadAction<{ user: User; accessToken: string; refreshToken: string }>
    ) {
      state.loading = false;
      state.currentUser = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.error = false;
    },
    signupFailure(state) {
      state.loading = false;
      state.error = true;
    },
    loginSuccess(
      state,
      action: PayloadAction<{ user: User; accessToken: string; refreshToken: string }>
    ) {
      state.loading = false;
      state.currentUser = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.error = false;
    },
    logout(state) {
      state.currentUser = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure, logout , loginSuccess} = userSlice.actions;
export default userSlice.reducer;
