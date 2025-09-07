import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses found!</p>;
  }

  return (
    <div>
      {expenses.map((exp) => (
        <ExpenseItem key={exp.id} expense={exp} deleteExpense={deleteExpense} />
      ))}
    </div>
  );
}
export default ExpenseList;
