import { action } from "typesafe-actions";
import { CounterActionType } from "./types";

export const incrementCounter = () => action(CounterActionType.INCREMENT);
export const decrementCounter = () => action(CounterActionType.DECREMENT);
