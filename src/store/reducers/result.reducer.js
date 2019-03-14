import * as actionTypes from "../action.constant";

const initialState = {
  results: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.counter })
      };
    case actionTypes.DELETE_RESULT:
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
