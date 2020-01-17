import {
    SET_PORT,
    SET_ENDPOINT,
    SET_HEADER,
    SET_BODY
  } from "../Actions/actions";
  
  const initialState = {
    port: "3333",
    endpoint: "/",
    header: "",
    body: ""
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PORT:
        return {
          ...state,
          port: action.payload
        };
      case SET_ENDPOINT:
        return {
          ...state,
          endpoint: action.payload
        };
      case SET_HEADER:
        return {
          ...state,
          header: action.payload
        };
      case SET_BODY:
        return {
          body: action.payload
        };
      default:
        return state;
    }
  };