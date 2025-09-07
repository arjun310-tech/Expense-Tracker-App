function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-item">
      <div>
        <h2>{expense.title}</h2>
        <p>
          ₹{expense.amount} - {expense.category}
        </p>
      </div>
      <button onClick={() => deleteExpense(expense.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}
export default ExpenseItem;
