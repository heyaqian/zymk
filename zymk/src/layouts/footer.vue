<template>
  <div class="foot-btn" >
    <ul>
      <router-link class="home" tag="li" to="/home" active-class="home_active"><a href="javascript:;"></a></router-link> 
	   <router-link class="list" tag="li" to="/classify" active-class="list_active"><a href="javascript:;"></a></router-link>
      <router-link class="my" tag="li" to="/user" active-class="my_active"><a href="javascript:;"></a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    components:{
		
	},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width:4.08rem; margin:0 auto;}
  .foot-btn ul li{ float:left;}
  .foot-btn ul li a{ display:block; width:100%;height:100%;}
  .foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
  .foot-btn ul .home_active{width:0.44rem;height:0.59rem; background:url(../assets/img/home_active.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
 .foot-btn ul .list{width:0.44rem;height:0.3rem; background:url(../assets/img/list-active.png) no-repeat 0 0;background-size:.44rem .3rem; margin-left:1.18rem; margin-top:0.3rem;}
 .foot-btn ul .list_active{width:0.44rem;height:0.3rem; background:url(../assets/img/list.png) no-repeat 0 0;background-size:.44rem .3rem; margin-left:1.18rem; margin-top:0.3rem;}
  .foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}
  .foot-btn ul .my_active{width:0.39rem;height:0.63rem; background:url(../assets/img/my_active.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}
  .van-icon{
	  width: .4rem;
	  height: .4rem;
	  display: inline-block;	 
  }
</style>
