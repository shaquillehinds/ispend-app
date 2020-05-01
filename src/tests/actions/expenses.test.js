import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import { TestScheduler } from "jest";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setut edit expense action object", () => {
  const action = editExpense("123abc", { note: "note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "note value" },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 11000,
    createdAt: 1980,
    note: "This is a note",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default values", () => {
  const result = addExpense();
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: { description: "", amount: 0, note: "", createdAt: 0, id: expect.any(String) },
  });
});
