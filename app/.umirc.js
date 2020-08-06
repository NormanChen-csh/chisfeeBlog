import { resolve } from "path";

export default {
  treeShaking: true,
  routes: [
    {
      path: '/user',
      component: '../layouts/normal',
      routes: [
        { 
          name: 'login',
          path: '/user/login', 
          component: '../pages/User/login' },
      ]
    },
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/home' },
        { path: '/articleDetail', component: '../pages/articleDetail' }
      ]
    },
  ],
  alias: {'@': resolve(__dirname, './src')},
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'app',
      dll: true,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
