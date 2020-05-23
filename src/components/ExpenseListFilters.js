import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import { v4 as uuid } from "uuid";

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  textChangeHandler = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  sortChangeHandler = (e) => {
    e.target.value === "date" ? this.props.sortByDate() : this.props.sortByAmount();
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            {" "}
            <input
              className="text-input"
              type="text"
              placeholder="Search Expenses"
              value={this.props.filters.text}
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.sortChangeHandler}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            {" "}
            <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId={uuid()}
              endDate={this.props.filters.endDate}
              endDateId={uuid()}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ filters: state.filters });
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (value) => dispatch(setTextFilter(value)),
  sortByDate: (value) => dispatch(sortByDate(value)),
  sortByAmount: (value) => dispatch(sortByAmount(value)),
  setStartDate: (value) => dispatch(setStartDate(value)),
  setEndDate: (value) => dispatch(setEndDate(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
