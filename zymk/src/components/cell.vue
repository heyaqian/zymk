<template>
	<div class="cell">
		<img :src="url" alt="" class="miniimg">
		<!-- //q 动态绑定的时候用绝对地址 -->
		<span>{{text}}</span>
		<img src="../assets/img/to_right3.png" alt="" class="hhh">	
		<!-- <Button
		v-for="(item,index) of list"
		 :text="item"		
		/> -->
	</div>
</template>

<script>
	import Button from './button.vue'
	export default{
		data(){
			return {
				// list:{
				// a:"我的红包"	,
				// b:"我的留言"
				// }				
			}
		},
		props:{
		  text:{
		    type:String,
		    default:'我的红包'
		  },
		  url:{
		      type:String,
		      default:'/images/redpackage.png'
		    }
		},
		components:{
			Button
		},
		mounted(){
			
		},
		updated() {
			
		},
		methods:{}
	}
</script>

<style scoped>
	
	.cell{
		height: .44rem;padding: 0 .067rem;color: #232326;font: .15rem;margin: .4rem 0;border:.01rem solid #eee;line-height: .44rem;text-align: center;
	}
	.cell .miniimg{width: .4rem;height: .4rem;float: left;}
	.cell img{margin-top: .02rem;}
	.cell span{float: left;}
	.cell .hhh{
		height: .22rem;width: .1rem;float:right;margin-top: .1rem;
	}
</style>
