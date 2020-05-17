import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import { expensesStatic as expenses } from "../fixtures/expenses";

let wrapper, editExpense, removeExpense, history, match;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  match = { params: { id: expenses[1].id } };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      match={match}
      expense={expenses[1]}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("Should handle removeExpense", () => {
  const e = { target: { innerText: "Confirm" } };
  wrapper.find("button").at(0).simulate("click", e);
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle cancel button click", () => {
  wrapper.find("button").at(1).simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
});
