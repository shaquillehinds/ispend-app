import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>iSPEND</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
  </header>
);

export default Header;
