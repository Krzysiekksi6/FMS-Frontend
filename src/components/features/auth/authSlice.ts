import { createSlice } from "@reduxjs/toolkit";
import { AuthStateType } from "src/types/AuthState";



const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    firstname: null,
    user: null,
    token: null,
    roles: null,
    userDetails: null,
  } as AuthStateType,
  reducers: {
    setCredentials: (state, action) => {
      const { id, firstname, username, accessToken, roles, userDetails } =
        action.payload;
      state.userId = id;
      state.firstname = firstname;
      state.user = username;
      state.token = accessToken;
      state.roles = roles;
      state.userDetails = userDetails;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.roles = null;
    },
  },
});

export const { setCredentials, setUserDetails, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUserName = (state: { auth: AuthStateType }) =>
  state.auth.user;
export const selectCurrentToken = (state: { auth: AuthStateType }) =>
  state.auth.token;
export const selectUserRoles = (state: { auth: AuthStateType }) => state.auth.roles;
export const selectUserDetails = (state: { auth: AuthStateType }) =>
  state.auth.userDetails;
export const selectUserId = (state: { auth: AuthStateType }) => state.auth.userId;
