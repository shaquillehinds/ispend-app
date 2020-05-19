import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = (props) => {
  const removeItemHandler = (e) => {
    e.target.innerText === "Confirm" && props.dispatch(removeExpense({ id: props.id }));
    e.target ? (e.target.innerText = "Confirm") : null;
  };
  return (
    <tr>
      <td>{props.description}</td>
      <td>{numeral(props.amount / 100).format("$0,0[.]00")}</td>
      <td>{moment(props.createdAt).format("MMM Do YYYY")}</td>
      <td>
        <Link to={`/edit/${props.id}`}>
          <button>Edit</button>
        </Link>
      </td>
      <td>
        <button onClick={removeItemHandler}>Remove</button>
      </td>
    </tr>
  );
};
export { ExpenseListItem };
export default connect()(ExpenseListItem);
