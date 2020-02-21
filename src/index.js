import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App/";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { todo } from "./reducers/todo";
const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
