<template>
	<div class="home">
		<!-- <Banner
			:banner="banner"
		/> -->
		<van-swipe :autoplay="2000">
		  <van-swipe-item 
		   v-for="(item,index) of banner">
		   <img :src="$baseUrl + item.url" alt="" class="ban"
		   @click="toDetail(item)"   
		   />
		   </van-swipe-item>
		</van-swipe>
		<Navb/>
		<More/>
		<!-- <Goods 
		:list="list"		
		/> -->				
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
	import Banner from '../components/banner.vue'
	import Navb from '../components/nav.vue'
	import More from '../components/more.vue'
	import Goods from '../components/goods.vue'
	export default{
		name:'home',
		data(){
			return {
				list:[],
				banner:[],
				 msg1:'子数据1'
			}
		},
		components:{
			Banner,Navb,More,Goods
		},
		mounted(){		
			// console.log(1);
			this.$axios({
			  url:'/api/home',
			  params:{_page:1,_limit:8}
			}).then(
			  res=>this.list=res.data.data
			   // res=>console.log(res.data.data)	 
			)
			
			this.$axios({
			  url:'/api/banner',
			  params:{_page:1,_limit:3}
			}).then(
			  res=>this.banner=res.data.data
			  // res=>console.log(res.data.data)
			)
		},
		updated() {
			
		},
		methods:{
			toDetail(item){
				// console.log(item.kind);
				this.$router.push('/list/' + item.kind)
			}
		},
		
	}
</script>

<style scoped>
.ban{width:100%;height:3rem; display:block;}
</style>
