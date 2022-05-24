import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./styles/NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdited(false);
  };

  const [isEdited, setIsEdited] = useState(false);
  const startEditingHandler = () => {
    setIsEdited(true);
  };
  const stopEditingHandler = () => {
    setIsEdited(false);
  };
  return (
    <div className="new-expense">
      {!isEdited && (
        <button button onClick={startEditingHandler}>
          Add new expense
        </button>
      )}
      {isEdited && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
