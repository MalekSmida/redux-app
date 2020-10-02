import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
    // user: localStorage.getItem('user'), foo:'bar',
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
