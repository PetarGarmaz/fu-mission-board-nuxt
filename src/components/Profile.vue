<script setup>
	import { Observer } from 'mobx-vue-lite';
	import { onMounted } from "vue";
	
	import SortBar from '../src/components/SortBar.vue';
	import FeedCard from '../src/components/FeedCard.vue';
	import PageBar from '../src/components/PageBar.vue';

	import briefingStore from "../src/stores/BriefingStore";
	
	const router = useRouter();
	const profileId = router.currentRoute._value.params.id;
	const profileName = router.currentRoute._value.query.name;

	onMounted(async () => {
		briefingStore.setPage(1);
		await briefingStore.getBriefings("Profile", profileId);
	})
</script>

<template>
	<Observer>
		<div class='flex'>
			<div class="flex flex-col w-9/12 mx-auto max-lg:w-11/12">
				<header class="flex flex-col bg-gray-900 my-16 border border-gray-600 rounded-lg">
					<h1 class='text-5xl text-gray-200 font-bold tracking-widest text-center my-4 max-lg:text-3xl max-lg:tracking-normal'>{{profileName.toUpperCase()}}'S PROFILE</h1>
					<hr class='border-gray-600'/>
					<p class='text-gray-200 text-center max-lg:text-sm tracking-wider italic my-4 mx-4'>View and search {{profileName}}'s mission briefings.</p>
					<hr class='border-gray-600'/>

					<SortBar type="Profile" :profileId="profileId"/>
				</header>
	
				<div v-for="item in briefingStore.allBriefings">
					<FeedCard v-bind:briefing="item" />
				</div>

				<PageBar type="Profile" :profileId="profileId"/>
			</div>
		</div>
	</Observer>
</template>