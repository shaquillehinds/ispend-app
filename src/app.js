import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

const app = <AppRouter />;

ReactDOM.render(app, document.getElementById("root"));
