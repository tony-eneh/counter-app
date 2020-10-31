export const loggingMiddleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  // log before state gets changed by the reducers
  console.log("%c state before", "background:red;color:white", getState());

  next(action);

  // log after changing state
  console.log("%c state after", "background:indigo;color:white", getState());
};
