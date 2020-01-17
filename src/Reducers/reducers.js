import {
  SET_PORT,
  SET_METHOD,
  SET_ENDPOINT,
  SET_HEADER,
  SET_BODY,
  SET_RESPONSE
} from "../Actions/actions";

const initialState = {
  port: "5000",
  method: "get",
  endpoint: "",
  header: "{}",
  body: "{}",
  response: "{}"
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PORT:
      return {
        ...state,
        port: action.payload
      };
    case SET_METHOD:
      return {
        ...state,
        method: action.payload
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
        ...state,
        body: action.payload
      };
      case SET_RESPONSE:
      return {
        ...state,
        response: action.payload
      };
    default:
      return state;
  }
};
