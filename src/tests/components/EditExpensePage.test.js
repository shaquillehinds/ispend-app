import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import { expensesStatic as expenses } from "../fixtures/expenses";

let wrapper, startEditExpense, startRemoveExpense, history, match;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  match = { params: { id: expenses[1].id } };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
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
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("Should handle removeExpense", () => {
  const e = { target: { innerText: "Confirm" } };
  e.persist = jest.fn();
  wrapper.find("button").at(0).simulate("click", e);
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
