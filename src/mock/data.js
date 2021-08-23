import Mock from 'mockjs';
import * as utils from '@/mock/utils';

Mock.mock('/api/list', 'get', () => {
  return utils.getRes({
    dmid: 'cc510770-1afa-11ea-854b-0decc2431746',
    username: '小明2',
    token:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZkT0gtRkpyQnc2U3B5Q2Y4SkRsX3E5Y3pBSTZXNEpBdG9qaFYzUWRlRW8ifQ.eyJqdGkiOiI2NDRkYTU0MC0yMmZhLTExZWEtOTI1NS1jYjRmOTgyMTQ2ODAiLCJpc3MiOiJpZG0uZG0tYWkuY24iLCJkbWlkIjoiY2M1MTA3NzAtMWFmYS0xMWVhLTg1NGItMGRlY2MyNDMxNzQ2IiwiaWF0IjoxNTc2ODI2OTQwLCJleHAiOjE1NzY4MzQxNDAsImF1ZCI6IngyLmRtLWFpLmNuIn0.k8U-PAc_0nmKiLjI7cYnUMVKL0cF2U8INaX5fU0vjNdbcEGUoX-19mCgGiHaV08WAC29j9_HjMgHnuKPGpaGWeB1KCWUVhaQx8O_izqHpQA1sXqxsgghdMtwZZGWmMjz7dwi0DUyRSGaAxOihvmcRHoZZrop4j_Vulw2oipsr5BiIViXlbvV57XeYdpfNAqhOnVgn2RBNrh1WbTKdopxsWdOA8f-MP8kp9J0SyLvxU6ISiA0khRJtO3J188I7vNx-HAZsO1-6GCYXeOpwrH8cE4F_NBHxMPJ5r-jGDcLB5GHK2xGjJKk5RzTMoZoAAbkhmA-9_q-pXxAuJ0L3nan3g',
    exp: 1576834140,
  });
});
