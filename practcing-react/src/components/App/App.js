import React, { useState } from "react";
import "./App.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [text, setText] = useState("");
  const [state, setState] = useState([
    { name: "Zeyad", phone: "01478523690", email: "zeyad@gmail.com" },
    { name: "Ahmed", phone: "01234567890", email: "ahmed@gmail.com" },
    { name: "Ali", phone: "01235496789", email: "ali@gmail.com" },
  ]);

  const deleteCard = (e, idx) => {
    // const newState = state.filter((item, index) => index !== idx);
    // setState(newState);
    setState((prevState) => {
      return prevState.filter((item, index) => index !== idx);
    });
  };
  const toggle = () => {
    setCardToggle(!cardToggle);
  };
  const textHandler = (e) => {
    console.log(e);
    setText(e);
  };

  return (
    <div className="mainContainer">
      <h1>... Boys ...</h1>
      <button style={{ marginBottom: "20px" }} onClick={() => toggle()}>
        Show Cards
      </button>

      <Filter fileration={textHandler} />
      <div style={{ marginBottom: "20px" }}>
        <p>{text}</p>
      </div>
      <div style={{ display: cardToggle ? "block" : "none" }}>
        <Card namesList={state} deleteFunc={deleteCard} />
      </div>
    </div>
  );
};

export default App;
