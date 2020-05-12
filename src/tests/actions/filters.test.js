import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";
import moment from "moment";

test("should setup text filter action object", () => {
  const actionObject = setTextFilter("light bill");
  expect(actionObject).toEqual({
    type: "SET_TEXT_FILTER",
    text: "light bill",
  });
});
test("should setup text filter action object", () => {
  const actionObject = setTextFilter();
  expect(actionObject).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should setup date sort action object", () => {
  const actionObject = sortByDate();
  expect(actionObject).toEqual({ type: "SORT_BY_DATE" });
});
test("should setup amount sort action object", () => {
  const actionObject = sortByAmount();
  expect(actionObject).toEqual({ type: "SORT_BY_AMOUNT" });
});
test("should setup start date filter action object", () => {
  const date = moment().startOf("month");
  const actionObject = setStartDate(date);
  expect(actionObject).toEqual({
    type: "SET_START_DATE",
    startDate: date,
  });
});
test("should setup end date filter action Object", () => {
  const date = moment().endOf("month");
  const actionObject = setEndDate(date);
  expect(actionObject).toEqual({
    type: "SET_END_DATE",
    endDate: date,
  });
});
