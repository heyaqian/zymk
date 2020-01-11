<template>
	<div class="detail">
		<img :src="$baseUrl + detail.url" alt="">
		<p class="des">{{detail.name}}</p>
		<p class="price">{{detail.price}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				detail:{}
			}
		},
		components:{},
		mounted(){
			this.$axios({
				  url: '/api/' + this.$route.query.dataName + '?id=' + this.$route.params.id,
			//localhost:3001/api/home/22w4e24354
				}).then(
				  res => this.detail = res.data.data
				  // res =>console.log(res)
				)
		},
		updated() {
			
		},
		methods:{}
	}
</script>

<style scoped>
	.detail{
	color: #666;
	width: 100%;
	margin:0.8rem 0;
	border-bottom: .01rem solid #e5e5e5;
	border-right:.01rem solid #e5e5e5;
	margin-left: -.01rem;
	padding-bottom: .13rem;
	}
	.detail img{width: 100%;height: 6.4rem;}
	.detail p{text-indent:.1rem;font-size: .24rem;}
	.detail p.des{
		box-sizing: border-box;
		/* overflow: hidden; */
		font-size: .24rem;
		cursor: pointer;
		line-height: 2rem;
		height: 3.1rem;
		float: left;
		color: #666;
	}
	.detail p.price{	
		height: .25rem;
		line-height: .25rem;
		color: #F23015;
		font-size: .25rem;
		font-weight: 700;
		padding: .08rem 0;
		border-top:.01rem solid #eee;
	}
</style>
