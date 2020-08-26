import request from "@/services/request";

export function fetchList(query) {
  return request({
    url: "api/todos",
    method: "get",
    params: query,
  });
}

// export function getList(limit, offset) {
//     return request({
//       url: "/top/album",
//       params: {
//         limit,
//         offset
//       }
//     })
//   }
