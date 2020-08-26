/*
 * @Author: yayxs
 * @Date: 2020-08-26 21:37:00
 * @LastEditTime: 2020-08-26 22:37:23
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\src\api\djRadio.js
 * @
 */
import request from "@/services/request";

export function fetchList(query) {
  return request({
    url: "api/todos",
    method: "get",
    params: query,
  });
}
