// import React from 'react';
import "./App.css";
import { CounterAction, CounterState } from "./store";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  // const counter = useSelector((state: CounterState) => state.value);
  // const show = useSelector((state: CounterState) => state.show);
  // const { value, show } = useSelector((state: CounterState) => state);
  const globalState = useSelector((state: CounterState) => state);

  const increment = () => {
    // dispatch an action to increment the counter
    const action: CounterAction = { type: "INCREMENT", payload: 1 };
    dispatch(action);
  };

  const decrement = () => {
    // dispatch an action to decrement the counter
    const action: CounterAction = { type: "DECREMENT", payload: 1 };
    dispatch(action);
  };

  const show_hide = () => {
    // dispatch an action to show or hide the counter
    const action: CounterAction = { type: "TOOGGLE_SHOW_HIDE" };

    dispatch(action);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Redux Counter App </h1>
        <h6> Click on the buttons to increment or decrement the counter </h6>
        {globalState.show ? (
          <div>
            {" "}
            <div className="counter">Counter: {globalState.value} </div>
            <div className="buttons">
              <button className="increment" onClick={increment}>
                {" "}
                Increment +{" "}
              </button>{" "}
              <button className="decrement" onClick={decrement}>
                {" "}
                Decrement -{" "}
              </button>{" "}
            </div>{" "}
          </div>
        ) : (
          <div></div>
        )}
        <br />
        <button className="show" onClick={show_hide}>
          {" "}
          Show & Hide Counter{" "}
        </button>
      </header>
    </div>
  );
}

export default App;
