import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "./styles/style.scss";

import Router from "./routers/Routers";
// others

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AlertProvider>,
  document.getElementById("root")
);
