<script setup>
	import { Observer } from 'mobx-vue-lite';
	import briefingStore from "../src/stores/BriefingStore";
	import sortStore from "../src/stores/SortStore";

	const props = defineProps(['type', "profileId"]);
</script>

<template>
	<Observer>
		<section class='flex flex-wrap max-sm:flex-col'>
			<input placeholder="Mission title, description, host..." :value="briefingStore.query" @input="event => briefingStore.setQuery(event.target.value)" @keyup.enter="briefingStore.getBriefings(type, profileId)" class="mx-5 my-5 sm:w-full text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 rounded-lg transition duration-300 p-1"/>	
	
			<div class='flex my-5 w-6/12 select-none max-lg:w-full'>
				<div class="flex flex-col mx-5 w-full">
					<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg'>Filter missions:</p>
					<div @click="sortStore.toggleFilterDropdown()" class='flex py-1 w-full text-gray-200 bg-gray-800 hover:bg-gray-600 border border-gray-600 rounded-lg transition duration-300 cursor-pointer'>
						<div class='flex flex-col'>
							<p class='m-auto ml-4 text-gray-200 tracking-wider lg:text-lg'>{{briefingStore.filter}}</p>
							<div v-if="sortStore.filterDropdown" class="absolute flex flex-col mt-10 p-2 bg-gray-800 border border-gray-600 rounded-lg w-60">
								<button v-for="(item, index) in ['Present & Past Missions', 'Future Missions', 'All Missions']" type="button" @click="briefingStore.setFilterType(index, type, profileId)" class='text-gray-200 text-start text-lg border-b py-1 border-transparent hover:border-gray-200 transition duration-300'>{{item}}</button>
							</div>
						</div>
						<p class="m-auto mr-4 text-gray-200 tracking-wider text-xl transition duration-300" :class="sortStore.filterDropdown && 'rotate-180'">▼</p>
					</div>
				</div>
			</div>
	
			<div class='flex my-5 w-6/12 select-none max-lg:w-full'>
				<div class="flex flex-col mx-5 w-full">
					<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg'>Order by:</p>
					<div @click="sortStore.toggleOrderDropdown()" class='flex py-1 w-full text-gray-200 bg-gray-800 hover:bg-gray-600 border border-gray-600 rounded-lg transition duration-300 cursor-pointer'>
						<div class='flex flex-col'>
							<p class='m-auto ml-4 text-gray-200 tracking-wider lg:text-lg'>{{briefingStore.order}}</p>
							<div v-if="sortStore.orderDropdown" class="absolute flex flex-col mt-10 p-2 bg-gray-800 border border-gray-600 rounded-lg w-60">
								<button type="button" v-for="item in ['Ascending', 'Descending']" @click="briefingStore.setOrder(item, type, profileId)" class="text-gray-200 text-start text-lg border-b py-1 border-transparent hover:border-gray-200 transition duration-300">{{item}}</button>
							</div>
						</div>
						<p class="m-auto mr-4 text-gray-200 tracking-wider text-xl transition duration-300" :class="sortStore.orderDropdown && 'rotate-180'">▼</p>
					</div>
				</div>
			</div>
		</section>
	</Observer>
</template>
