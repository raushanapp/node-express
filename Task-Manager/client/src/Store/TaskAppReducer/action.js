import * as types from "./action.type.js";
import axios from "axios";

// create task

export const createTaskApiCall = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_TASK_REQUEST });
  return axios
    .post("http://localhost:4000/api/v1/task", payload)
    .then((res) => {
      return dispatch({ type: types.CREATE_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({
        type: types.CREATE_TASK_FAILURE,
        payload: err.response.data,
      });
    });
};

// get all task
export const getAllTaskApiCall = () => (dispatch) => {
  dispatch({ type: types.GET_ALL_TASK_REQUEST });
  return axios
    .get("http://localhost:4000/api/v1/task")
    .then((res) => {
      return dispatch({ type: types.GET_ALL_TASK_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_ALL_TASK_FAILURE, payload: err.data });
    });
};
// get single task


// update task
  

// delete task by id
export const taskDeleteApiCall = (id) => (dispatch) => {
  // console.log(id)
   dispatch({ type: types.DELETE_TASK_REQUEST });
   return axios
     .delete(`http://localhost:4000/api/v1/task/${id}`)
     .then((res) => {
       return dispatch({
         type: types.DELETE_TASK_SUCCESS,
         payload: res.data,
       });
     })
     .catch((err) => {
       return dispatch({
         type: types.DELETE_TASK_FAILURE,
         payload: err.data,
       });
     });
}