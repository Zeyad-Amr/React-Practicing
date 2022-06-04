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
  const [filter, setFilter] = useState(state);

  const deleteCard = (e, idx) => {
    // const newState = state.filter((item, index) => index !== idx);
    // setState(newState);
    console.log(state);
    const newState = state.filter((item, index) => index !== idx);
    setState(newState);

    console.log(newState);

    console.log(e, idx);
    cardsHandler(text, newState);
  };
  const toggle = () => {
    setCardToggle(!cardToggle);
  };
  const textHandler = (e) => {
    setText(e);
    cardsHandler(e, state);
  };

  const cardsHandler = (e, newState) => {
    if (e.length > 0) {
      setFilter((prevState) => {
        return newState.filter((item) =>
          item.name.toLowerCase().includes(e.toLowerCase())
        );
      });
    } else {
      setFilter(newState);
    }
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
        <Card namesList={filter} deleteFunc={deleteCard} />
      </div>
    </div>
  );
};

export default App;
