// 引入vue
import Vue from 'vue'

// 引入axios
import axios from 'axios'

// 创建插件对象
let myaxios = {}

// 给自定义插件添加install方法
myaxios.install = function(Vue){
    // 设置统一请求的API
    axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
    // 给Vue实例对象原型添加方法
    Vue.prototype.$http = axios
}

export default myaxios