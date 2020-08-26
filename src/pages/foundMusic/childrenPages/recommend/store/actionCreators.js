/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:27:33
 * @LastEditTime: 2020-08-26 23:48:39
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\pages\foundMusic\childrenPages\recommend\store\actionCreators.js
 * @
 */
import { fetchBannerListApi } from "@/api/recommend.js";
import Axios from "axios";

// async
export const getBannerListAsyncAction = () => (dispatch) => {
  // Axios(`http://localhost:8888/banner`).then((res) => {
  //   console.log(res);
  // });
  fetchBannerListApi()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {});
};
