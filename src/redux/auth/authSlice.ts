import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  userId: string;
  username: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  currentUser: null,
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
    signupSuccess(state, action: PayloadAction<User>) {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    signupFailure(state) {
      state.loading = false;
      state.error = true;
    },
    logout(state) {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure, logout } = userSlice.actions;
export default userSlice.reducer;
