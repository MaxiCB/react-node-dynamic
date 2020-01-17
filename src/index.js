import React from "react";
import ReactDOM from "react-dom";
// Styles
import "./Styles/index.css";
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import App from "./Components/App";
// Services
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import * as serviceWorker from "./serviceWorker";

// Reducer
import { rootReducer } from "./Reducers/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
