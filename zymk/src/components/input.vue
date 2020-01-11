<template>
  <div class="input">
    <input type="text" :value="value" @input="$emit('input',$event.target.value)" :placeholder="ph"/>
    <span>{{label}}</span>
  </div>
</template>

<script>
  export default {
    data(){return {}},
    props:{
      label:{
        type:String,
        default:'标题'
      },
	  ph:{
		  type:String,
		  default:'用户名'
		},
		value:{
			type:String,
			default:''
		}
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped> 
  .input {
	padding-left: .4rem;
    height: 0.95rem;
    position: relative;
    width: 100%;
    border: 1px solid #e5e7e8;
    background: #fff;
  }
  
  .input input {	
    padding-left: 1.24rem;
    width: 4.54rem;
    height: 100%;
    font-size: 0.18rem;
  }
  
  .input span {
	text-indent: .4rem;
    width: 1.6rem;
    height: 0.49rem;
    position: absolute;
    top: 0.20rem;
    left: 0;
    color: #676868;
    font-size: 0.25rem;
    line-height: 0.49rem;
    text-align: center;
  }
</style>

