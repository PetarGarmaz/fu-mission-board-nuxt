<script setup>
	import { Observer } from 'mobx-vue-lite';
	import briefingStore from "../src/stores/BriefingStore";


	//Tu sam stao...razmisliti kako da napravim da pošteno filtrira
</script>

<template>
	<Observer>
		<div class="flex mx-auto gap-2">
			<button @click="briefingStore.prevPage()" class='py-1 px-2 text-3xl text-gray-200 rounded-md border border-gray-600 bg-gray-900 hover:bg-gray-600 disabled:bg-gray-700 cursor-pointer transition duration-300'>◂</button>
			<p class="py-1 px-4 text-2xl text-gray-200 rounded-md border border-gray-600 bg-gray-900">{{ briefingStore.currentPage }} / {{ briefingStore.maxPages }}</p>
			<button @click="briefingStore.nextPage()" class="py-1 px-2 text-3xl text-gray-200 rounded-md border border-gray-600 bg-gray-900 hover:bg-gray-600 disabled:bg-gray-700 cursor-pointer transition duration-300">▸</button>
		</div>
	</Observer>
</template>
