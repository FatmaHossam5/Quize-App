import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./Interfaces";

const initialState: AuthState = { userData: null, isAuthed: false };

const authSlice = createSlice({

  name: "auth",
  initialState,

  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuthed = true;
    },
    logOut: (state) => {
      state.userData = null;
      state.isAuthed = false;
    },
  },
});

export const authReducer =authSlice.reducer;
export const {setUserData,logOut} =authSlice.actions;