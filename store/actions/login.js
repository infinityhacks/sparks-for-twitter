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
