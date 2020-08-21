/*
 * @Author: yayxs
 * @Date: 2020-08-21 22:10:50
 * @LastEditTime: 2020-08-21 22:25:12
 * @LastEditors: yayxs
 * @Description:
 * @FilePath: \NeteaseCloudMusic\setupProxy.js
 * @
 */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8888",
      changeOrigin: true,
    })
  );
};
