import database from "../firebase/database";

//ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return async (dispatch) => {
    const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };
    const res = await database.ref("expenses").push(expense);
    return dispatch(addExpense({ id: res.key, ...expense }));
  };
};

//REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return async (dispatch) => {
    const removed = await database.ref(`expenses/${id}`).remove();
    dispatch(removeExpense(id));
  };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id: id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return async (dispatch) => {
    await database.ref(`expenses/${id}`).update(updates);
    dispatch(editExpense(id, updates));
  };
};
//REMOVE_ALL_EXPENSES
export const removeAllExpenses = () => ({
  type: "REMOVE_ALL_EXPENSES",
});
