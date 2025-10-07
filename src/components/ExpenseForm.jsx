import { useEffect, useState } from "react";

function ExpenseForm({
  addExpense,
  edit,
  setEdit,
  expenses,
  setExpenses,
  setPage,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  useEffect(() => {
    if (edit) {
      setTitle(edit.title);
      setAmount(edit.amount);
      setCategory(edit.category);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      const updated = expenses.map((exp) =>
        exp.id === edit.id ? { ...exp, title, amount, category } : exp
      );
      setExpenses(updated);
      setEdit(null);
    } else {
      const updated = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
      };
      setExpenses([updated, ...expenses]);
    }
    setTitle("");
    setAmount("");
    setPage("list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <center>
        <h1>ADD DETAILS</h1>
      </center>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="select Category"
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>
      <center>
        <button type="submit">{edit ? "Update Expense" : "Add Expense"}</button>
      </center>
    </form>
  );
}
export default ExpenseForm;
