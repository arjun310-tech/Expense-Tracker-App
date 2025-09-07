import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Expense Tracker</h2>
      <ul>
        <li onClick={() => setPage("add")}> Add Expense</li>
        <li onClick={() => setPage("list")}> Expense List</li>
        <li onClick={() => setPage("total amount")}> Amount Spent</li>
      </ul>
    </div>
  );
}

export default Sidebar;
