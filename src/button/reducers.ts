import {
  CounterState,
  CounterAction,
  CounterActionType,
  IncrementAction,
  DecrementAction
} from "./types";
import { action } from "typesafe-actions";
import { Action } from "redux";

const initialState: CounterState = {
  count: 0
};

const count = (
  state: CounterState = initialState,
  action: Action | CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
  }
};
