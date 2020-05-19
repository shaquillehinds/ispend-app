import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { expenses } from "../fixtures/expenses";

test("should render expensesSummary correct with 1 expense", () => {
  const expense = [expenses[1]];
  const wrapper = shallow(<ExpensesSummary expenses={expense} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expensesSummary correct with 2 expenses", () => {
  const expense = [expenses[1], expenses[2]];
  const wrapper = shallow(<ExpensesSummary expenses={expense} />);
  expect(wrapper).toMatchSnapshot();
});
