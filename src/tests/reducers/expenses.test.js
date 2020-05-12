import expenseReducer from "../../reducers/expenses";
import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
import { dates, expenses, filter } from "../fixtures/expenses";

let state;

beforeEach(() => {
  state = [expenses[0], expenses[1], expenses[2]];
});

test("should add expenses to reducer state", () => {
  const newExpense = {
    description: "internet bill",
    note: "pay the internet bill",
    amount: 8500,
    createdAt: dates[0],
  };
  const newState = expenseReducer(state, addExpense(newExpense));
  expect(newState).toEqual([
    ...state,
    {
      id: expect.any(String),
      description: "internet bill",
      note: "pay the internet bill",
      amount: 8500,
      createdAt: dates[0],
    },
  ]);
});

test("should remove expense from state", () => {
  const newState = expenseReducer(state, removeExpense({ id: "2" }));
  expect(newState).toEqual([expenses[0], expenses[2]]);
});

test("should edit an expense from state", () => {
  const updates = { note: "phone bill has been paid" };
  const newState = expenseReducer(state, editExpense("3", updates));
  expect(newState).toEqual([
    expenses[0],
    expenses[1],
    {
      id: "3",
      description: "phone bill",
      note: "phone bill has been paid",
      amount: 3000,
      createdAt: dates[0],
    },
  ]);
});
