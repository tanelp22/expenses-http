import React, { useState } from "react";
import "./Expences.css";
import "../UI/Card.css";
import ExpenceItem from "./ExpenceItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";

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
        {filteredExpenses.length === 0 ? (
          <p style={{ color: "white", textAlign: "center" }}>
            No expenses found for the selected year.
          </p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenceItem data={expense} key={expense.id} />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expences;
//{}
