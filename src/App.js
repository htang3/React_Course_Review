import "./App.css";
import ExpenseItem from "./components/Expenseitem";

function App() {
  const expenses = [
    {
      date: new Date(2022, 4, 19),
      title: "Car Insurance",
      price: 399,
    },
    {
      date: new Date(2022, 4, 20),
      title: "health Insurance",
      price: 199,
    },
    {
      date: new Date(2022, 5, 21),
      title: "Car Insurance",
      price: 99,
    },
  ];
  return (
    <div>
      <h1>Let's get started</h1>
      <p>This is also visible!</p>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}  
      />
    </div>
  );
}

export default App;
