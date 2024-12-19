import React from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate.js";
import { useState } from "react";

const ExpenceItem = (props) => {
  const [priceChange, setPriceChange] = useState(props.data.price);

  const clickHandler = () => {
    setPriceChange(props.data.title);
  };

  return (
    <div className="expense-item">
      <ExpenceDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{priceChange}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default ExpenceItem;
//{}
