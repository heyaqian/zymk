<template>
	<div class="user">
		<div class="bg">
			<img :src="$baseUrl + data.icon" alt="" class="pic" >
			<p class="username"><a href="javascript:;">{{data.nikename}}</a></p>
			<!-- <p class="userrank"><a href="javascript:;" @click="logout">注销</a></p> -->
		</div>
		<Cell 
			v-for="(item,index) of list"
			:key = 'index'
			:text="item.text"
			:url="item.url"
		/>
		<Button :text="'退 出 登 录'" @click.native='logout'/>
	</div>
</template>

<script>
	import Cookies from 'js-cookie';
	import Cell from '../components/cell.vue'
	import Button from '../components/button.vue'
	export default{
		data(){
			return {
				data:{},			
				list:[{text:"我的红包",url:"/images/redpackage.png"},{text:"我的留言",url:"/images/msg.png"}]	
		}		 
	},	
		components:{
			Cell,Button
		},
		mounted(){
			// console.log(data)
		},
		updated() {
			
		},
		
		beforeRouteEnter(to, from, next) {
		  //条件异步
		  // 抓取token
		  let token = window.localStorage.getItem('token');
		  if (token) {
		    axios({
		      url: '/api/user',
		      headers: {
		        'token': token
		      }
		    }).then(
		      // res => res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login')
			  (res)=>{
				  res.data.err == 0 ? next(_this=>_this.data=res.data.data) : next('/login');
				  // console.log(_this.data);
				  // console.log(this.data);1.7号写到这里
			  }
		    )
		  } else {
		    next('/login')
		  }
		},
		methods:{
				
			logout() {
			  //...........
			  window.localStorage.removeItem('token')
			  Cookies.remove('username');
			  // this.$router.go(0)		  
			  this.$router.push('/home')
			}
			
		}
	}
</script>

<style scoped>
 
    body{background: #f1f1f1}
	.user{
		font-size: .13rem;
		text-align: center;		
	}
  .user .bg{height: 1.55rem;background:url(../assets/img/userbg.png);}
   .user .bg p{color: #AFA9A9;font-size: ;margin-top:.1rem;}
 .pic{width: .8rem;height: .8rem;border-radius: 50%;margin-top:.3rem;}
 
</style>
