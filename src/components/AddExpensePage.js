import React from "react";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

const AddExpensePage = (props) => {
  const onSubmit = (expense) => {
    props.addExpense(expense);
    props.history.push("/");
  };
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({ addExpense: (expense) => dispatch(addExpense(expense)) });
export { AddExpensePage };
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
