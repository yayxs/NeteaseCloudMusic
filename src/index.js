/*
 * @Author: yayxs
 * @Date: 2020-08-21 20:44:48
 * @LastEditTime: 2020-08-26 22:02:46
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

import { fetchList } from "./api/djRadio";

// const TestComp = () => {
//   useEffect(() => {
//     fetchList().then((res) => {
//       console.log(res);
//     });
//     return () => {};
//   }, []);
//   return <>测试组件</>;
// };

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
