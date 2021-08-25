import { createFromIconfontCN } from '@ant-design/icons-vue';

const iconfontVersion = ['2510568_5irupr55m']; // 替换 iconfont库
const iconfontUrlCss = `//at.alicdn.com/t/font_$key.css`;
const iconfontUrljs = `//at.alicdn.com/t/font_$key.js`;

// 定义动态插入方法
const loadStyle = (url: string) => {
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
};
// 新增 导出
export const IconFont = createFromIconfontCN({
  scriptUrl: iconfontUrljs.replace('$key', iconfontVersion[0]),
});

// 动态插入
iconfontVersion.forEach(ele => {
  loadStyle(iconfontUrlCss.replace('$key', ele));
});
