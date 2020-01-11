<template>
	<div>
		<Goods 
			v-for="(item,index) of list"
			:key="item._id"
			:data="item"
			:dataname="'home'"
			class="goods"
		/>	
	</div>
	
</template>

<script>
	import Goods from '../components/goods.vue'
	export default{
		data(){
			return {
				list:{}
			}
		},
		components:{
			Goods
			},
		mounted(){
			console.log(this.$route);
			this.$axios({
				  url: '/api/' + 'home' + '?q=' + this.$route.params.kind,
			//localhost:3001/api/follow/22w4e24354
				}).then(
				  res => this.list = res.data.data
				  // res =>console.log(res.data.data)
				)
			},
			//q 参考node接口，和 mongodb封装文件
		updated() {
			
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
