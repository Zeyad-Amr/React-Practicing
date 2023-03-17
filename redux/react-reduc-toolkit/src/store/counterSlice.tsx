import { createSlice } from "@reduxjs/toolkit";
import { toogleShowHide } from "./authSlice";
// Define a type for the slice state
export interface CounterState {
  value: number;
}

// Define the initial state using that type
export interface CounterAction {
  type: string;
  payload: number;
}

// Define the initial state using that type
const initialState: CounterState = { value: 0 };

// Define the slice
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state: CounterState, action: CounterAction) => {
      state.value += action.payload;
    },
    decrement: (state: CounterState, action: CounterAction) => {
      if (state.value > 0) {
        state.value -= action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toogleShowHide, (state: CounterState) => {
      state.value = 0;
    });
  },
});

// Export the reducer and action creators
export default counterSlice.reducer;

// Export the action creators
export const { increment, decrement } = counterSlice.actions;
