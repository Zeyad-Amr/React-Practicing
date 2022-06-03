import React, { useState } from "react";

const Filter = ({ fileration }) => {
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    fileration(name);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Type anything"
        value={filter}
        onChange={filterHandler}
      ></input>
    </div>
  );
};

export default Filter;
