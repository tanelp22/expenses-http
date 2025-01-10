import React, { useState, useEffect } from "react";
import Expences from "./components/Expenses/Expences.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Error from "./components/UI/Error.js";

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3005/expenses");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed fetching data");
        }
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed fetching expenses data, pleasy try again later.",
        });
        setShowError(true);
      }
      setIsFetching(false);
    };
    getExpenses();
  }, []);
  console.log(error);
  const errorHandler = () => {
    setError(null);
    setShowError(false);
  };

  useEffect(() => {
    console.log("app " + expenses);
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    const addExpense = async (expense) => {
      try {
        const response = await fetch("http://localhost:3005/add-expense", {
          method: "POST",
          body: JSON.stringify(expense),
          headers: { 'Content-Type': 'application/json' },
        });
        
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed saving data");
        }
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed saving exspenses data, please try again.",
        });
        setShowError(true);
      }
    };
    addExpense(expense);
  };

  return (
    <div className="App">
      {showError && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences expenses={expenses} isLoading={isFetching} />
    </div>
  );
};

export default App;
//{} [] ({})
