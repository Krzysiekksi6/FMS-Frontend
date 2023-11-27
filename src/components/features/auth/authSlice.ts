import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, roles: null },
  reducers: {
    setCredentials: (state, action) => {
      const { username, accessToken, roles } = action.payload;
      state.user = username;
      state.token = accessToken;
      state.roles = roles;
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;
      state.roles = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectUserRoles = (state) => state.auth.roles;
