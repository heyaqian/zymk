<template>
	<div class="login">
		<p><router-link to="/reg">新用户注册&nbsp;</router-link></p>
		<Input label="账号" ph=" 用户名" v-model="username"/>
		<Input label="密码" ph=" 密码" v-model="password"/>
		<a href="javascript:;" class="tishi">密码问题找回密码</a>
		<Button :text="'立 即 登 录'" @click.native='login'/>
	 <!-- {{mess}} -->
	</div>
</template>

<script>
	import Input from '../components/input.vue'
	import Button from '../components/button.vue'
	import Cookies from 'js-cookie';
	export default{
		data(){
			return {
				username: '',
				password: '',
				mess:'',			
			}
		},
		components:{
			Input,Button
		},
		mounted(){
			
		},
		updated() {
			
		},
		methods:{
			login() {
			  // alert(1)
			  let params = new URLSearchParams();
			  params.append('username', this.username)
			  params.append('password', this.password)
			  this.$axios({
			    url: '/api/login',
			    method: 'post',
			    data: params
			  }).then(
			    res => {
			      if(res.data.err==0){
			        //种token,跳转user
					console.log( this.$router);
					Cookies.set('username',this.username);				
			        window.localStorage.setItem('token',res.data.token);
					// this.$root.username = this.username
			        this.$router.push('/user')
			      }else{
			        this.mess=res.data.msg
					alert(this.mess)
			      }
			    }
			  )	  
			}
		}
	}
</script>

<style scoped>
	.login{
		height:6rem;
		overflow: hidden;
		margin-top: .2rem;
		background: #f1f1f1;
	}
	.login p{
		line-height: 0.6rem;
		font-size: 0.25rem;
		color:#7D7B7B; 
		text-align: end;		
	}
	.tishi {
	   /* width: 1.4rem; */
	   font-size: 0.25rem;
	   margin-top: 0.28rem;
	   display: block;
		color:#7D7B7B;
	 }
</style>
