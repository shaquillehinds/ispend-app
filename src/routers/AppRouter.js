import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
          <PrivateRoute path="/create" component={AddExpensePage} />
          <PrivateRoute path="/edit/:id" component={EditExpensePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
