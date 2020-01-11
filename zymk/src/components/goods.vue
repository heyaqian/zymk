<template>
	<div class="goods">	
		<router-link tag="li" :to="`/detail/${data._id}?dataName=${dataname}`">
			<img :src="$baseUrl + data.url" alt="">
			<p class="des">{{data.name}}</p>
			<p class="price">{{data.price}}</p>	
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},
		props:{
		  data:{
		    type:Object,
		    default:function(){
		      return {}
		    }
		  },
		  dataname:{
			  type:String,
			  default:''
		  }
		},
		components:{},
		mounted(){
			
		},
		updated() {
			
		},
		methods:{}
	}
</script>
<style scoped>
	.goods{
	color: #666;
	width: 50%;
	float: left;
	border-bottom: .01rem solid #e5e5e5;
	border-right:.01rem solid #e5e5e5;
	margin-left: -.01rem;
	padding-bottom: .13rem;

	}
	.goods {width:50%;display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.goods li{display: flex;flex-direction: column;justify-content: center;align-items: center;}
	.goods  img{width:3.1rem;height: 3.1rem;}
	.goods  p{text-indent:.1rem;width: 2.8rem;}
	.goods  p.des{
		box-sizing: border-box;
		overflow: hidden;
		font-size: .24rem;
		height: .36rem;
		line-height: .36rem;
		color: #51545a;
		cursor: pointer;
	}
	.goods  p.price{
		height: .25rem;
		line-height: .30rem;
		color: #F23015;
		font-size: .26rem;
		font-weight: 700;
		padding-top: .08rem;
		border-top:.01rem solid #eee;
	}
</style>
