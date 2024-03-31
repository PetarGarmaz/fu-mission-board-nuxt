import { ClientOnly } from '#build/components';

<script>
	import Briefing from '../src/components/Briefing.vue';

	export default { 
		components: { Briefing }
	};
</script>

<template>
	<ClientOnly>
		<Briefing />
	</ClientOnly>
</template>

<style scoped>

</style>

