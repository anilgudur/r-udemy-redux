import * as actionTypes from "./actionTypes";

// without thunk i.e. synchronous execution
export const saveResult = counter => {
  return { type: actionTypes.STORE_RESULT, counter: counter };
};
// with thunk i.e. Asynchronous execution
export const storeResult = counter => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(counter));
    }, 2000);
  };
};

export const deleteResult = id => {
  return { type: actionTypes.DELETE_RESULT, id: id };
};
