import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

// Define the root reducer
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
