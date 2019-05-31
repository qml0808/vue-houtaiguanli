import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '../components/login.vue'
import home from '../components/home.vue'



export default new Router({
  routes: [//配置路由
    // 当访问根目录时重定向到home
    {path:'/',redirect:'/home'},
    {path:'/login',name:'login',component:login}, // 登陆页面
    {path:'/home',name:'home',component:home}, // 主页
  ]
})
