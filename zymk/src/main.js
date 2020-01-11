import Vue from 'vue'
import App from './layouts/App.vue'
import { Icon } from 'vant';
import { TreeSelect } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
Vue.use(Search);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);
Vue.use(TreeSelect);
Vue.config.productionTip = false
// import 'vant/lib/index.css';
import './assets/css/base.css';
import '@/assets/js/font.js';
import router from '@/plugins/router.js';

import './plugins/axios'//引入axios插件的配置
//引入模板变量配置
import '../config/template.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
