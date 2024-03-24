<script setup>
	import { reactive, ref, watch } from "vue";
	import { Observer } from 'mobx-vue-lite';
	import briefingStore from "../src/stores/BriefingStore";
	import sortStore from "../src/stores/SortStore";

	const filters = reactive([false, true, true, true]);

	watch(filters, (newFilter) => {
		briefingStore.setFilter(newFilter);
	});

	//Tu sam stao...razmisliti kako da napravim da pošteno filtrira
</script>

<template>
	<Observer>
		<section class='flex flex-wrap max-sm:flex-col'>
			<input placeholder="Mission title, description, host..." class="mx-5 my-5 sm:w-full text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 rounded-lg transition duration-300 p-1"/>	
	
			<div class='flex my-5 w-6/12 select-none'>
				<div class="flex flex-col mx-5 w-full">
					<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg'>Sort by:</p>
					<div class='flex my-auto py-1 w-full text-gray-200 bg-gray-800 border border-gray-600 rounded-lg '>
						<div class='flex flex-col'>
							<p class='m-auto ml-4 text-gray-200 tracking-wider lg:text-lg'>{{briefingStore.sort}}</p>
							<div v-if="sortStore.sortDropdown" class="absolute flex flex-col mt-10 p-2 bg-gray-800 border border-gray-600 rounded-lg w-60 max-lg:w-40">
								<button v-for="item in ['Title', 'Date']" type="button" @click="briefingStore.setSort(item)" class='text-gray-200 text-start text-lg border-b py-1 border-transparent hover:border-gray-200 transition duration-300'>{{item}}</button>
							</div>
						</div>
						<p class="m-auto mr-4 text-gray-200 tracking-wider text-xl hover:text-red-600 cursor-pointer transition duration-300" :class="sortStore.sortDropdown && 'rotate-180'" @click="sortStore.toggleSortDropdown()">▼</p>
					</div>
				</div>
			</div>
	
			<div class='flex my-5 w-6/12 select-none'>
				<div class="flex flex-col mx-5 w-full">
					<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg'>Order by:</p>
					<div class='flex py-1 w-full text-gray-200 bg-gray-800 border border-gray-600 rounded-lg '>
						<div class='flex flex-col'>
							<p class='m-auto ml-4 text-gray-200 tracking-wider lg:text-lg'>{{briefingStore.order}}</p>
							<div v-if="sortStore.orderDropdown" class="absolute flex flex-col mt-10 p-2 bg-gray-800 border border-gray-600 rounded-lg w-60 max-lg:w-40">
								<button type="button" v-for="item in ['Asc', 'Desc']" @click="briefingStore.setOrder(item)" class="text-gray-200 text-start text-lg border-b py-1 border-transparent hover:border-gray-200 transition duration-300">{{item}}</button>
							</div>
						</div>
						<p class="m-auto mr-4 text-gray-200 tracking-wider text-xl hover:text-red-600 cursor-pointer transition duration-300" :class="sortStore.orderDropdown && 'rotate-180'" @click="sortStore.toggleOrderDropdown()">▼</p>
					</div>
				</div>
			</div>

			<div class='flex my-5 w-full select-none'>
				<div class="flex flex-col mx-5 w-full">
					<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg'>Filter by:</p>
					
					<div class="grid gap-3 bg-gray-800 py-3 rounded-lg border border-gray-600 grid-cols-3 grid-rows-2 max-lg:grid-cols-2 max-lg:grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-6">
						<div v-for="(item, index) in ['Future Missions', 'Current Mission', 'Completed Missions', 'Failed Missions']" class="flex mx-5">
							<input type="checkbox" v-model="filters[index]" class="mx-2 my-auto w-5 h-5 bg-gray-900 checked:bg-gray-600 rounded-md"></input>
							<p class='text-gray-200 text-start text-lg'>{{item}}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Observer>
</template>
