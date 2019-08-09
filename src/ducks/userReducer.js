import axios from "axios";

import { LOGIN, SIGNUP, LOGOUT } from "./actionTypes";

const initialState = {
  users: [],
  user: {}
};

export const signup = (username, password) => {
  let userInfo = axios
    .post("/api/signup", { username, password })
    .then(res => res.data);
  return {
    type: SIGNUP,
    payload: userInfo
  };
};

export const login = (username, password) => {
  let userInfo = axios
    .post("/api/login", { username, password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: userInfo
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: axios.delete("/api/logout")
  };
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP + "_FULFILLED":
      return { ...state, user: payload };
    case LOGIN + "_FULFILLED":
      return { ...state, user: payload };
    case LOGOUT + "_FULFILLED":
      return { users: [], user: {} };
    default:
      return state;
  }
}
