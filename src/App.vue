<template>
	<div>
		<Header />
		<div id="app">
			<router-view/>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Header from '@/components/layout/Header.vue'
	import Footer from '@/components/layout/Footer.vue'

	export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #ecf0f1;
  font-family: 'Nanum Gothic', sans-serif;
}

#app {
  webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn {
	cursor: pointer;
	background-color: #222;
	color: #fff;
	border: 2px solid #222;
	display: inline-block;
	padding: .8rem 3rem;
	border-radius: 4px;
	margin: 3rem;
}

.btn-default {
	background-color: #fff;
	border: 2px solid #34495e;
	color: #34495e;
}

.btn-default:hover {
	background-color: #34495e;
	border: 2px solid #34495e;
	color: #fff;
}

.btn-success {
	background-color: #fff;
	border: 2px solid #41b883;
	color: #41b883;
}

.btn-success:hover {
	background-color: #41b883;
	border: 2px solid #41b883;
	color: #fff;
}

a {
	text-decoration: none;
	color: inherit;
}

.loader{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: url('../public/loader.gif') 50% 50% no-repeat rgb(249,249,249);
  background-size: 50px;
  opacity: 0.5;
}
</style>
