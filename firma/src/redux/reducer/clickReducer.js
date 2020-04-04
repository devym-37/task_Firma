const initialState = {
  click: 0,
};

const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK": {
      return {
        ...state,

        click: action.click + 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default clickReducer;
