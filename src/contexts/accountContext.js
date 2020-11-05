export const accountIntialState = {
  accountType: null,
};

export const accountReducer = (state, action) => {
  switch (action.type) {
    case "setAccountType":
      return {
        ...state,
        accountType: action.value,
      };
    default:
      return state;
  }
};
