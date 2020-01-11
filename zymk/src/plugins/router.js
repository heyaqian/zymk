import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from '../pages/login.vue';
import Detail from '../pages/detail.vue';
import Home from '../pages/home.vue';
import Reg from '../pages/reg.vue';
import User from '../pages/user.vue';
import NoPage from '../pages/nopage.vue';
import Classify from '../pages/classify.vue';
import List from '../pages/list.vue';

let routes = [
	{path:'/login',component:Login,name:'登录'},
	{path:'/list/:kind',component:List},
	{path:'/detail/:id',component:Detail,name:'详情'},
	{path:'/home',component:Home,name:'漫客商城'},
	{path:'/reg',component:Reg,name:'注册'},
	{path:'/user',component:User,name:'我的'},
	{path:'/classify',component:Classify},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
];

let router = new VueRouter({
	mode:'history',
	routes
	//q 这一步是键值相等的简写
})

// console.log(router)
export default router;