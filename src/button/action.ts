import { action } from "typesafe-actions";
import { CounterActionType, IncrementAction, DecrementAction } from "./types";

export const incrementCounter = () => action(CounterActionType.INCREMENT);
export const decrementCounter = () => action(CounterActionType.DECREMENT);
