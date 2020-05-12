import {
  sortByAmount,
  sortByDate,
  setTextFilter,
  setEndDate,
  setStartDate,
} from "../../actions/filters";
import filterReducer from "../../reducers/filters";
import moment from "moment";

const defaultState = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
};

test("should set sortBy to date", () => {
  const newState = filterReducer(undefined, sortByDate());
  expect(newState).toEqual(defaultState);
});

test("should set sortBy to amount", () => {
  const newState = filterReducer(defaultState, sortByAmount());
  expect(newState).toEqual({ ...defaultState, sortBy: "amount" });
});

test("should set text filter to new string", () => {
  const newState = filterReducer(defaultState, setTextFilter("Test in Jest"));
  expect(newState).toEqual({ ...defaultState, text: "Test in Jest" });
});

test("should set start date to 9th of month", () => {
  const newDate = moment(new Date().setDate(9));
  const newState = filterReducer(defaultState, setStartDate(newDate));
  expect(newState).toEqual({ ...defaultState, startDate: newDate });
});

test("should set start date to 18th of month", () => {
  const newDate = moment(new Date().setDate(18));
  const newState = filterReducer(defaultState, setEndDate(newDate));
  expect(newState).toEqual({ ...defaultState, endDate: newDate });
});
