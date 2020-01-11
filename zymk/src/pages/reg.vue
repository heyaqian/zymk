<template>
	<div class="reg">
		<h3 id="h1" @click="upload">点击选择头像</h3>
		<input type="file" id="file" style="display: none;">
		<Input v-model="username" label="用户名" ph=" 用户名"/>
		<Input v-model="password" label="密码" ph=" 请输入注册时的密码"/>
		<Input label="确认密码" ph=" 确认输入注册时的密码"/>
		<Input label="常用邮箱" ph=" 常用邮箱"/>
		<Input label="手机" ph=" 手机"/>
		<Button :text="'注 册'" @click.native="reg"/>
		<a href="javascript:;"  class="tishi">已注册直接登录</a>
	</div>
</template>

<script>
	import Input from '../components/input.vue'
	import Button from '../components/button.vue'
	export default{
		data(){
			return {
				headTitle: '注册',
				username: '',
				password: '',
			}
		},
		components:{
			Input,Button
		},
		mounted(){
			
		},
		updated() {
			// console.log(this.username);
		},
		methods:{
			upload(){
			   let file=document.getElementById('file');
			   file.click()
			},
			reg() {
				// console.log(this);
			  let formData = new FormData();
			  formData.append('username',this.username)
			  formData.append('password',this.password)
			  
			  let file=document.getElementById('file');
			  formData.append('icon',file.files[0]);
			  console.log(file.files[0])
			 console.log(this.$axios)
			  this.$axios({				   
			    url: '/api/reg',
			    method: 'post',
			    data: formData
			  }).then(
			    res => {
					console.log(res.data)
			      if(res.data.err==0){
			        console.log(res.data.msg);
			        this.$router.push('/login')
			      }else{
			        this.mess=res.data.msg
			      }
			    }
			  )        
			}
		}
	}
</script>

<style scoped>
	.reg{
		height:6rem;
		overflow: hidden;
		margin-top: .2rem;
		background: #f1f1f1;
	}
	.reg p{
		height: 0.2rem;
		width: 100%;
	}
	.tishi {
	   /* width: 1.4rem; */
	   font-size: 0.25rem;
	   margin-top: 0.28rem;
	   display: block;
		color:#7D7B7B;
	 }
	 h3{
		 color:#1cbb7f;
	 }
</style>
