import React from "react";
import ExpenceItem from "./ExpenceItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  if(props.isLoading){
    return <p className="expenses-list__fallback"><b>Fetching expenses data...</b></p>
  }
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
