import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
function ExpenseItem({ expense, deleteExpense, editExpense }) {
  return (
    <div className="expense-item">
      <div>
        <h2>{expense.title}</h2>
        <p>
          ₹{expense.amount} - {expense.category}
        </p>
      </div>
      <button onClick={() => editExpense(expense.id)} className="edit-btn">
        <FaEdit />
      </button>
      <button onClick={() => deleteExpense(expense.id)} className="delete-btn">
        <MdDeleteForever />
      </button>
    </div>
  );
}
export default ExpenseItem;
