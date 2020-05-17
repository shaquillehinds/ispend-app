import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import moment from "moment";

const filters = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};
const altFilters = {
  text: "food",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0),
};
const e = (value) => {
  return { target: { value } };
};

test("should render ExpenseListFilters correct", () => {
  const wrapper = shallow(<ExpenseListFilters filters={filters} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with altFilters correclty", () => {
  const wrapper = shallow(<ExpenseListFilters filters={altFilters} />);
  expect(wrapper).toMatchSnapshot();
});

test("should setTextFilter", () => {
  const setTextFilter = jest.fn();
  const wrapper = shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilter} />);
  wrapper.find("input").simulate("change", e("bill"));
  expect(setTextFilter).toHaveBeenLastCalledWith("bill");
});

test("should handle sortByDate and sortByAmount", () => {
  const sortByDate = jest.fn();
  const sortByAmount = jest.fn();
  const wrapper = shallow(
    <ExpenseListFilters filters={filters} sortByDate={sortByDate} sortByAmount={sortByAmount} />
  );
  wrapper.find("select").simulate("change", e("amount"));
  expect(sortByAmount).toHaveBeenCalled();
  wrapper.find("select").simulate("change", e("date"));
  expect(sortByDate).toHaveBeenCalled();
});

test("should handle setStartDate and setEndDate", () => {
  const setStartDate = jest.fn();
  const setEndDate = jest.fn();
  const dates = { startDate: filters.startDate, endDate: filters.endDate };
  const wrapper = shallow(
    <ExpenseListFilters filters={filters} setStartDate={setStartDate} setEndDate={setEndDate} />
  );
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")(dates);
  expect(setStartDate).toHaveBeenLastCalledWith(filters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(filters.endDate);
});

test("should handle calendarFocused", () => {
  const calendarFocused = "startDate";
  const wrapper = shallow(<ExpenseListFilters filters={filters} />);
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
