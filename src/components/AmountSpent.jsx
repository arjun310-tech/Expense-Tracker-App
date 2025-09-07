import React from "react";

function AmountSpent({ expenses }) {
  // Categories
  const categories = ["Food", "Travel", "Shopping"];

  // Category-wise total calculation
  const categoryData = categories.map((cat) => ({
    name: cat,
    total: expenses
      .filter((e) => e.category === cat)
      .reduce((sum, e) => sum + parseFloat(e.amount), 0),
  }));

  // Recent expenses (optional)
  //   const recent = expenses.slice(0, 5);

  return (
    <div>
      {/* Category Summary Table */}
      <div className="card">
        {/* <h3>Category-wise Summary</h3> */}
        <table className="category-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Total Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((cat, index) => (
              <tr key={index}>
                <td>{cat.name}</td>
                <td>₹{cat.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AmountSpent;
