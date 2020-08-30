/*
 * @Author: yayxs
 * @Date: 2020-08-21 20:44:48
 * @LastEditTime: 2020-08-30 12:49:43
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\index.js
 * @
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
