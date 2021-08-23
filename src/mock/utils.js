import { code } from '@/config/const/response';
const getRes = (data, type = 'success', dataKey = 'data', params = {}) => {
  const res = {
    success: params => {
      return {
        code: code.success,
        [dataKey]: data,
        ...params,
      };
    },
    error: params => {
      return {
        code: code.error,
        [dataKey]: data,
        ...params,
      };
    },
  };
  return res[type] && typeof res[type] === 'function' ? res[type](params) : res.success(params);
};

export { getRes };
