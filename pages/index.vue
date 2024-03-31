import { ClientOnly } from '#build/components';

<script>
	import Feed from '../src/components/Feed.vue';

	export default { 
		components: { Feed }
	};
</script>

<template>
	<div class="w-full flex-center flex-col">
		<ClientOnly>
			<Feed />
		</ClientOnly>
	</div>
</template>

<style scoped>

</style>

