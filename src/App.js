import React, { useState } from "react";
import Expences from "./components/Expenses/Expences.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  { id: "id1", date: new Date(2023, 10, 22), title: "New Book", amount: 39.99 },
  { id: "id2", date: new Date(2024, 11, 21), title: "Old Book", amount: 9.99 },
  {
    id: "id3",
    date: new Date(2025, 11, 19),
    title: "Just Book",
    amount: 19.99,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

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
