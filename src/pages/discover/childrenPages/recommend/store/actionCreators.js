/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:33
 * @LastEditTime: 2020-09-05 19:31:32
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\discover\childrenPages\recommend\store\actionCreators.js
 * @
 */
import { fetchBannerListApi, fetchPersonalizedApi } from "@/api/recommend.js";
import {
  FETCH_BANNER_LIST_SUCCESS,
  PERSONALIZED_TYPE_SUCCESS,
} from "./actionTypes";

export const changeBannerLsitAction = (data) => ({
  type: FETCH_BANNER_LIST_SUCCESS,
  payload: { data },
});

export const getBannerListAsyncAction = () => (dispatch) => {
  fetchBannerListApi()
    .then((res) => {
      if (res.code === 200) {
        dispatch(changeBannerLsitAction(res.banners));
      }
    })
    .catch((err) => {});
};

export const changePersonalizedAction = (data) => ({
  type: PERSONALIZED_TYPE_SUCCESS,
  payload: data,
});

export const fetchPersonalizedAsyncAction = () => (dispatch) => {
  fetchPersonalizedApi()
    .then((res) => {
      console.log(res);
      if (res.code === 200) {
        dispatch(changePersonalizedAction(res.result.splice(0, 8)));
      }
    })
    .catch((err) => {});
};
