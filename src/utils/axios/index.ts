import axios, { AxiosInstance } from 'axios';
// import store from '@/store';
// import notification from 'ant-design-vue/es/notification';
import { VueAxios } from './axios';
import { message } from 'ant-design-vue';
// import { getBaseUrl } from '@/config/const/api';

// 创建 axios 实例
const request: AxiosInstance = axios.create({
  // API 请求的默认前缀
  // baseURL: import.meta.env.VITE_APP_BASE_URL + '',
  timeout: 6000, // 请求超时时间
});

// 异常拦截处理器
// const errorHandler = (error: AnyObject) => {
//   if (error.response) {
//     const data = error.response.data;
//     // 从 localstorage 获取 token
//     const token = getTokenByStore();
//     const status = error.response.status;
//     if (status === 404 || status === 400) {
//       message.error(data.error || '错误', 3);
//     }

//     if (status === 401) {
//       notification.error({
//         message: '失败',
//         description: '登录已过期',
//       });
//       if (token) {
//         // const store = useStore();
//         store.dispatch('userModule/logout').then(() => {
//           setTimeout(() => {
//             window.location.reload();
//           }, 1500);
//         });
//       }
//     }
//   }
//   return Promise.reject(error);
// };

// request interceptor
// request.interceptors.request.use(config => {
//   config.baseURL = getBaseUrl(config.url || '');
//   const token = getTokenByStore();
//   // 如果 token 存在
//   // 让每个请求携带自定义 token 请根据实际情况自行修改
//   if (token) {
//     config.headers['Authorization'] = token;
//   }
//   return config;
// }, errorHandler);

// response interceptor
// request.interceptors.response.use(response => {
//   if (response.status !== 200 && response.status !== 201) {
//     message.error(response.data.error || '错误', 3);
//     return response;
//   }
//   const { url, method } = response.config;
//   const ignoreMessageList = [{ method: 'post', path: '/apps' }];
//   if (
//     (method === 'post' || method === 'patch' || method === 'PUT') &&
//     !ignoreMessageList.some(x => url === x.path && method === x.method)
//   ) {
//     message.success('操作成功', 3);
//   }
//   return response;
// }, errorHandler);

const installer = {
  vm: {},
  install(Vue: VueApp): void {
    Vue.use(VueAxios, request);
  },
};

export default request;

export { installer as VueAxios, request as axios };
