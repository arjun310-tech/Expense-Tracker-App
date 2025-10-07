import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses found!</p>;
  }

  return (
    <div>
      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          expense={exp}
          editExpense={editExpense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
}
export default ExpenseList;
