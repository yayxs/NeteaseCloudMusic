/*
 * @Author: yayxs
 * @Date: 2020-08-21 20:44:48
 * @LastEditTime: 2020-08-22 11:50:05
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\index.js
 * @
 */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { fetchList } from "./api/user";

const TestComp = () => {
  useEffect(() => {
    fetchList().then((res) => {
      console.log(res);
    });
    return () => {};
  }, []);
  return <>测试组件</>;
};

ReactDOM.render(
  <>
    <Provider store={store}>
      <TestComp />
    </Provider>
  </>,
  document.getElementById("root")
);
