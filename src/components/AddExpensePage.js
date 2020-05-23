import React from "react";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";

const AddExpensePage = (props) => {
  const onSubmit = (expense) => {
    props.startAddExpense(expense);
    props.history.push("/");
  };
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
});
export { AddExpensePage };
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
