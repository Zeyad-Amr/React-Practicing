import { createSlice, createStore } from "@reduxjs/toolkit";
export interface CounterState {
  value: number;
  show: boolean;
}
export interface CounterAction {
  type: string;
  payload: number;
}
const initialState: CounterState = { value: 0, show: true };

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
    toogleShowHide: (state: CounterState) => {
      state.show = !state.show;
    },
  },
});

const store = createStore(counterSlice.reducer);
export const { increment, decrement, toogleShowHide } = counterSlice.actions;
export default store;
