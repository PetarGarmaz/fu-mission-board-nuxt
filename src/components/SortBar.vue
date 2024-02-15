<script setup>
	import { ref } from "vue";

	const query = ref("");
	const sort = ref("Date");
	const order = ref("Desc");
	const show = ref("Upcoming Missions");
	const sortDropdown = ref(false);
	const orderDropdown = ref(false);
	const showDropdown = ref(false);

	const toggleShowDropdown = () => {
		showDropdown.value = !showDropdown.value;
	}

	const toggleSortDropdown = () => {
		sortDropdown.value = !sortDropdown.value;
	}

	const setQuery = () => {
		console.log("Change")
	};

	const setShow = (val) => {
		show.value = val;
	}

	const setSort = (val) => {
		sort.value = val;
	}

</script>

<template>
	<section class='flex flex-wrap max-sm:flex-col'>
		<input v-model="query" placeholder="Mission title, description, host, status..." @change="setQuery()" class="mx-5 my-5 sm:w-full text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-600 rounded-lg transition duration-300 p-1"/>

		<div class='flex my-5 w-4/12 select-none'>
			<div class="flex flex-col mx-5 w-full">
				<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg text-nowrap'>Show by:</p>
				<div class='flex my-auto py-1 w-full text-gray-200 bg-gray-800 border border-gray-600 rounded-lg '>
					<div class='flex flex-col'>
						<p class='m-auto ml-4 text-gray-200 tracking-wider lg:text-lg'>{{show}}</p>
						<div v-if="showDropdown" class="absolute flex flex-col mt-10 p-2 bg-gray-800 border border-gray-600 rounded-lg w-80 max-lg:w-60">
							<button v-for="item in ['Upcoming Missions', 'Current Mission', 'Previous Missions Only']" type="button" @click="setShow(item)" class='text-gray-200 text-start border-b py-1 border-transparent hover:border-gray-200 transition duration-300'>{{item}}</button>
						</div>
					</div>
					<p class="m-auto mr-4 text-gray-200 tracking-wider text-xl hover:text-red-600 cursor-pointer transition duration-300" :class="showDropdown && 'rotate-180'"  @click="toggleShowDropdown()">▼</p>
				</div>
			</div>
		</div>

		<div class='flex my-5 w-4/12 select-none'>
			<div class="flex flex-col mx-5 w-full">
				<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg text-nowrap'>Sort by:</p>
				<div class='flex my-auto py-1 w-full text-gray-200 bg-gray-800 border border-gray-600 rounded-lg '>
					<div class='flex flex-col'>
						<p class='m-auto ml-4 text-gray-200 tracking-wider lg:text-lg'>{{sort}}</p>
						<div v-if="sortDropdown" class="absolute flex flex-col mt-10 p-2 bg-gray-800 border border-gray-600 rounded-lg w-60 max-lg:w-40">
							<button v-for="item in ['Title', 'Date']" type="button" @click="setSort(item)" class='text-gray-200 text-start border-b py-1 border-transparent hover:border-gray-200 transition duration-300'>{{item}}</button>
						</div>
					</div>
					<p class="m-auto mr-4 text-gray-200 tracking-wider text-xl hover:text-red-600 cursor-pointer transition duration-300" :class="sortDropdown && 'rotate-180'" @click="toggleSortDropdown()">▼</p>
				</div>
			</div>
		</div>

		<div class='flex my-5 w-4/12 select-none'>
			<div class="flex flex-col mx-5 w-full">
				<p class='my-auto py-1 text-gray-200 tracking-wider lg:text-lg text-nowrap'>Order by:</p>
				<div class='flex py-1 w-full text-gray-200 bg-gray-800 border border-gray-600 rounded-lg '>
					<div class='flex flex-col'>
						<p class='m-auto ml-4 text-gray-200 tracking-wider lg:text-lg'>{{order}}</p>
						<div v-if="orderDropdown" class="absolute flex flex-col mt-10 p-2 bg-gray-800 border border-gray-600 rounded-lg w-60 max-lg:w-40">
								<button type="button" v-for="item in ['Asc', 'Desc']" class="text-gray-200 text-start border-b py-1 border-transparent hover:border-gray-200 transition duration-300">{{item}}</button>
						</div>
					</div>
					<p class="m-auto mr-4 text-gray-200 tracking-wider text-xl hover:text-red-600 cursor-pointer transition duration-300" :class="orderDropdown && 'rotate-180'">▼</p>
				</div>
			</div>
		</div>
	</section>
</template>

