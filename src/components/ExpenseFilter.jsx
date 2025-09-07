function ExpenseFilter({ filter, setFilter }) {
  return (
    <div>
      <center>
        <label>Filter by category</label>
      </center>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>
    </div>
  );
}
export default ExpenseFilter;
