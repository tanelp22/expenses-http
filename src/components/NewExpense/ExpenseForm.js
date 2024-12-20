import React, { useRef, Fragment, useState } from "react";
import "./ExpenseForm.css";
import Error from "../UI/Error";

const ExpenseForm = (props) => {
  const [error, setError] = useState(null);
  console.log(error);

  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };

    if (
      enteredTitle.trim() === "" ||
      enteredAmount.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    props.onSaveExpenseData(expenseData);
    titleInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            ref={amountInputRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2024-11-12"
            max="2026-12-31"
            id="date"
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
//{} [] ({})
