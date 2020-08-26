// 引入axios
import axios from "axios";
import * as commonConfig from "../common/config";
export default function request(options) {
  return new Promise((resolve, reject) => {
    // 1. 实例配置
    const insOptions = {
      baseURl: commonConfig.BASE_URL,
      timeout: commonConfig.TIME_OUT,
    };
    // 2. 创建axios 实例
    const axiosInstance = axios.create(insOptions);
    // 3. 请求拦截
    axiosInstance.interceptors.request.use(
      (config) => {
        // 3-1 页面添加loading组件
        // 3-2 token 鉴权
        // ……
        return config;
      },
      (err) => {
        return err;
      }
    );
    // 4. 响应拦截
    axiosInstance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        // 错误码处理
        if (err && err.response) {
        }
        return err;
      }
    );
    // 5 网络请求
    axiosInstance(options)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
