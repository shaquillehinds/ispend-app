import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expenses, state.filters));
});

store.dispatch(addExpense({ description: "Water Bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 1000 }));

// setTimeout(() => {
//   store.dispatch(setTextFilter("rent"));
// }, 3000);
// setTimeout(() => {
//   store.dispatch(setTextFilter("water"));
// }, 6000);
// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 9000);
// setTimeout(() => {
//   store.dispatch(setTextFilter(""));
// }, 12000);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));