import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = (props) => {
  const removeItemHandler = (e) => {
    e.persist();
    e.target.innerText === "Confirm" && props.startRemoveExpense(props.match.params.id);
    e.target.innerText === "Confirm" && props.history.push("/");
    e.target ? (e.target.innerText = "Confirm") : null;
  };
  const submitExpense = (expense) => {
    const id = props.match.params.id;
    props.startEditExpense(id, expense);
    props.history.push("/");
  };
  const cancelExpense = () => props.history.push("/dashboard");
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm onSubmit={submitExpense} expense={props.expense} />
      <button onClick={removeItemHandler}>Remove</button>

      <button onClick={cancelExpense}>Cancel</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
});
export { EditExpensePage };
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
