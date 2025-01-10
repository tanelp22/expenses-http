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
        const response = await fetch("http://localhost:3005/expensses");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed fetchin data");
        }
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: "An error occured!",
          message: "Failed fetching expenses data, plaeasy try again later.",
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
    console.log(expenses); // Logs the updated state whenever `expenses` changes
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
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
