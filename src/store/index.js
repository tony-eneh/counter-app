import { reducer } from "../reducers";
import { applyMiddleware, createStore } from "redux";
import { loggingMiddleware } from "../middleware";
import reduxLogger from "redux-logger";

const initialState = {
  days: 11,
  hours: 31,
  minutes: 27,
  seconds: 11,
  activeSession: "DAYS",
};

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(loggingMiddleware, reduxLogger)
);
