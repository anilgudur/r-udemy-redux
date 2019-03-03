const initialState = {
  counter: 0
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value
      };
      break;
    default:
      return state;
  }
};

export default reducer;
