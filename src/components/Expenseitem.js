import "./Expenseitem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">Car Insurance</h2>
      </div>
      <div className="expense-item__price">$400</div>
    </div>
  );
}

export default ExpenseItem;
