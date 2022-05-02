import ExpenseItem from "./Expenseitem";
import "./Expenses.css";
import Card from "../UI/Card";
export default function Expenses(props) {
  const dataExpenses = props.data;
  console.log(dataExpenses);
  const eachExpense = dataExpenses.map((expense) => {
    return (
      <Card className="expenses">
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />
      </Card>
    );
  });

  return <div>{eachExpense}</div>;
}
