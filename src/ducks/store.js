import { createStore, combineReducers, applyMiddleware } from "redux";

// import reducer
import promiseMiddleware from "redux-promise-middleware";
import toDoReducer from "./toDoReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  toDo: toDoReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(promiseMiddleware)
  )
);
