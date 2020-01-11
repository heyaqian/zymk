<template>
	 <div class="banner">
		  <ul class="clearfix">
			   <router-link
				 v-for="(item,index) of banner"  
				 :key="item._id"
				 :to="{path:'/list'}"
				 tag="li"
			   >
				 <img :src="$baseUrl + item.url" alt=""/>
			   </router-link>
		  </ul>
	 </div>
</template>

<script>
	import $ from 'jquery';
	import Swipe from '../assets/js/swipe.js'//引入 非npm包， 模块化方案要对应
	export default {
	  data(){return {
		  
	  }},
	  props:{
	    data:{
	      type:Object,
	      default:function(){
	        return {}
	      }
	    },
		banner:{
			type:Array,
			default:function(){
			  return []
			}
		}
	    },
	  components:{},
	  mounted(){
	    new Swipe($('.banner')[0],{
	      auto:2000,
	      continuous:true,
	      stopPropation:true,
	      callback:function (index,element){
	        $('.banner ol li').removeClass('active');
	        $('.banner ol li').eq(index).addClass('active');
	      }
	    })
	  },
	  updated(){},
	  methods:{}
	}
</script>

<style>
	.banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
	.banner ul li{width:6.4rem;float:left;position: relative;}
	.banner ul li img{width:100%;height:3rem; display:block;}
	.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}	
	.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
	.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
	.banner ol li.active{ background:#fff;}
</style>
