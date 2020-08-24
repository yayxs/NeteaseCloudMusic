/*
 * @Author: yayxs
 * @Date: 2020-08-21 20:44:48
 * @LastEditTime: 2020-08-24 21:56:26
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\App.js
 * @
 */
import "normalize.css";
import "./styles/Base.scss";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const YYHeaderComp = lazy(() => import("./components/header/index"));
const YYFooterComp = lazy(() => import("./components/footer/index"));

const App = () => (
  <Router>
    <Suspense fallback={<div>加载中...</div>}>
      <YYHeaderComp />

      <YYFooterComp />
    </Suspense>
  </Router>
);

export default App;
