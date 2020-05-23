import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import { history } from "../routers/AppRouter";
// import { connect } from "react-redux";

// const date = new Date();

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calendarFocused: false,
    error: undefined,
    ...this.props.expenses,
  };

  componentDidMount() {
    this.props.expense &&
      this.setState(() => ({
        description: this.props.expense.description,
        note: this.props.expense.note,
        amount: (this.props.expense.amount / 100).toString(),
        createdAt: moment(this.props.expense.createdAt),
      }));
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  cancelExpense = () => history.push("/dashboard");
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description and amount" }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
      });
    }
  };
  render() {
    return (
      <div className="content-container">
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            className="text-input"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            type="text"
            placeholder="Description"
            autoFocus
          />
          <input
            className="text-input"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            className="textarea"
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (Optional)"
          ></textarea>
          <div className="button-container">
            <div>
              <input className="button" type="submit" value="Save Expense" />
            </div>
            <div>
              <button className="button button--dark-grey" onClick={this.cancelExpense}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// export default connect()(ExpenseForm);
