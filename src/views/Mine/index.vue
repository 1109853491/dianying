<template>
	<div id="main">
		<Header title="我的电影" />
		<div id="content">
			<Login />
		</div>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/TabBar';
import Login from '@/components/Login';

export default{
	name : 'mine',
	components : {
		Header,
		Footer,
		Login
	}
}
</script>
<style lang="scss">

</style>