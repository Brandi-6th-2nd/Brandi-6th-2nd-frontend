import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { GlobalProvider } from "./contexts/globalContext";
import { GlobalStyles } from "./Styles/GlobalStyles";

ReactDOM.render(
  <GlobalProvider>
    <Routes />
    <GlobalStyles />
  </GlobalProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
