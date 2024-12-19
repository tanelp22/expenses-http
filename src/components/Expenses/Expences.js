import "./Expences.css";
import "../UI/Card.css";
import ExpenceItem from "./ExpenceItem.js";
import Card from "../UI/Card.js";

function Expences() {
  const expenses = [
    { date: new Date(2024, 10, 22), title: "New Book", price: 39.99 },
    { date: new Date(2024, 11, 22), title: "Old Book", price: 9.99 },
  ];

  return (
    <div className="expenses">
      <Card>
        <ExpenceItem data={expenses[0]} />
        <ExpenceItem data={expenses[1]} />
      </Card>
    </div>
  );
}

export default Expences;
