/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:34
 * @LastEditTime: 2020-09-05 19:32:46
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\discover\childrenPages\recommend\store\reducer.js
 * @
 */
import { Map } from "immutable";
import * as actionTypes from "./actionTypes";

const initState = Map({
  bannersList: [],
  personalizedList: [],
});

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BANNER_LIST_SUCCESS:
      return state.set("bannersList", action.payload.data);
    case actionTypes.PERSONALIZED_TYPE_SUCCESS:
      console.log(action.payload);
      return state.set("personalizedList", action.payload);
    default:
      return state;
  }
};
