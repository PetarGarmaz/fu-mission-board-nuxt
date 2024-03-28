<script setup>
	import { Observer } from 'mobx-vue-lite';
	import navbarStore from "../src/stores/NavbarStore.js";

	const { signIn, signOut} = useAuth();
	
	const initNavbar = async () => {
		if(!navbarStore.session) {
			await navbarStore.getSession();
		};
	};

	initNavbar();
</script>

<template>
	<Observer>
		<nav>
			<div class='flex bg-gray-900 py-5 border-b border-b-gray-600'>
				<nuxt-link to="/" class='flex m-auto'>
					<img src="/Logo.png" alt="Logo" class='w-10 object-contain ' />
					<h1 class='m-auto ml-4 text-4xl max-lg:text-2xl text-gray-200 font-bold'>Arma Mission Board</h1>
				</nuxt-link>

				<button @click="navbarStore.toggleDropdown()" class="flex flex-col mr-5 my-auto justify-center items-center">
					<div class="space-y-2">
						<div class="w-8 h-0.5 bg-gray-200 transition duration-300" :class="navbarStore.dropdown && 'rotate-45 translate-y-2.5'"></div>
						<div class="w-8 h-0.5 bg-gray-200 transition duration-200" :class="navbarStore.dropdown && 'bg-transparent'"></div>
						<div class="w-8 h-0.5 bg-gray-200 transition duration-300" :class="navbarStore.dropdown && '-rotate-45 -translate-y-2.5'"></div>
					</div>
				</button>
			</div>

			<aside class="absolute overflow-hidden right-0 bg-gray-900 w-0 border-l border-b border-gray-600 transition-all duration-300" :class="navbarStore.dropdown && 'w-[600px] max-lg:w-full'">
				<div v-if="navbarStore.session?.user" class="flex flex-col">
					<div class='flex'>
						<img :src="navbarStore.session?.user.image" alt="user_logo" class='m-5 w-20 object-contain rounded-full'/>
						<h2 class='ml-5 my-auto text-4xl text-gray-200 tracking-wider first-letter:capitalize'>{{navbarStore.session?.user.name}}<br /><span class='text-2xl'>{{navbarStore.session?.user.isAdmin ? "Officer" : "Member"}}</span></h2>
					</div>

					<hr class='border-gray-600'/>

					<a v-bind:href="'/profile/' + navbarStore.session?.user.id + '?name=' + navbarStore.session?.user.name" class='mx-auto mt-5 pb-2 border-b border-transparent hover:border-gray-600 text-2xl text-gray-200 tracking-wider transition duration-300'>My Profile</a>
					<a href="/create-briefing" class='mx-auto my-5 pb-2 border-b border-transparent hover:border-gray-600 text-2xl text-gray-200 tracking-wider'>Create Briefing</a>

					<hr class='border-gray-600'/>

					<div class='flex flex-col m-5'>
						<button type="button" @click="() => signOut()" class="w-full py-2 text-center text-gray-200 tracking-wider text-2xl bg-red-800 hover:bg-gray-600 rounded-lg transition duration-300">
							Sign Out
						</button>
					</div>
				</div>
				<div v-else class="flex flex-col">
					<div v-for="provider in navbarStore?.providers" class='flex flex-col m-5'>
						<button type="button" @click="() => signIn(provider.id)" class="w-full py-2 text-center text-gray-200 tracking-wider text-2xl hover:bg-gray-600 rounded-lg transition duration-300" :class="provider.id == 'discord' ? 'bg-indigo-500' : 'b-gray-800'">
							Sign In with {{provider.name}}
						</button>
					</div>
				</div>
			</aside>
		</nav>
	</Observer>
</template>