import './Expences.css'
import './Card.css'
import ExpenceItem from './ExpenceItem';
import Card from './Card';

function Expences() {
  const expenses=[
   {date: new Date(2024,10,22),  
    title: "New Book",
    price: 39.99
   },
   {date: new Date(2024,11,22),  
    title: "Old Book",
    price: 9.99
   } 
  ] 
    

  return (
    <Card className="expenses">
      <ExpenceItem 
      data={expenses[0]}
      />
      <ExpenceItem 
      data={expenses[1]} 
      />
    </Card>
  );
}

export default Expences;
