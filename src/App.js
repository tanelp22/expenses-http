import React, { useState, useEffect } from "react";
import Expences from "./components/Expenses/Expences.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  fetch("http://localhost:3005/expenses")
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      setExpenses(responseData.expenses);
    });
  console.log(expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences expenses={expenses} />
    </div>
  );
};

export default App;
//{} [] ({})
