// 引入vue
import Vue from 'vue'
// 引入app组件
import App from './App'
// 引入element-ui
import ElementUI from 'element-ui'
// 引入路由
import router from './router'

// 引入全局自定义axios插件
import myaxios from './assets/js/myaxios.js'
// 调用方法use
Vue.use(myaxios)


// 引入element-ui样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'
// 引入全局样式
import '../src/assets/css/index.css'

// 使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
