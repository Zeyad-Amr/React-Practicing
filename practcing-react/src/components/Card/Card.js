import React from "react";
import "./Card.css";
const Card = ({ id, name, phone, email, type, deleteFunc }) => {
  return (
    <div
      className="cardWrapper"
      style={{ backgroundColor: type === "boy" ? "yellowgreen" : "pink" }}
    >
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>
      <div>Email: {email}</div>
      <div className="deleteBtn" onClick={(event) => deleteFunc(event, id)}>
        delete
      </div>
    </div>
  );
};

export default Card;
