/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:33
 * @LastEditTime: 2020-08-27 21:07:49
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\childrenPages\recommend\store\actionCreators.js
 * @
 */
import { fetchBannerListApi } from "@/api/recommend.js";
import { FETCH_BANNER_LIST_SUCCESS } from "./actionTypes";

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
