import { createStore } from "redux";
export interface CounterState {
  value: number;
  show: boolean;
}
export interface CounterAction {
  type: string;
  payload?: any;
}
const initialState: CounterState = { value: 0, show: true };
const counterReducer = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case "INCREMENT":
      if (state.value === 100) {
        return state;
      }
      return { ...state, value: state.value + action.payload };

    case "DECREMENT":
      if (state.value === 0) {
        return state;
      }
      return { ...state, value: state.value - action.payload };

    case "TOOGGLE_SHOW_HIDE":
      return { ...state, show: !state.show };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
