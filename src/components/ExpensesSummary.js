import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import getTotalExpenses from "../selectors/expenses-total";
import numeral from "numeral";

const ExpensesSummary = (props) => (
  <div>
    <h3>Expenses Total</h3>
    {props.expenses.length > 0 ? (
      <p>
        Viewing {props.expenses.length} {props.expenses.length > 1 ? "expenses" : "expense"} totalling{" "}
        {numeral(getTotalExpenses(props.expenses) / 100).format("$0,0[.]00")}
      </p>
    ) : (
      <p>No Expenses To Add Up</p>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
