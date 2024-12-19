import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);

  

  const toggleFormHandler = () => {
    setEditForm((prevEditForm) => !prevEditForm);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditForm(false);
  };

  return (
    <div className="new-expense">
      {editForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleFormHandler}
        />
      ) : (
        <button onClick={toggleFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
//{} [] ({})
