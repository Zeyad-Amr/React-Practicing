import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface AuthState {
  show: boolean;
}

// Define the initial state using that type
const initialState: AuthState = { show: true };

// Define the initial state using that type
export interface AuthAction {
  type: string;
  payload: number;
}

// Define the slice
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    toogleShowHide: (state: AuthState) => {
      state.show = !state.show;
    },
  },
});

// Export the reducer and action creators
export default authSlice.reducer;

// Export the action creators
export const { toogleShowHide } = authSlice.actions;
