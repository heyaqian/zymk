<template>
	<div class="more">
		<p><span>&nbsp;</span><a href="javascript:;">&nbsp;精品推荐</a></p>
		<p><a href="javascript:;">更多></a></p>
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
		methods:{}
	}
</script>

<style scoped>
	.more{
	padding: .1rem;
    color: #666;
    font-size: 16px;  
    height: 30px;
    line-height: 30px;
	background: #f5f5f5;
	display: flex;
	justify-content: space-between;
	}
	.more p span{background: #f00;}
</style>
