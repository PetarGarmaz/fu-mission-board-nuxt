<script setup>
	import { onMounted, ref, onBeforeUpdate} from "vue";

	import MarkdownIt from 'markdown-it';
	import MarkdownItAttrs from 'markdown-it-attrs';

	import { Observer } from 'mobx-vue-lite';
	import briefingStore from "../src/stores/BriefingStore";
	import navbarStore from "../src/stores/NavbarStore";
	import formStore from "../src/stores/FormStore";

	const router = useRouter();
	const briefingId = router.currentRoute._value.params.id;
	const briefing = ref(null);

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

	const renderMarkdown = () => {
		const md = new MarkdownIt().use(MarkdownItAttrs);
		const rend = md.render(briefing.desc);
		
		return rend;
	};

	const handleProfileClick = () => {
		router.push("/profile/" + briefing.creator?._id + "?name=" + briefing.creator?.username);
	};

	const handleEdit = () => {
		router.push("/edit-briefing?id=" + briefingId);
	}

	const handleDelete = () => {
		formStore.handleDelete(briefingId);
		router.push("/");
	}

	onMounted(async () => {
		const data = await briefingStore.getBriefing(briefingId);
		briefingStore.setBriefing(data);
		briefing.value = data;

		console.log(data);
	})
</script>

<template>
	<Observer>
		<section class='min-h-screen'>
			<Suspense>
				<div v-if="briefing" class="flex flex-col w-9/12 mx-auto max-lg:w-11/12 bg-gray-900 my-16 border border-gray-600 rounded-lg">
					<img v-bind:src="briefing.creator?.image" @click="handleProfileClick" alt="Logo" class='object-contain max-w-16 mx-auto my-2 rounded-full cursor-pointer' />
					
					<hr class='border-gray-600'/>
					<h1 class='text-5xl text-gray-200 font-bold tracking-widest text-center my-4 max-lg:mx-2 max-lg:text-3xl max-lg:tracking-normal'>{{briefing.title}}</h1>
					
					<hr class='border-gray-600'/>
					<p class='text-gray-200 text-center max-lg:text-sm tracking-wider italic my-4 mx-4'>Host: {{briefing.host}} ● {{getDateString(briefing.timestamp)}} ● {{getTimeString(briefing.timestamp)}}</p>
					
					<hr class='border-gray-600 mt-1'/>
					<hr class='border-gray-600 mt-1'/>
					
					<p v-if="briefing.desc" v-html="renderMarkdown()" class='briefing-text'></p>

					<img v-if="briefing.image" v-bind:src="briefing.image" alt="briefing_image" class="m-5 rounded-lg"/>

					<hr class='border-gray-600'/>
					<p class='mx-5 my-2 text-2xl text-gray-200 font-bold'>STATUS: {{briefing.status}}</p>

					<div v-if="briefing.creator?._id == navbarStore.session?.user.id || navbarStore.session?.user.isAdmin">
						<hr class='border-gray-600'/>
						<div class='flex flex-wrap'>
							<button @click="handleEdit()" class='w-full mx-5 mt-5 text-center text-gray-200 bg-lime-700 border border-gray-600 hover:bg-lime-500 rounded-lg py-1 transition duration-300'>Edit Briefing</button>			
							<button @click="handleDelete()" class='w-full mx-5 my-5 text-center text-gray-200 bg-red-700 border border-gray-600 hover:bg-red-300 rounded-lg py-1 transition duration-300'>Delete Briefing</button>			
						</div>
					</div>
				</div>
			</Suspense>
		</section>
	</Observer>
</template>
