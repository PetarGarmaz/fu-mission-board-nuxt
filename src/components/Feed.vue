<script setup>
	import { Observer } from 'mobx-vue-lite';

	import SortBar from '../src/components/SortBar.vue';
	import FeedCard from '../src/components/FeedCard.vue';
	import PageBar from '../src/components/PageBar.vue';

	import briefingStore from "../src/stores/BriefingStore";

	briefingStore.getBriefings();
</script>

<template>
	<Observer>
		<div class='flex'>
			<div class="flex flex-col w-9/12 mx-auto max-lg:w-11/12">
				<header class="flex flex-col bg-gray-900 my-16 border border-gray-600 rounded-lg">
					<h1 class='text-5xl text-gray-200 font-bold tracking-widest text-center my-4 max-lg:text-3xl max-lg:tracking-normal'>FEED</h1>
					<hr class='border-gray-600'/>
					<p class='text-gray-200 text-center max-lg:text-sm tracking-wider italic my-4 mx-4'>View and search upcoming mission briefings.</p>
					<hr class='border-gray-600'/>
	
					<SortBar/>
				</header>
	
				<div v-for="item in briefingStore.allBriefings">
					<FeedCard v-bind:briefing="item" />
				</div>

				<PageBar/>
			</div>
		</div>
	</Observer>
</template>