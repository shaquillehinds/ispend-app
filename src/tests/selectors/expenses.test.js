import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";
import { expenses, filter } from "../fixtures/expenses";

test("should filter expenses by text", () => {
  const filteredExpenses = getVisibleExpenses(expenses, filter("light"));
  expect(filteredExpenses).toEqual([expenses[0]]);
});
test("should sort expenses by date", () => {
  const filteredExpenses = getVisibleExpenses(expenses, filter("", "date"));
  expect(filteredExpenses).toEqual([expenses[1], expenses[0], expenses[2]]);
});
test("should sort expenses by amount", () => {
  const filteredExpenses = getVisibleExpenses(expenses, filter("", "amount"));
  expect(filteredExpenses).toEqual([expenses[0], expenses[1], expenses[2]]);
});
test("should filter expenses by start Date", () => {
  const filteredExpenses = getVisibleExpenses(
    expenses,
    filter("", "date", moment(new Date().setDate(15)))
  );
  expect(filteredExpenses).toEqual([expenses[1], expenses[0]]);
});
test("should filter expenses by end date", () => {
  const filteredExpenses = getVisibleExpenses(
    expenses,
    filter("", "date", undefined, moment(new Date().setDate(21)))
  );
  expect(filteredExpenses).toEqual([expenses[0], expenses[2]]);
});
