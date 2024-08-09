import { ClientOnly } from '#build/components';

<script setup>
	import { onMounted } from "vue";
	import FormComp from '../src/components/FormComp.vue';
	import formStore from "../src/stores/FormStore";
	import navbarStore from "../src/stores/NavbarStore";
	import { Observer } from 'mobx-vue-lite';

	const router = useRouter();

	onMounted(async() => {
		formStore.setType("Create");
		
		setTimeout(() => {
			if(!navbarStore.session?.accessToken) {
				//alert("You are not logged in currently, you cannot make any briefings!");
				//router.push("/");
			};
		}, "1000");
	})
</script>

<template>
	<Observer>
		<div class="w-full flex-center flex-col">
			<section class="flex flex-col w-9/12 mx-auto max-lg:w-11/12">
				<ClientOnly>
					<FormComp/>
				</ClientOnly>
			</section>	
		</div>
	</Observer>
</template>
