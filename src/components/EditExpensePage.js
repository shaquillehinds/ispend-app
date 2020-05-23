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

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <ExpenseForm onSubmit={submitExpense} expense={props.expense} />
      <div className="content-container button-container">
        <button className="button button--red" onClick={removeItemHandler}>
          Delete Expense
        </button>
      </div>
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
