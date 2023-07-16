import * as types from "./action.type";

const initialState = {
    isLoading: false,
    isError: false,
    data:[]
}

export const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
      case types.CREATE_TASK_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case types.CREATE_TASK_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          data: payload,
          isError: false,
        };
      }
      case types.CREATE_TASK_FAILURE: {
        console.log(payload);
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case types.GET_ALL_TASK_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case types.GET_ALL_TASK_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          data: payload,
          isError: false,
        };
      }
      case types.GET_ALL_TASK_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case types.GET_SINGLE_TASK_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case types.GET_SINGLE_TASK_SUCCESS: {
        console.log("single", payload);
        return {
          ...state,
          isLoading: false,
          data: payload,
          isError: false,
        };
      }
      case types.GET_SINGLE_TASK_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case types.UPDATE_TASK_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case types.UPDATE_TASK_SUCCESS: {
        console.log("single", payload);
        return {
          ...state,
          isLoading: false,
          data: payload,
          isError: false,
        };
      }
      case types.UPDATE_TASK_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      default: {
        return state;
      }
    }
}