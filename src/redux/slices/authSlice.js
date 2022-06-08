import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "utils";

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/loginWithEmailAndPassword",
  async (userData) => {
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
    } catch (error) {
      console.log(error);
    }
  }
);

export const singupWithEmailAndPassword = createAsyncThunk(
  "auth/signupWithEmailAndPassword",
  async (userData) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
    } catch (error) {
      console.log(error);
    }
  }
);

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
      state.error = action.payload;
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
      state.error = action.payload;
    },
  },
});
export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
