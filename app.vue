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
	<main class="flex flex-col">
		<Navbar />
		<div class=" min-h-screen">
			<NuxtPage />
		</div>
		<FooterComp />
	</main>
</template>