import {
  LOGIN_USER_SUCCESS,
  LOGIN,
  LOGIN_USER_FAILED,
  LOGGED_IN,
  NOT_LOGGED_IN,
} from "../actions";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: {},
  loading: false,
  error: "",
  fullLoading: true,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload.user };
    case LOGIN:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_FAILED:
      return { ...state, loading: false, error: "Giris Basarısız" };
    case LOGGED_IN:
      return { ...state, fullLoading: false, user: action.payload };
    case NOT_LOGGED_IN:
      return { ...state, fullLoading: false };
    default:
      return state;
  }
};
