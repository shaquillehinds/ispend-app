import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import database from "../firebase/database";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

const AppRouter = (props) => {
  useEffect(() => {
    (async () => {
      const expenses = [];
      const snapshot = await database.ref("expenses").once("value");
      console.log(snapshot.val());
      await snapshot.forEach((child) => {
        expenses.push({
          id: child.key,
          ...child.val(),
        });
      });
      expenses.forEach((expense) => {
        props.dispatch(addExpense(expense));
      });
      console.log(expenses);
    })();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ExpenseDashboardPage} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default connect()(AppRouter);
