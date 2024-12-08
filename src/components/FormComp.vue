<script setup>
	import { ref, onMounted } from "vue";
	import VueDatePicker from '@vuepic/vue-datepicker';
	import '@vuepic/vue-datepicker/dist/main.css';

	import briefingStore from "../src/stores/BriefingStore";
	import formStore from "../src/stores/FormStore";
	import navbarStore from "../src/stores/NavbarStore";
	import tooltipStore from "../src/stores/TooltipStore";
	
	import Tooltip from '../src/components/Tooltip.vue';
	import { Observer } from 'mobx-vue-lite';

	import MarkdownIt from 'markdown-it';
	import MarkdownItAttrs from 'markdown-it-attrs';

	const roles = ref([
		{
			name: "Armored",
			icon: "/roles/a3_armored.png",
			selected: false,
			slots: 1,
		},
		{
			name: "Artillery",
			icon: "/roles/a3_artillery.png",
			selected: false,
			slots: 1,
		},
	]);
	const date = ref(formStore.date);
	const router = useRouter();
	const props = defineProps(["briefingId"]);
	let showPreview = false;

	const handleSubmit = (event) => {
		if(formStore.type == "Edit") {
			formStore.handleEdit(event, props.briefingId);
		} else {
			//sendDiscordNotification();
			formStore.handleSubmit(event, navbarStore.session);
		}
		
		// sendMail();
		router.push("/");
	};

	const renderMarkdown = () => {
		const md = new MarkdownIt().use(MarkdownItAttrs);
		const rend = md.render(formStore.briefing.desc.toString());
		
		return rend;
	};

	const handleRole = (role, value) => {
		role.selected = value;
		console.log(value);
	};

	onMounted(async () => {
		if(props.briefingId) {
			await formStore.getBriefing(props.briefingId);
		}

		await briefingStore.getAllBriefings();
	})
</script>

