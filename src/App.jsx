import "./App.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import mockExpenses from "./data/mockExpenses";
import AmountSpent from "./components/AmountSpent";

function App() {
  const getInitialExpenses = () => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : mockExpenses;
  };

  const [expenses, setExpenses] = useState(getInitialExpenses);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState("add");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([expense, ...expenses]);
  const deleteExpense = (id) =>
    setExpenses(expenses.filter((e) => e.id !== id));

  const filtered =
    filter === "All" ? expenses : expenses.filter((e) => e.category === filter);

  const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Sidebar setPage={setPage} />

      {/* Main Content */}
      <div className="main-content">
        {page === "total amount" && (
          <div className="dash-page">
            <h1>Amount Spent</h1>
            <AmountSpent expenses={expenses} />
            <h2>Total Expense: ₹{total}</h2>
          </div>
        )}

        {page === "add" && <ExpenseForm addExpense={addExpense} />}
        {page === "list" && (
          <>
            <ExpenseFilter filter={filter} setFilter={setFilter} />
            <ExpenseList expenses={filtered} deleteExpense={deleteExpense} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
