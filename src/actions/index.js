export const changeTimeAction = (direction) => {
  //   direction is an enum that is either "DECREASE_COUNTER" or "INCREASE_COUNTER"
  return {
    type: "CHANGE_TIME",
    payload: { direction },
  };
};

export const setActiveSessionAction = (activeSession) => {
  //   activeSession is either "minutes","seconds","hours", "days"
  return {
    type: "SET_ACTIVE_SESSION",
    payload: { activeSession },
  };
};
