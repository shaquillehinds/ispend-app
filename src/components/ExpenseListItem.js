import React from "react";
import { connect } from "react-redux";
import { startRemoveExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = (props) => {
  const removeItemHandler = (e) => {
    e.target.innerText === "Confirm" && props.dispatch(startRemoveExpense({ id: props.id }));
    e.target ? (e.target.innerText = "Confirm") : null;
  };
  return (
    <tr>
      <td>
        <button onClick={removeItemHandler}>X</button>
        <Link to={`/edit/${props.id}`}>
          {props.description}
          <span>{moment(props.createdAt).format("MMM Do YYYY")}</span>
        </Link>
      </td>
      <td>{numeral(props.amount / 100).format("$0,0[.]00")}</td>
      {/* <td>
        <Link to={`/edit/${props.id}`}>
          <button>Edit</button>
        </Link>
      </td> */}
    </tr>
  );
};
export { ExpenseListItem };
export default connect()(ExpenseListItem);
