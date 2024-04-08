import { NuxtPage } from '#build/components';
import { ClientOnly } from '#build/components';

<script setup>
	import '../src/styles/main.css'
	import Navbar from './src/components/Navbar.vue';
	import FooterComp from './src/components/FooterComp.vue';

	useSeoMeta({
		title: 'FU - Mission Board',
		ogTitle: 'Freelancers Union - Mission Board',
		description: 'View, search and create mission briefings for Freelancers Union Arma Division.',
		ogDescription: 'View, search and create mission briefings for Freelancers Union Arma Division.',
		ogImage: '/FU_Logo.png',
	})
</script>

<template>
	<main class="flex flex-col">
		<ClientOnly>
			<Navbar />
		</ClientOnly>
		<div class=" min-h-screen">
			<NuxtPage />
		</div>
		<FooterComp />
	</main>
</template>