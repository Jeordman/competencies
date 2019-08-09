import { GET_TODO } from "./actionTypes";
import axios from "axios";

let initialState = {
  toDo: []
};

export const getTodo = user_id => {
  let fullList = axios
    .get(`/api/getTodo/?user_id=${user_id}`)
    .then(res => res.data);
  return {
    type: GET_TODO,
    payload: fullList
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_TODO + "_FULFILLED":
      return { ...state, toDo: payload };
    default:
      return state;
  }
}
