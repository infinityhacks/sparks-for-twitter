export const setUserInfo = (data) => {
  return {
    type: "SET_USER_INFO",
    payload: data,
  };
};
export const setHomeTimeLine = (data) => {
  return {
    type: "SET_HOME_TIME_LINE",
    payload: data,
  };
};
export const setHomeVideo = (data) => {
  return {
    type: "SET_HOME_VIDEO",
    payload: data,
  };
};
export const setHomePhoto = (data) => {
  return {
    type: "SET_HOME_PHOTO",
    payload: data,
  };
};