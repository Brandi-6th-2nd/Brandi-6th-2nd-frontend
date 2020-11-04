import React, { createContext, useReducer } from "react";
import combineReducers from "react-combine-reducers";
import { productAddInitialState, productAddReducer } from "./productAddContext";

const GlobalContext = createContext();

const [globalReducer, globalInitialState] = combineReducers({
  productAdd: [productAddReducer, productAddInitialState],
});

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, globalInitialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
