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
    console.log("Selected Year: " + year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return selectedYear === "All Years"
      ? true
      : expenseDate.getFullYear().toString() === selectedYear;
  });
  //console.log("from Expences " + filteredExpenses);

  return (
    <div className="expenses">
      <ExpensesFilter onSaveSelectedYear={getData} />
      <Card>
        <ExpensesList expenses={filteredExpenses} isLoading={props.isLoading} />
      </Card>
    </div>
  );
};

export default Expences;
//{}[]
