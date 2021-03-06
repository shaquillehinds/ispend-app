import {
  startAddExpense,
  setExpenses,
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
  startSetExpenses,
  startEditExpense,
} from "../../actions/expenses";
import { expenses } from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);
const uid = "thisismytestuid";
let store, expensesData;
beforeEach(async () => {
  store = createMockStore({ auth: { uid } });
  expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = {
      description,
      amount,
      note,
      createdAt,
    };
  });
  await database.ref(`users/${uid}/expenses`).set(expensesData);
});

test("should setup remove expense action object", () => {
  const action = removeExpense("123abc");
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
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

test("should setup setExpenses action object", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses,
  });
});

test("should add expense to database and store", async () => {
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
  const snapshot = await database.ref(`users/${uid}/expenses/${dispatched.expense.id}`).once("value");
  expect(snapshot.key).toBe(dispatched.expense.id);
});

test("should add expense with defaults database and store", async () => {
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
  const snapshot = await database.ref(`users/${uid}/expenses/${dispatched.expense.id}`).once("value");
  expect(snapshot.key).toBe(dispatched.expense.id);
});

test("should remove expense from database and store", async () => {
  const dispatched = await store.dispatch(startRemoveExpense({ id: expenses[0].id }));
  expect(dispatched).toEqual({
    type: "REMOVE_EXPENSE",
    id: expenses[0].id,
  });
  const snapshot = await database.ref(`users/${uid}/expenses/${expenses[0].id}`).once("value");
  expect(snapshot.val()).toBeNull();
});

test("should edit expense from firebase", async () => {
  const id = expenses[1].id;
  const updates = { ...expensesData["2"], note: "edited test from jest" };
  const dispatched = await store.dispatch(startEditExpense(id, updates));
  expect(dispatched).toEqual({
    type: "EDIT_EXPENSE",
    id,
    updates,
  });
  const snapshot = await database.ref(`users/${uid}/expenses/${id}`).once("value");
  expect(snapshot.val()).toEqual(updates);
});

test("should get expenses from database", async () => {
  const dispatched = await store.dispatch(startSetExpenses());
  expect(dispatched.type).toBe("SET_EXPENSES");
  expect(dispatched.expenses.length).toBe(3);
});
