import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.length === 0 ? (
            <tr>
              <td colSpan="2">No Expenses</td>
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
