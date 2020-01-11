<template>
	<van-tree-select
	  :items="items"
	  :active-id.sync="activeId"
	  :main-active-index.sync="activeIndex"
	  @click-nav="hh"
	  @click-item="child"
	/>	
</template>

<script>
	export default{
		data(){
			return {
				items: [
				  {
				    text: '小说',				   
				    children: [
				      {
				        // 名称
				        text: '小说',
				        // id，作为匹配选中状态的标识符
				        id: 1,
				      }
				    ]
				  },
				  {
					 text: '杂志',
					 children: [
					   {
						 // 名称
						 text: '周刊',
						 // id，作为匹配选中状态的标识符
						 id: 1,
					   },
					   {
						  text: '周刊',
						  id:2,
					   },
					   {
						  text: '小说',
						  id:3,
					   }
					 ] 
				  }
				],
				activeId: 1,
				activeIndex: 0
			}
		},
		components:{},
		mounted(){
			
		},
		updated() {
			
		},
		methods:{
			hh(index){
				console.log(index);				
			},
			child(data){
				console.log(data.text);
				// if(true){
					this.$router.push('/list/' + data.text)
				// }
			}
		}
	}
</script>

<style scoped>
	.van-tree-select__item--active {
		color: #DE3535;
		font-size: .24rem;
	}
	.van-tree-select__content{
		color:#999;	
			font-size: .24rem;
	}	
	.van-tree-select__nav {
		color:#666;
		font-size: .24rem;
	}
	 .category2{		 
		background: #fff;
	 } 
	 .category1{	 
		background: #f4f4f4;	
	 }
</style>
