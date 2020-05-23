import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
  return (
    <div className="content-container">
      <table className="expense-list">
        <thead>
          <tr className="expense-list__head">
            <th className="expense-list__head-expenses show-for-mobile">Expenses</th>
            <th className="expense-list__head-expense show-for-desktop">Expense</th>
            <th className="expense-list__head-amount show-for-desktop">Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.length === 0 ? (
            <tr>
              <td colSpan="2" className="expense-list__item-expense expense-list__item--no-expenses">
                No Expenses
              </td>
            </tr>
          ) : (
            props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
