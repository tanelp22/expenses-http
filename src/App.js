import Expences from "./components/Expenses/Expences.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  return (
    <div className="App">
      <NewExpense />
      <Expences />
    </div>
  );
}

export default App;
