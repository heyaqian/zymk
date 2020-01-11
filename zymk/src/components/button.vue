<template>
  <div class="footbox">
    <input type="button" :value="text" class="login-btn" />
   <!-- <a href="javascript:;" class="tishi">{{tishi}}</a> -->
  </div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      text:{
        type:String,
        default:'按 钮'
      },
	  // tishi:{
		 //  type:String,
		 //  default:''		  
	  // }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  
 .footbox {
    width: 95%;
    height: 0.4rem;
    margin: 0 auto;
  }
  
 .login-btn {
    width: 95%;
    height: 0.4rem;
    background: #1cbb7f;
    color: #fff;
    text-align: center;
    line-height: 0.4rem;
    border-radius:.08rem;
    display: block;
    margin-top: 0.2rem;
    font-size: 0.32rem;
  }
  
 /* .tishi {
    /* width: 1.4rem; */
   /* font-size: 0.25rem;
    margin-top: 0.28rem;
    display: block;
	color:#7D7B7B */;
  /* } */
</style>
