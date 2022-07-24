import {
  REMOVE_USER,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  STORE_USER,
} from "./actionTypes";

const initialState = {
  user: null,
  isLoadingUser: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_USER:
      return {
        ...state,
        isLoadingUser: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        user: action.payload,
        isLoadingUser: false,
      };
    case FETCH_USER_FAILURE:
      return {
        user: null,
        isLoadingUser: false,
      };
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default Reducer;
