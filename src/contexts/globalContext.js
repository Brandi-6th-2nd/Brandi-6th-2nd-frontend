import React, { createContext, useReducer } from "react";
import combineReducers from "react-combine-reducers";
import { productAddInitialState, productAddReducer } from "./productAddContext";
import { accountIntialState, accountReducer } from "./accountContext";

const GlobalContext = createContext();

const [globalReducer, globalInitialState] = combineReducers({
  account: [accountReducer, accountIntialState],
  productAdd: [productAddReducer, productAddInitialState],
});

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, globalInitialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
