<template>
	<div class="navb">
		<ul>
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1507783146.jpg" alt=""></a><p>周边</p></li>
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1507783236.jpg" alt=""></a><p>杂志</p></li>
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1507783170.jpg" alt=""></a><p>绘本</p></li>
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1507783188.jpg" alt=""></a><p>漫画</p></li>		
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1507783325.jpg" alt=""></a><p>小说</p></li>
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1507783358.jpg" alt=""></a><p>更多商品</p></li>
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1510293782.jpg" alt=""></a><p>优惠活动</p></li>
			<li><a href="javascript:;"><img src="../assets/img/Navpic_1550644668.jpg" alt=""></a><p>积分商城</p></li>			
		</ul>		
		
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		},
		components:{},
		mounted(){
			
		},
		updated() {
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.navb img{width:1.28rem;height: 1.28rem;}
	.navb ul{display:flex;flex-wrap:wrap;justify-content: space-between;padding:.177rem 0}
	.navb ul li {width: 25%;text-align: center;}
	.navb ul li p{color: #666;cursor: pointer;font-size: .23rem;
    margin: .08rem auto;}
	.navb ul li a{display: block;}
</style>
