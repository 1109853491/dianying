<template>
	<div class="wrapper" ref="scroller">
		<slot></slot>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
//better-scroll用法：1、数据渲染完之后this.$nextTick() 2、通过new的方式出发类
//new BScroll()接受两个参数(外层包裹的那个box,{}))

export default{
	name:'scroll',
	props:{
		headleToscroll:{
			type:Function,
			default:function(){}
		},
		headleTotouchend:{
			type:Function,
			default:function(){}
		}
	},
	mounted(){
		var scroll = new BScroll(this.$refs.scroller,{
			tap:true,
			probeType: 1 
		});
		this.scroll = scroll
		scroll.on('scroll',(pos)=>{
			this.headleToscroll(pos);
		})

		scroll.on('touchEnd',(pos)=>{
			this.headleTotouchend(pos);
		})
	},
	methods:{
		toscrollTop(y){
			this.scroll.scrollTo(0, y)
		}
	}
}
</script>
<style scoped>
.wrapper{height:100%;}
</style>