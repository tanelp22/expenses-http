import React, { useState, useEffect } from "react";
import Expences from "./components/Expenses/Expences.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const response = await fetch("http://localhost:3005/expenses");
      const responseData = await response.json();
      setExpenses(responseData.expenses);
      setIsFetching(false);
    };
    getExpenses();
  }, []);
  useEffect(() => {
    console.log(expenses); // Logs the updated state whenever `expenses` changes
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences expenses={expenses} isLoading={isFetching}/>
    </div>
  );
};

export default App;
//{} [] ({})
