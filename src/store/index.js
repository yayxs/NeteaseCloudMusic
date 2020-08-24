/*
 * @Author: yayxs
 * @Date: 2020-08-22 11:48:40
 * @LastEditTime: 2020-08-22 12:52:28
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\store\index.js
 * @
 */
import { createStore, applyMiddleware, compose } from "redux";
import { counterReducer } from "../pages/Home";

// const store = createStore(
//   counterReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const middlewares = [];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  counterReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
