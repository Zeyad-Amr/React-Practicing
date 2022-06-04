import React, { useState } from "react";
import "./App.css";
import Card from "../components/CardList/CardList";
import Filter from "../components/Filter/Filter";
import Button from "../components/Button/Button";
const App = () => {
  const [cardToggle, setCardToggle] = useState(true);
  const [text, setText] = useState("");
  const [state, setState] = useState([
    {
      id: 1,
      name: "Zeyad",
      phone: "01478523690",
      email: "zeyad@gmail.com",
      type: "boy",
    },
    {
      id: 2,
      name: "Ahmed",
      phone: "01234567890",
      email: "ahmed@gmail.com",
      type: "boy",
    },
    {
      id: 3,
      name: "Samira",
      phone: "01234557890",
      email: "samira@gmail.com",
      type: "girl",
    },
    {
      id: 4,
      name: "Sameh",
      phone: "01235496789",
      email: "ali@gmail.com",
      type: "boy",
    },
    {
      id: 5,
      name: "Salwa",
      phone: "01236657890",
      email: "salwa@gmail.com",
      type: "girl",
    },
  ]);
  const [filter, setFilter] = useState(state);

  const deleteCard = (e, idx) => {
    // const newState = state.filter((item, index) => index !== idx);
    // setState(newState);
    console.log(state);
    const newState = state.filter((item) => item.id !== idx);
    setState(newState);
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
      <h1>... List of data ...</h1>
      <Button style={{ marginBottom: "10px" }} onClick={() => toggle()}>
        {cardToggle ? "Show Cards" : "Hide Cards"}{" "}
      </Button>

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
