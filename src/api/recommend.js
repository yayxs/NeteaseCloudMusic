/*
 * @Author: yayxs
 * @Date: 2020-08-26 22:35:37
 * @LastEditTime: 2020-09-05 19:17:03
 * @LastEditors: yayxs
 * @Description: 推荐 API
 * @FilePath: \NeteaseCloudMusic\src\api\recommend.js
 * @
 */
// import request from "@/services/request";

import { get } from "@/services/request";

const fetchBannerListApi = () => get("/banner");

const fetchPersonalizedApi = () => get("/personalized");

export { fetchBannerListApi, fetchPersonalizedApi };
