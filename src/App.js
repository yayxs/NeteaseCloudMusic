/*
 * @Author: yayxs
 * @Date: 2020-08-21 20:44:48
 * @LastEditTime: 2020-09-01 23:35:59
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\App.js
 * @
 */

import "./styles/Base.css";
import React, { Suspense, lazy } from "react";
import { HashRouter as Router } from "react-router-dom";
import YYMainComp from "./router";

const YYHeaderComp = lazy(() => import("./components/header"));
const YYFooterComp = lazy(() => import("./components/footer/index"));
const YYPlayerBarPage = lazy(() => import("./pages/player/playControlBar"));

const App = () => (
  <Router>
    <Suspense fallback={<div>你发现了秘密...</div>}>
      <YYHeaderComp />
      <YYMainComp />
      <YYFooterComp />
      <YYPlayerBarPage />
    </Suspense>
  </Router>
);

export default App;
