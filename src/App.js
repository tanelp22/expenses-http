import './App.css'
import ExpenceItem from './components/ExpenceItem';

function App() {
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
    <div className="App">
      <ExpenceItem 
      data={expenses[0]}
      />
      <ExpenceItem 
      data={expenses[1]} 
      />
    </div>
  );
}

export default App;
