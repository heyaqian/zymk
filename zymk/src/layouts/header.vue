<template>
	<div>	
	<div class="nav">	
	  <ul>		 
		<li class="active" @click="goback">
			<a href="javascript:;">
			<img src="../assets/img/arrow_left.png" alt="">
			</a>
		</li>	   
		<li><a href="javascript:;" v-show="!bl">{{headTitle}}</a></li>	
			<!-- <li>{{username}}</li> -->
			<form action="/">
			<van-search placeholder="请输入搜索关键词" v-model="value"  @search="onSearch" v-show="bl"/>	
			<!-- <div slot="action" @click="onSearch">搜索</div> -->
			</form>
		<li>
			<a href="javascript:;">
			<img src="../assets/img/search.png" alt="" @click="iptshow" slot="action" ></a>
		</li>
	  </ul>
	</div>
	 <div class="none"></div>
	</div>
</template>

<script>
	
	import Cookies from 'js-cookie';
	// let username = Cookies.get('username');
	// let username = this.$root.username;
	export default{
		 props: ['headTitle'],
		  data () {
		    return {
		      // headTitle: ''
			  username: '',	 
			   value:'',
			   bl:false
		    }
		  },
		components:{},
		mounted(){
			// console.log(this.$root.username);
		},
		updated() {
			
		},
		methods:{
			iptshow(){
				this.bl = true;
			},
			goback(){
			  this.$router.go(-1)
			},
			onSearch(value){
					console.log(value);
					let arr=['小说','周刊']
					for(let i=0;i<arr.length;i++){
						if(value.includes(arr[i])){
							this.$router.push('/list/' + arr[i]);					return
						}	
					}	
					 alert('无效')		
				},
				// down(){		
				// }
			}
	}
</script>

<style scoped>
	.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;border-bottom:#000 solid .01rem;}
	.nav ul{display:flex;justify-content: space-between;}
	.nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:#000;}
	.nav ul li a img{width: .4rem;margin-top: .1rem;}
	.none{height:0.4rem;}
</style>
