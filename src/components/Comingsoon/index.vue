<template>
	<!-- <div class="movie_body">
		<ul>
			<li>
				<div class="pic_show"><img src="/images/movie_1.jpg"></div>
				<div class="info_list">
					<h2>无名之辈</h2>
					<p><span class="person">17746</span> 人想看</p>
					<p>主演: 陈建斌,任素汐,潘斌龙</p>
					<p>2018-11-30上映</p>
				</div>
				<div class="btn_pre">
					预售
				</div>
			</li>
		</ul>
	</div> -->
	<div class="movie_body">
		<Loading v-if="isloding"/>
		<Scroller v-else :headleToscroll="headleToscroll" :headleTotouchend="headleTotouchend">
			<ul>
				<li class="pullDown">{{pullDownmsg}}</li>
				<li v-for="comelist in comeList" :key="comelist.id">
					<div class="pic_show" @tap="toDetail(comelist.id)"><img :src="comelist.img | setWH('120.180')"/></div>
					<div class="info_list">
						<h2 @tap="toDetail(comelist.id)">{{comelist.nm}}<img v-if="comelist.version" src="@/assets/maxs.png"/></h2>
						<p><span class="person">{{comelist.wish}}</span> 人想看</p>
						<p>主演：{{comelist.star}}</p>
						<p>{{comelist.rt}}</p>
					</div>
					<div class="btn_pre">
						预售
					</div>
				</li>
			</ul>
		</Scroller>
	</div>
</template>

<script>
export default{
	name : "Comingsoon",
	data(){
		return{
			comeList:[],
			pullDownmsg:"",
			isloding:true,
			prevCityid:-1
		}
	},
	activated(){
		var cityId = this.$store.state.citys.id;
		if(this.prevCityid === cityId){return;};
		this.isloding = true;
		
		this.axios.get('/api/movieComingList?cityId='+cityId).then((res)=>{
			//拿到返回数据的结果做判断
			var msg = res.data.msg;
			if(msg === "ok"){
				this.comeList = res.data.data.comingList;
				this.isloding = false;
				this.prevCityid = cityId;
			}
		})
	},
	methods:{
		headleToscroll(pos){
			if(pos.y>30){
				this.pullDownmsg = "正在更新中"
			}
		},
		headleTotouchend(pos){
			if(pos.y>30){
				this.axios.get('/api/movieOnInfoList?cityId=20').then((res)=>{
					var msg = res.data.msg;
					if(msg === "ok"){
						this.pullDownmsg = "更新成功"
						setTimeout(()=>{
							this.movieList = res.data.data.movieList;
							this.pullDownmsg = ""
						}, 1000)		
					}
				})
			}
		},
		toDetail(movieId){
			this.$router.push('/movie/detail/2/' + movieId)
		}
	}
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{padding:0;margin:0;border:none;}
</style>