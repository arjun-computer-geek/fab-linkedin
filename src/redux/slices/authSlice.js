import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "utils";

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async (userData) => {
    await signInWithEmailAndPassword(auth, userData.email, userData.password);
  }
);

export const singupWithEmailAndPassword = createAsyncThunk(
  "auth/signupWithEmailAndPassword",
  async (userData) => {
    await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [loginWithEmailAndPassword.pending]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = null;
    },
    [loginWithEmailAndPassword.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [loginWithEmailAndPassword.rejected]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = action.error.message;
    },
    [singupWithEmailAndPassword.pending]: (state) => {
      state.currentUser = null;
      state.loading = true;
      state.error = null;
    },
    [singupWithEmailAndPassword.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [singupWithEmailAndPassword.rejected]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = action.error.message;
    },
    [logout.pending]: (state) => {
      state.loading = true; 
      state.error = null;
    },
    [logout.fulfilled]: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    [logout.error]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});
export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
