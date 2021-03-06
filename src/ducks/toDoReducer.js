import { GET_TODO, ADD_TO_DO, EDIT_TO_DO, DELETE_TODO } from "./actionTypes";
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

export const addToDo = (user_id, item) => {
  let fullList = axios
    .post(`/api/addToDo`, { user_id, item })
    .then(res => res.data);
  return {
    type: ADD_TO_DO,
    payload: fullList
  };
};

export const editTodo = (user_id, todo_id, item) => {
  let fullList = axios
    .put(`/api/editTodo`, { user_id, todo_id, item })
    .then(res => res.data);
  return {
    type: EDIT_TO_DO,
    payload: fullList
  };
};

export const deleteTodo = (user_id, todo_id) => {
  let fullList = axios
    .delete(`/api/deleteTodo/${user_id}?todo_id=${todo_id}`)
    .then(res => res.data);
  return {
    type: DELETE_TODO,
    payload: fullList
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case GET_TODO + "_FULFILLED":
      return { ...state, toDo: payload };
    case ADD_TO_DO + "_FULFILLED":
      return { ...state, toDo: payload };
    case EDIT_TO_DO + "_FULFILLED":
      return { ...state, toDo: payload };
    case DELETE_TODO + "_FULFILLED":
      return { ...state, toDo: payload };
    default:
      return state;
  }
}
