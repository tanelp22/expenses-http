import React from "react";
import "./ExpenceDate.css";

const ExpenceDate = (props) => {
  const day = new Date(props.date).toLocaleString("et-EE", { day: "2-digit" });
  const month = new Date(props.date).toLocaleString("et-EE", { month: "long" });
  const year = new Date(props.date).getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenceDate;
