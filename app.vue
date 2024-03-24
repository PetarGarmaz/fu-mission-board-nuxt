import { NuxtPage } from '#build/components';

<script>
	import '../src/styles/main.css'
	import Navbar from './src/components/Navbar.vue';
	import FooterComp from './src/components/FooterComp.vue';

	export default { 
		components: { Navbar, FooterComp }
	};
</script>

<template>
	<div>
		<Navbar />
		<NuxtPage />
		<FooterComp />
	</div>
</template>