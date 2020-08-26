/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:34
 * @LastEditTime: 2020-08-26 23:04:43
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\childrenPages\recommend\store\reducer.js
 * @
 */
import { Map } from "immutable";
import * as actionTypes from "./actionTypes";

const initState = Map({
  bannersList: [],
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNER_LIST_SUCCESS:
      return state.set("bannersList", []);

    default:
      return state;
  }
};
