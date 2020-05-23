import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import getTotalExpenses from "../selectors/expenses-total";
import numeral from "numeral";

const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        <p>
          Viewing <span>{props.expenses.length}</span>{" "}
          {props.expenses.length > 1 || props.expenses.length === 0 ? "expenses" : "expense"} totalling{" "}
          <span>{numeral(getTotalExpenses(props.expenses) / 100).format("$0,0[.]00")}</span>
        </p>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export { ExpensesSummary };
export default connect(mapStateToProps)(ExpensesSummary);
