const initState = {
  userInfo: null,
  homeTimeline: null,
};
export const login = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return { ...state, userInfo: action.payload };
    case "SET_HOME_TIME_LINE":
      return { ...state, homeTimeline: action.payload };
    default:
      return state;
  }
};
