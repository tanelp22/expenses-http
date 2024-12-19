import React from "react";
import "./Expences.css";
import "../UI/Card.css";
import ExpenceItem from "./ExpenceItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";

const Expences = (props) => {
  const getData = (year) => {
    console.log(year);
  };

  return (
    <div className="expenses">
      <ExpensesFilter onSaveSelectedYear={getData} />
      <Card>
        {props.expenses.map((expense) => {
          return <ExpenceItem data={expense} key={expense.id} />;
        })}
      </Card>
    </div>
  );
};

export default Expences;
