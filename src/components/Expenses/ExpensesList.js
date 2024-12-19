import React from "react";
import ExpenceItem from "./ExpenceItem";

const ExpensesList = (props) => {
  return (
    <>
      {props.expenses.length === 0 ? (
        <p style={{ color: "white", textAlign: "center" }}>
          No expenses found for the selected year.
        </p>
      ) : (
        props.expenses.map((expense) => (
          <ExpenceItem data={expense} key={expense.id} />
        ))
      )}
    </>
  );
};

export default ExpensesList;
