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
      const { user } = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const userInfo = {
        displayName: user.auth.currentUser.displayName,
        email: user.auth.currentUser.email,
        emailVerified: user.auth.currentUser.emailVerified,
        phoneNumber: user.auth.currentUser.phoneNumber,
        photoUrl: user.auth.currentUser.photoURL,
      };
      return userInfo;
    } catch (error) {
      console.log(error);
    }
  }
);

export const singupWithEmailAndPassword = createAsyncThunk(
  "auth/signupWithEmailAndPassword",
  async (userData) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const userInfo = {
        displayName: user.auth.displayName,
        email: user.auth.email,
        emailVerified: user.auth.emailVerified,
        phoneNumber: user.auth.phoneNumber,
        photoUrl: user.auth.photoURL,
      };
      console.log(user);
      return userInfo;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    // loading: false,
    // error: null,
  },

  extraReducers: {
    [loginWithEmailAndPassword.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload;
    },
  },
  // (builder) => {
  //   builder
  // .addCase(loginWithEmailAndPassword.pending, (state, action) => {
  //   state.currentUser = null;
  //   state.loading = true;
  //   state.error = null;
  // })

  // .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
  //   console.log(action.payload);
  //   state.currentUser = action.payload;
  //   // state.loading = true;
  //   // state.error = "arjun";
  // })

  // .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
  //   state.currentUser = null;
  //   state.loading = true;
  //   state.error = action.payload;
  // })
  // .addCase(singupWithEmailAndPassword.pending, (state, action) => {
  //   state.currentUser = null;
  //   state.loading = true;
  //   state.error = null;
  // })

  // .addCase(singupWithEmailAndPassword.fulfilled, (state, action) => {
  //   state.currentUser = action.payload;
  //   state.loading = false;
  //   state.error = null;
  // })

  // .addCase(singupWithEmailAndPassword.rejected, (state, action) => {
  //   state.currentUser = null;
  //   state.loading = true;
  //   state.error = action.payload;
  // });
  // },
});

export default authSlice.reducer;
