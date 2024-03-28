<script setup>
	import { Observer } from 'mobx-vue-lite';
	import tooltipStore from "../src/stores/TooltipStore";	
</script>

<template>
	<Observer>
		<p v-if="tooltipStore.tooltip != ''" class="fixed p-3 bg-gray-900 border border-gray-600 rounded-lg text-gray-200 text-center whitespace-pre-line max-lg:text-sm tracking-wider italic z-50" :style="{ left: tooltipStore.pos[0] + 10 + 'px', top: tooltipStore.pos[1] + 10 + 'px' }">{{tooltipStore.tooltip}}</p>
	</Observer>
</template>
