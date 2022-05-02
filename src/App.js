import "./App.css";

import Expenses from "../src/components/Expenses/Expenses";
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
      price: 100,
    },
  ];
  return (
    <div>
      <h1>Let's get started</h1>
      <p>This is also visible!</p>

      <Expenses data={expenses} />
    </div>
  );
}

export default App;
