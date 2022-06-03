import React from "react";
import "./Card.css";
const Card = ({ namesList, deleteFunc }) => {
  const card = namesList.map(({ name, phone, email }, idx) => (
    <div className="cardWrapper" key={idx}>
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>
      <div>Email: {email}</div>
      <div className="deleteBtn" onClick={(event) => deleteFunc(event, idx)}>
        delete
      </div>
    </div>
  ));

  return <div>{card}</div>;
};

export default Card;
