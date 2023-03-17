// import React from 'react';
import "./App.css";
import { CounterState, increment, decrement } from "./store/counterSlice";
import { toogleShowHide, AuthState } from "./store/authSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const counterState: CounterState = useSelector((state: any) => state.counter);
  const authState: AuthState = useSelector((state: any) => state.auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Redux Toolkit Counter App</h1>
        <h6> Click on the buttons to increment or decrement the counter </h6>
        {authState.show ? (
          <div>
            <div className="counter">Counter: {counterState.value} </div>
            <div className="buttons">
              <button
                onClick={() => {
                  const payload: number = 5;
                  return dispatch(increment(payload));
                }}
              >
                Increment ++
              </button>{" "}
              <button
                onClick={() => {
                  const payload: number = 2;
                  return dispatch(decrement(payload));
                }}
              >
                Decrement --
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <br />
        <button onClick={() => dispatch(toogleShowHide())}>
          {authState.show ? "Hide" : "Show"} Counter
        </button>
      </header>
    </div>
  );
}

export default App;
