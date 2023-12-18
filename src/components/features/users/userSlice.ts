import { createSlice } from "@reduxjs/toolkit";
import { UserDetailsType } from "src/types/UserDetails";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUserDetails } = userSlice.actions;

export const selectUserDetails = (state: { user }) => state.user.userDetails;
