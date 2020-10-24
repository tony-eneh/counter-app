export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_SESSION":
      return { ...state, activeSession: action.payload.activeSession };
    case "CHANGE_TIME":
      // depending on the direction of the change action
      // we will either be adding or subtracting a 1 from the activeSession variable
      const delta = action.payload.direction === "INCREASE_COUNTER" ? 1 : -1;

      // convert to small letters to match the format of the object properties
      const activeSession = state.activeSession.toLowerCase();
      const activeSessionValue = state[activeSession];
      const newValue = activeSessionValue + delta;

      // I am using ES6 computed value syntax [] to assign the new value to the correct active session
      return { ...state, [activeSession]: newValue };

    default:
      return { ...state };
  }
};
