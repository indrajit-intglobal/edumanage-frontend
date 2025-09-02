import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
