import Vue from 'vue'
import App from './App.vue'
// 路由组件
import router from './router/index.js'
// 初始化文件
import './assets/style/Initialize.css'
// 图标文件
import './assets/icon/iconfont.css'
// vant-css文件
import 'vant/lib/index.css';

// 按需加载vant组件
import { Cell, Popup, DatetimePicker, Toast, Col, Row, Dialog, Area,Icon,Calendar   } from 'vant'
Vue.use(Cell);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
Vue.use(Dialog);
Vue.use(Area);
Vue.use(Icon);
Vue.use(Calendar)



Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
