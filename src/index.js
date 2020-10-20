import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Store/Reducers";
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
    <GlobalStyles />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
