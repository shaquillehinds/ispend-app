import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import { expenses } from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/database";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense("123abc");
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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2],
  });
});

test("should add expense to database and store", async () => {
  const store = createMockStore({});
  const dispatched = await store.dispatch(startAddExpense(expenses[0]));
  expect(dispatched).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenses[0], id: expect.any(String) },
  });
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenses[0], id: expect.any(String) },
  });
  const snapshot = await database.ref(`expenses/${dispatched.expense.id}`).once("value");
  expect(snapshot.key).toBe(dispatched.expense.id);
});
test("should add expense with defaults database and store", async () => {
  const store = createMockStore({});
  const dispatched = await store.dispatch(startAddExpense());
  expect(dispatched).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });

  const snapshot = await database.ref(`expenses/${dispatched.expense.id}`).once("value");
  expect(snapshot.key).toBe(dispatched.expense.id);
});

// test("should setup add expense action object with default values", () => {
//   const result = addExpense();
//   expect(result).toEqual({
//     type: "ADD_EXPENSE",
//     expense: { description: "", amount: 0, note: "", createdAt: 0, id: expect.any(String) },
//   });
// });
