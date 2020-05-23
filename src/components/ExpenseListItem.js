import React from "react";
import { connect } from "react-redux";
import { startRemoveExpense } from "../actions/expenses";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = (props) => {
  const removeItemHandler = (e) => {
    // e.target.innerText === "DEL" && props.dispatch(startRemoveExpense({ id: props.id }));
    // e.target ? (e.target.innerText = "DEL") : null;
    if (confirm("Delete this expense?")) {
      props.dispatch(startRemoveExpense({ id: props.id }));
    }
  };
  return (
    <tr className="expense-list__item">
      <td className="expense-list__item-expense">
        <Link className="expense-list__item-link" to={`/edit/${props.id}`}>
          {props.description}
        </Link>
        <p>{moment(props.createdAt).format("MMM Do YYYY")}</p>
      </td>
      <td className="expense-list__item-amount">
        {numeral(props.amount / 100).format("$0,0[.]00")}
        <button className="button button--red" onClick={removeItemHandler}>
          X
        </button>
      </td>
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
