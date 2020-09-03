/*
 * @Author: yayxs
 * @Date: 2020-08-26 23:00:37
 * @LastEditTime: 2020-08-26 23:03:53
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\store\reducer.js
 * @
 */
import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from "@/pages/discover/childrenPages/recommend/store";
export default combineReducers({
  recommendReducer,
});
