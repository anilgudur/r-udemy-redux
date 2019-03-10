const initialState = {
  counter: 0,
  results: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case "DELETE_RESULT":
      // const index = 2;
      // const newArray = [...state.results];
      // newArray.splice(index, 1);
      //const updatedArray = state.results.filter((row, index) => index !== 2);
      const updatedArray = state.results.filter(row => row.id !== action.id);
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
