import React from "react";
import Card from "../Card/Card";

const CardList = ({ namesList, deleteFunc }) => {
  const card = namesList.map(({ id, ...otherProps }) => (
    <Card key={id} id={id} {...otherProps} deleteFunc={deleteFunc} />
  ));

  return <div>{card}</div>;
};

export default CardList;
