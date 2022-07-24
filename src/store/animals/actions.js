import {
  GET_ALL_ANIMALS,
  GET_ALL_ANIMALS_FAILURE,
  GET_ALL_ANIMALS_SUCCESS,
} from "./actionTypes";

export const getAllAnimals = () => {
  return {
    type: GET_ALL_ANIMALS,
  };
};

export const getAllAnimalsSuccess = (animals) => {
  return {
    type: GET_ALL_ANIMALS_SUCCESS,
    payload: animals,
  };
};

export const getAllAnimalsFailure = () => {
  return {
    type: GET_ALL_ANIMALS_FAILURE,
  };
};

export const fetchAnimals = () => {
  return async (dispatch) => {
    try {
      dispatch(getAllAnimals());
      const res = await fetch(
        `https://animals-json-server.herokuapp.com/animals`
      );
      const animals = await res.json();
      dispatch(getAllAnimalsSuccess(animals));
    } catch (error) {
      dispatch(getAllAnimalsFailure());
    }
  };
};
