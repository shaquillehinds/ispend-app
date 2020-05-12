import getVisibleExpenses from "../../selectors/expenses";
import moment from "moment";

const date1 = new Date().setDate(9);
const date2 = new Date().setDate(18);
const date3 = new Date().setDate(27);

const expenses = [
  {
    description: "light bill",
    note: "pay the light bill",
    amount: 10000,
    createdAt: date2,
  },
  {
    description: "water bill",
    note: "pay the water bill",
    amount: 7200,
    createdAt: date3,
  },
  {
    description: "phone bill",
    note: "pay the phone bill",
    amount: 3000,
    createdAt: date1,
  },
];
const filter = (
  text = "",
  sortBy = "amount",
  startDate = moment().startOf("month"),
  endDate = moment().endOf("month")
) => ({
  text,
  sortBy,
  startDate,
  endDate,
});

test("should filter expenses by text", () => {
  const filteredExpenses = getVisibleExpenses(expenses, filter("light"));
  expect(filteredExpenses).toEqual([
    { description: "light bill", note: "pay the light bill", amount: 10000, createdAt: date2 },
  ]);
});
test("should sort expenses by date", () => {
  const filteredExpenses = getVisibleExpenses(expenses, filter("", "date"));
  expect(filteredExpenses).toEqual([
    { description: "water bill", note: "pay the water bill", amount: 7200, createdAt: date3 },
    { description: "light bill", note: "pay the light bill", amount: 10000, createdAt: date2 },
    { description: "phone bill", note: "pay the phone bill", amount: 3000, createdAt: date1 },
  ]);
});
test("should sort expenses by amount", () => {
  const filteredExpenses = getVisibleExpenses(expenses, filter("", "amount"));
  expect(filteredExpenses).toEqual([
    { description: "light bill", note: "pay the light bill", amount: 10000, createdAt: date2 },
    { description: "water bill", note: "pay the water bill", amount: 7200, createdAt: date3 },
    { description: "phone bill", note: "pay the phone bill", amount: 3000, createdAt: date1 },
  ]);
});
test("should filter expenses by start Date", () => {
  const filteredExpenses = getVisibleExpenses(
    expenses,
    filter("", "date", moment(new Date().setDate(15)))
  );
  expect(filteredExpenses).toEqual([
    { description: "water bill", note: "pay the water bill", amount: 7200, createdAt: date3 },
    { description: "light bill", note: "pay the light bill", amount: 10000, createdAt: date2 },
  ]);
});
test("should filter expenses by end date", () => {
  const filteredExpenses = getVisibleExpenses(
    expenses,
    filter("", "date", undefined, moment(new Date().setDate(21)))
  );
  expect(filteredExpenses).toEqual([
    { description: "light bill", note: "pay the light bill", amount: 10000, createdAt: date2 },
    { description: "phone bill", note: "pay the phone bill", amount: 3000, createdAt: date1 },
  ]);
});
