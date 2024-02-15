<script setup>
	import { ref } from "vue";
	import FormComp from '../src/components/FormComp.vue';
	import formStore from "../src/stores/FormStore";
	import navbarStore from "../src/stores/NavbarStore";
	import { Observer } from 'mobx-vue-lite';

	formStore.setType("Create");
</script>

<template>
	<Observer>
		<div class="w-full flex-center flex-col">
			<section class="flex">
				<div class="flex flex-col w-9/12 mx-auto max-lg:w-11/12">
					<header class="flex flex-col bg-gray-900 mt-10 border border-gray-600 rounded-lg">
						<h1 class='text-5xl text-gray-200 font-bold tracking-widest text-center my-4 max-lg:text-3xl max-lg:tracking-normal'>{{formStore.type.toUpperCase()}} BRIEFING</h1>
						<hr class='border-gray-600'/>
						<p class='text-gray-200 text-center max-lg:text-sm tracking-wider italic my-4 mx-4'>{{formStore.type == "Create" ? "Create a briefing for an upcoming mission." : "Edit an existing mission briefing."}}</p>
					</header>

					<FormComp v-if="navbarStore.session?.accessToken"/>
				</div>
			</section>		
		</div>
	</Observer>
</template>
