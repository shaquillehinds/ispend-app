import React from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
const EditExpensePage = (props) => {
  const removeItemHandler = (e) => {
    e.target.innerText === "Confirm" && props.dispatch(removeExpense({ id: props.match.params.id }));
    e.target.innerText === "Confirm" && props.history.push("/");
    e.target ? (e.target.innerText = "Confirm") : null;
  };
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          const id = props.match.params.id;
          props.dispatch(editExpense(id, expense));
          props.history.push("/");
        }}
        expense={props.expenses}
      />
      <button onClick={removeItemHandler}>Remove</button>

      <button onClick={() => props.history.push("/")}>Cancel</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expenses: state.expenses.find((expense) => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
