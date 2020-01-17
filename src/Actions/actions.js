import axios from "axios";

export const SET_PORT = "SET_PORT";
export const SET_ENDPOINT = "SET_ENDPOINT";
export const SET_HEADER = "SET_HEADER";
export const SET_BODY = "SET_BODY";
export const SET_METHOD = "SET_METHOD";

export const setPort = port => {
  return {
    type: SET_PORT,
    payload: port
  };
};

export const setMethod = method => {
  return {
    type: SET_METHOD,
    payload: method
  }
}

export const setEndpoint = endpoint => {
  return {
    type: SET_ENDPOINT,
    payload: endpoint
  };
};

export const setHeader = header => {
  return {
    type: SET_HEADER,
    payload: header
  };
};

export const setBody = body => {
  return {
    type: SET_BODY,
    payload: body
  };
};
