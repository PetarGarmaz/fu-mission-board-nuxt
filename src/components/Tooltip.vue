<script setup>
	import { Observer } from 'mobx-vue-lite';
	import tooltipStore from "../src/stores/TooltipStore";

	const props = defineProps(["tooltipType", "tooltipValue"]);

	onMounted(async () => {
		console.log(props.tooltipType);
	})
</script>

<template>
	<Observer>
		<p v-if="tooltipStore.tooltipType == props.tooltipType" class="p-3  bg-gray-900 border border-gray-600 rounded-lg text-gray-200 text-center whitespace-pre-line max-lg:text-sm tracking-wider italic z-50">{{props.tooltipValue}}</p>
	</Observer>
</template>
