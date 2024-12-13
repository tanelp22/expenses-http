import Expences from "./components/Expenses/Expences.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expences />
    </div>
  );
}

export default App;
//{} [] ({})
