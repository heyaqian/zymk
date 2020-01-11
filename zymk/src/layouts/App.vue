<template>
  <div id="app">
	<Header  :headTitle='this.$route.name' v-show="this.$root.bNav"/>
	<!-- //q 这是第一个孩子，依次排序的 -->
	<router-view></router-view>
	
	<Footer v-show="this.$root.bFoot"/>
  </div>
</template>

<script>

import Footer from './footer.vue'
import Header from './header.vue'

export default {	
	 data () {
	    return {
	      // headTitle: 'this.$route.name'
		  
		  }    
	  },
  name: 'app',
  components: {
   Header,Footer,
   // Detail,Home,Login,Reg
  },
  mounted(){
    // console.log('app',this.$children);
    // console.log('$root',this.$root);//q根实例
    // console.log('$route',this.$route);//q 进来的路由(当前路由信息对象)
    // console.log('$router',this.$router);//q VueRouter
	 // this.msg1=this.$children[1].msg1
	 console.log(this.$children[1].msg1);
	},
	watch:{
	  $route:{
	    handler(nextValue,PrevValue){
	      console.log('path变化',nextValue.path);
	      
	      let path = nextValue.path;//路由路径  /follow
	      //修改集中式的数据
	      
	      if(/nopage/.test(path)){
	        this.$root.bNav=this.$root.bFoot=false;
	      }
	      if(/home|classify/.test(path)){
	        this.$root.bNav=this.$root.bFoot=true;
	      }
	      if(path.includes('user')){
	        this.$root.bNav=false;
	        this.$root.bFoot=true;
	      }
		  if(/detail|login|reg/.test(path)){
			  this.$root.bFoot=false;
			  this.$root.bNav=true;
		  }
	    },
	    immediate:true//q 立即执行
	  }
	},
}
</script>

<style>

</style>
