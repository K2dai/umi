import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [       //注释掉routes之后，就是约定式路由了
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  proxy:{
    '/api':{
      target:'https://i.maoyan.com/',
      changeOrigin:true
    }
  },
  antd:{
    mobile:false
  }
});