<template>
	<Observer>
		<header class="flex flex-col bg-gray-900 mt-10 border border-gray-600 rounded-lg">
			<h1 class='text-5xl text-gray-200 font-bold tracking-widest text-center my-4 max-lg:text-3xl max-lg:tracking-normal'>{{formStore.type.toUpperCase()}} BRIEFING</h1>
			<hr class='border-gray-600'/>
			<p class='text-gray-200 text-center max-lg:text-sm tracking-wider italic my-4 mx-4'>{{formStore.type == "Create" ? "Create a briefing for an upcoming mission." : "Edit an existing mission briefing."}}</p>
		</header>
		
		<form :onSubmit="event => handleSubmit(event)" class="flex flex-col bg-gray-900 my-10 border border-gray-600 rounded-lg">
			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Title: <button type="button" @click="tooltipStore.setTooltipType('title')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button></h3>
				<input placeholder="Desert Storm, Thunder, Sword, etc..." required maxLength="50" rows="1" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.title" @input="event => formStore.setBriefing({...formStore.briefing, title: event.target.value})"/>
				<Tooltip v-bind:tooltipType="'title'" v-bind:tooltipValue="'Enter the operation title, e.g. Operation: Cinder, Operation: Sandstorm, etc...'"/>
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Host: <button type="button" @click="tooltipStore.setTooltipType('host')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button></h3>
				<input placeholder="Warlord Beezo, Slobodan Beast, etc..." required maxLength="30" rows="1" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.host" @input="event => formStore.setBriefing({...formStore.briefing, host: event.target.value})" />
				<Tooltip v-bind:tooltipType="'host'" v-bind:tooltipValue="'Enter the operation host name, e.g. Chyper, Pug, Weasel, Bizo, Dotz0r, etc...'"/>
			</div>

			<div v-if="formStore.type != 'Edit'" class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Date: <button type="button" @click="tooltipStore.setTooltipType('date')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button></h3>
				
				<client-only>
					<VueDatePicker v-if="formStore.type != 'Edit'"  required :clearable="false" :minDate="new Date()" :enable-time-picker="false" :disabled-week-days="[0, 1, 2, 3, 4, 6]" :disabledDates="formStore.getDisabledDates(briefingStore.allBriefings)" :start-date="new Date(parseInt(formStore.date))" auto-apply v-model="date" @date-update="formStore.setDate" />
				</client-only>
				<Tooltip v-bind:tooltipType="'date'" v-bind:tooltipValue="'Select an available date to host your mission. Only Fridays are available.'"/>
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Description: 
					<button type="button" @click="tooltipStore.setTooltipType('desc')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button>
					<button type="button" @click="formStore.toggleShowPreview()" class="font-normal cursor-pointer transition-all duration-300 ml-2">👁</button>
				</h3>
				<div class="flex max-lg:flex-col gap-2">
					<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non sem fringilla, malesuada nibh sit amet, mollis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam varius eu mi in pellentesque. Maecenas a dolor vel enim volutpat." required rows="15" class="flex resize-none text-gray-200 tracking-wider lg:text-lg text-justify bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg py-1 px-2 w-full transition duration-300" :value="formStore.briefing.desc" @input="event => formStore.setBriefing({...formStore.briefing, desc: event.target.value})" ></textarea>
					<p v-if="formStore.showPreview" v-html="renderMarkdown()" class='briefing-text-form lg:mt-0 bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg py-1 px-2 lg:w-full '></p>
				</div>
				<Tooltip v-bind:tooltipType="'desc'" v-bind:tooltipValue="'Enter a mission description, it can be as big or small as you want. It allows MARKDOWN syntax, for example:\n# Big Heading\n## Normal Heading\n ### Small Heading\n*Italic text*\n**Bold text**\n- List item\n\nFor a proper example:\n## SITUATION:\nYou are FACTION A fighting FACTION B.\n\n## MISSION:\nYour tasks include:\n- Destroy this\n- Destroy that\n\n## EXECUTION:\nDetailed mission explanation and execution, blah blah blah.\n\n== YOU CAN ALSO INSERT CUSTOM IMAGES ==\n![image_1](https://i.imgur.com/XUgMBZN.jpeg)*Insert Image Caption Here!*'"/>
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Status: <button type="button" @click="tooltipStore.setTooltipType('status')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button></h3>
				<input  placeholder="Unknown, Completed, Failed, etc..." required maxLength="50" rows="1" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.status" @input="event => formStore.setBriefing({...formStore.briefing, status: event.target.value})" />
				<Tooltip v-bind:tooltipType="'status'" v-bind:tooltipValue="'Enter custom status of the mission, usually you can put it as Unknown.'"/>
			</div>

			<div class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Image (Optional): <button type="button" @click="tooltipStore.setTooltipType('image')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button></h3>
				<input  placeholder="Insert image link here..." rows="2" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 w-full transition duration-300" :value="formStore.briefing.image" @input="event => formStore.setBriefing({...formStore.briefing, image: event.target.value})"/>
				<Tooltip v-bind:tooltipType="'image'" v-bind:tooltipValue="'Enter a custom image link, e.g. https://i.imgur.com/XUgMBZN.jpeg'"/>
			</div>

			<div v-if="formStore.type != 'Edit'" class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Ping Mission Makers (Optional): <button type="button" @click="tooltipStore.setTooltipType('ping')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button></h3>
				<input type="checkbox" class="h-6 w-6" :value="formStore.pingMissionMakers" @input="event => formStore.setPingMissionMakers(event.target.value)"/>
				<Tooltip v-bind:tooltipType="'ping'" v-bind:tooltipValue="'With great power, comes great responsibility!'"/>
			</div>

			<!--
			<div v-if="formStore.type != 'Edit'" class="m-5">
				<h3 class="text-2xl text-gray-200 tracking-wider mb-2">Special Roles (Optional): <button type="button" @click="tooltipStore.setTooltipType('roles')" class="font-normal cursor-pointer transition-all duration-300">ⓘ</button></h3>
				
				<div v-for="role in roles" class="grid grid-cols-7 gap-5 my-5">
					<img v-bind:src="role.icon" alt="" class="w-10">
					<p class="text-left">{{role.name}}</p>
					<input type="checkbox" class="h-6 w-6 mt-2" @input="event => handleRole(role, event.target.checked)"/>
					<div v-if="role.selected" class="grid grid-cols-4 col-start-4 col-end-7 gap-5">
						<p>Min Slots:</p>
						<input type="number" placeholder="2" rows="2" min="1" max="9" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 transition duration-300"/>
						<p>Max Slots:</p>
						<input type="number" placeholder="2" rows="2" min="1" max="9" class="flex text-gray-200 tracking-wider lg:text-lg bg-gray-800 border border-gray-600 hover:bg-gray-700 rounded-lg resize-none py-1 px-2 transition duration-300"/>
					</div>
				</div>

				<Tooltip v-bind:tooltipType="'roles'" v-bind:tooltipValue="'Roles available to players'"/>
			</div>
			-->
			
			<img v-if="formStore.briefing.image" v-bind:src="formStore.briefing.image" alt="briefing_image" class="m-5 rounded-lg"/>
			
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