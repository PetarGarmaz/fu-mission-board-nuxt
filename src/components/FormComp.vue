<script setup>
	import { ref } from "vue";
	import VueDatePicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css';
	import formStore from "../src/stores/FormStore";
	import navbarStore from "../src/stores/NavbarStore";
	import { Observer } from 'mobx-vue-lite';

	const date = ref(formStore.date);
	
	formStore.fetchBriefings();	
</script>

<template>
	<Observer>
		<form :onSubmit="event => formStore.handleSubmit(event, navbarStore.session)" class="flex flex-col bg-gray-900 my-10 border border-gray-600 rounded-lg">
			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Title:</h3>
				<input placeholder="Desert Storm, Thunder, Sword, etc..." required maxLength="50" rows="1" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.title" @input="event => formStore.setBriefing({...formStore.briefing, title: event.target.value})" />
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Host:</h3>
				<input placeholder="Warlord Beezo, Slobodan Beast, etc..." required maxLength="30" rows="1" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.host" @input="event => formStore.setBriefing({...formStore.briefing, host: event.target.value})"/>
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Date:</h3>
				
				<client-only>
					<VueDatePicker required :minDate="new Date()" :enable-time-picker="false" :disabled-week-days="[0, 1, 2, 3, 4, 6]" :disabledDates="formStore.getDisabledDates()" :start-date="formStore.date" auto-apply v-model="date" @date-update="formStore.setDate" />
				</client-only>	
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Description:</h3>
				<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non sem fringilla, malesuada nibh sit amet, mollis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam varius eu mi in pellentesque. Maecenas a dolor vel enim volutpat." required rows="15" class="flex resize-none text-gray-200 tracking-wider lg:text-lg text-justify bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg py-1 px-2 w-full transition duration-300" :value="formStore.briefing.desc" @input="event => formStore.setBriefing({...formStore.briefing, desc: event.target.value})" ></textarea>
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Status:</h3>
				<input placeholder="Unknown, Completed, Failed, etc..." required maxLength="30" rows="1" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.status" @input="event => formStore.setBriefing({...formStore.briefing, status: event.target.value})" />
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Image (Optional):</h3>
				<input placeholder="Insert image link here..." rows="2" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.image" @input="event => formStore.setBriefing({...formStore.briefing, image: event.target.value})"/>
			</div>

			<button type='submit' class="flex m-auto my-5 py-1 px-6 text-gray-200 tracking-wider text-2xl bg-red-600 hover:bg-red-400 rounded-lg transition duration-300">
				{{formStore.type == "Create" ? "Create Briefing" : "Edit Briefing"}}
			</button>
		</form>
	</Observer>
</template>

<style>
	.dp__theme_light {
		--dp-background-color: rgb(31 41 55);
		--dp-text-color: #ffffff;
		--dp-hover-color: rgb(75 85 99);
		--dp-hover-text-color: #fff;
		--dp-hover-icon-color: #fff;
		--dp-primary-color: #005cb2;
		--dp-primary-disabled-color: rgb(31 41 55);
		--dp-primary-text-color: #fff;
		--dp-secondary-color: #a9a9a9;
		--dp-border-color: rgb(75 85 99);
		--dp-menu-border-color: rgb(75 85 99);
		--dp-border-color-hover: #aaaeb7;
		--dp-disabled-color: rgb(31 41 55);
		--dp-disabled-color-text: rgb(31 41 55);
		--dp-scroll-bar-background: #212121;
		--dp-scroll-bar-color: #484848;
		--dp-success-color: #00701a;
		--dp-success-color-disabled: #428f59;
		--dp-icon-color: #959595;
		--dp-danger-color: #e53935;
		--dp-marker-color: #e53935;
		--dp-tooltip-color: #3e3e3e;
		--dp-highlight-color: rgb(0 92 178 / 20%);
		--dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
		--dp-range-between-dates-text-color: var(--dp-hover-text-color);
		--dp-range-between-border-color: var(--dp-hover-color);
	}
</style>