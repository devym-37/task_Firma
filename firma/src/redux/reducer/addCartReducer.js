const initialState = {
  amount: 0,
};

const addCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDCART": {
      return {
        ...state,
        amount: action.amount + 1,
      };
    }

    default:
      return state;
  }
};

export default addCartReducer;
