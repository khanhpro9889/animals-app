import AnimalReducer from "./animals/reducer";
import UserReducer from "./users/reducer";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({ AnimalReducer, UserReducer });
const middlewares = applyMiddleware(thunk);
const composeEnhanced = compose(
  middlewares,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const store = createStore(reducers, composeEnhanced);

export default store;
