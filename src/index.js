import React from "react";
import "./index.css";
import App from "./App";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import shoppingCartStore from "./shoppingCart/shoppingCartStore";

const store = shoppingCartStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
