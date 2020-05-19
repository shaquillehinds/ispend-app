import React from "react";
import { shallow } from "enzyme";
import { expenses, expensesStatic } from "../fixtures/expenses";
import totalExpenses from "../../selectors/expenses-total";

test("should add up total expenses", () => {
  const total = totalExpenses(expenses);
  expect(total).toBe(20200);
});

test("should return zero", () => {
  const noExpenses = [];

  const total = totalExpenses(noExpenses);

  expect(total).toBe(0);
});

test("should correctly add a single expense", () => {
  const expense = [
    {
      id: "1",
      description: "light bill",
      note: "pay the light bill",
      amount: 10000,
      createdAt: 2000,
    },
  ];
  const total = totalExpenses(expense);
  expect(total).toBe(10000);
});
