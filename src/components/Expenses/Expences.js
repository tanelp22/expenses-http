import React, { useState } from "react";
import "./Expences.css";
import "../UI/Card.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";

const Expences = (props) => {
  const [selectedYear, setSelectedYear] = useState("All Years");

  const getData = (year) => {
    setSelectedYear(year);
    console.log("Selected Year:", year);
  };

  const filterByYear = (expenses, year) => {
    if (year === "All Years") {
      return expenses;
    } else
      return expenses.filter(
        (expense) => expense.date.getFullYear().toString() === year
      );
  };
  const filteredExpenses = filterByYear(props.expenses, selectedYear);

  return (
    <div className="expenses">
      <ExpensesFilter onSaveSelectedYear={getData} />
      <Card>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expences;
//{}
