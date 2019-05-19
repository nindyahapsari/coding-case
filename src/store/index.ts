import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import count from "../button/reducers";
import { CounterState } from "../button/types";

const reducers = combineReducers({
  count
});

export interface State {
  count: CounterState;
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeSet = (initialState?: State) =>
  createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(logger))
  );

const store = storeSet();

export default store;
