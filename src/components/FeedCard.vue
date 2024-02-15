<script setup>
	const props = defineProps(['briefing']);

	const getDateString = (timestamp) => {
		const parsedDate = new Date(parseInt(timestamp));
		const newDate = parsedDate.toLocaleDateString('en-uk', { weekday:"long", month:"long", year:"numeric", day:"numeric"});
		return newDate;
	};

	const getTimeString = (timestamp) => {
		const parsedDate = new Date(parseInt(timestamp));
		const newTime = parsedDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", timeZoneName: "short" });
		return newTime;
	};
</script>

<template>
	<nuxt-link to="/" class="flex flex-col bg-gray-900 my-5 border border-gray-600 rounded-lg transition duration-300 hover:bg-gray-700 hover:-translate-y-1 hover:translate-x-1 hover:drop-shadow-[-5px_5px_2px_rgba(0,0,0,0.5)">
		<header class='flex max-lg:flex-col'>
			<img v-bind:src="briefing.creator.image" alt="Logo" class='object-cover w-16 mx-5 max-lg:mx-auto my-2 max-lg:my-5 rounded-full' />
			<hr class='lg:hidden max-lg:border-gray-600'/>
			
			<div class='flex flex-col'>
				<h2 class='text-2xl max-lg:text-xl max-lg:text-center text-gray-200 font-bold lg:tracking-wider my-auto max-lg:my-2 max-lg:mx-5'>{{briefing.title}}</h2>
				<hr class='lg:hidden max-lg:border-gray-600'/>
				<p class='text-gray-200 max-lg:text-center text-xl max-lg:text-sm tracking-wider italic my-auto max-lg:my-2 max-lg:mx-5'>Host: {{briefing.host}} ● {{getDateString(briefing.timestamp)}} ● {{getTimeString(briefing.timestamp)}}</p>
			</div>
		</header>

		<hr class='border-gray-600'/>
		<p class='m-5 text-lg max-lg:text-sm text-gray-200 text-justify italic text-wrap line-clamp-5 max-lg:line-clamp-6'>{{briefing.desc}}</p>

		<hr class='border-gray-600'/>
		<p class='mx-5 my-2 text-2xl max-lg:text-xl text-gray-200 font-bold'>STATUS: {{briefing.status}}</p>
	</nuxt-link>
</template>

