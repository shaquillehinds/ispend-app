import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import { expensesStatic as expenses } from "../fixtures/expenses";

test("should render Expesense List Item", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  console.log(expenses[0]);
  expect(wrapper).toMatchSnapshot();
});
