export const changeTimeAction = (direction, activeSession) => {
  //   direction is an enum that is either "DECREASE" or "INCREASE"
  //   activeSession is either "minutes","seconds","hours", "days"
  return {
    type: direction,
    payload: { activeSession },
  };
};
