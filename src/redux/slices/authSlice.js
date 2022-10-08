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
    
      const res = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log(res)
    
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
    isAuthenticated: false,
  },

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setError: (state, action) => {
      
      state.error = action.payload
    },
  },
  extraReducers: {
    [loginWithEmailAndPassword.pending]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    },
    [loginWithEmailAndPassword.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    },
    [loginWithEmailAndPassword.rejected]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = action.error.message;
      state.isAuthenticated = false;
    },
    [singupWithEmailAndPassword.pending]: (state) => {
      state.currentUser = null;
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    },
    [singupWithEmailAndPassword.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true;
    },
    [singupWithEmailAndPassword.rejected]: (state, action) => {
      state.currentUser = null;
      state.loading = true;
      state.error = action.error.message;
      state.isAuthenticated = false;
    },
    [logout.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = true;
    },
    [logout.fulfilled]: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
    },
    [logout.error]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
      state.isAuthenticated = true;
    },
  },
});
export const { setCurrentUser, clearError, setError } = authSlice.actions;
export default authSlice.reducer;
