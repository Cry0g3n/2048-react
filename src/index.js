import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./components/App";
import createStore from "./store";
import baseStyles from "./styles/index";

const store = createStore();

const render = () => {
  baseStyles();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();
