import axios from 'axios';
import { Toast } from "vant";
// import { Message } from "ant-design-vue";
// console.log(process.env.NODE_ENV);
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: "/",
  timeout: 36000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = async (error: { response: any; }) => {
  Toast.fail(
    "加载出错"
  );
  return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {

  return response.data;
  return errorHandler({ response });
}, errorHandler);

export default request;
