import {
  GET_ALL_ANIMALS,
  GET_ALL_ANIMALS_SUCCESS,
  GET_ALL_ANIMALS_FAILURE,
} from "./actionTypes";

const initialState = {
  isLoadingAnimals: false,
  animals: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ANIMALS:
      return {
        ...state,
        isLoadingAnimals: true,
      };
    case GET_ALL_ANIMALS_SUCCESS:
      return {
        animals: action.payload,
        isLoadingAnimals: false,
      };
    case GET_ALL_ANIMALS_FAILURE:
      return {
        animals: [],
        isLoadingAnimals: false,
      };
    default:
      return state;
  }
};

export default reducer;
