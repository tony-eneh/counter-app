import { reducer } from "../reducers";
import { createStore } from "redux";

const initialState = {
  days: 11,
  hours: 31,
  minutes: 27,
  seconds: 11,
  activeSession: "DAYS",
};

export const store = createStore(reducer, initialState);
