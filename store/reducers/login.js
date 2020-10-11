const initState = {
  userInfo: null,
  homeTimeline: null,
  homeVideo: null,
  homePhoto: null
};
export const login = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return { ...state, userInfo: action.payload };
    case "SET_HOME_TIME_LINE":
      return { ...state, homeTimeline: action.payload };
    case "SET_HOME_VIDEO":
      return { ...state, homeVideo: action.payload };
    case "SET_HOME_PHOTO":
      return { ...state, homePhoto: action.payload };
    default:
      return state;
  }
};
