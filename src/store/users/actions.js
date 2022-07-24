import {
  FETCH_USER,
  REMOVE_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  STORE_USER,
} from "./actionTypes";

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = () => {
  return {
    type: FETCH_USER_FAILURE,
  };
};

export const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const storeUser = (user) => {
  return {
    type: STORE_USER,
    payload: user,
  };
};

export const getUserProfile = () => {
  return async (dispatch) => {
    if (localStorage.getItem("id")) {
      try {
        dispatch(fetchUser());
        const res = await fetch(
          `http://localhost:3000/users/${localStorage.getItem("id")}`
        );
        const user = await res.json();
        if (user) {
          dispatch(fetchUserSuccess(user));
        }
      } catch (error) {
        dispatch(fetchUserFailure());
      }
    }
  };
};
