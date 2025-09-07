import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ id: Date.now(), title, amount: Number(amount), category });
    setTitle("");
    setAmount("");
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
        <button className="add-btn">Add Expense</button>
      </center>
    </form>
  );
}
export default ExpenseForm;
