import { Action } from "redux";
import {} from "typesafe-actions";

export interface CounterState {
  count: number;
}

export enum CounterActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

export interface IncrementAction extends Action {
  type: CounterActionType.INCREMENT;
}

export interface DecrementAction extends Action {
  type: CounterActionType.DECREMENT;
}

export type CounterAction = IncrementAction | DecrementAction;
