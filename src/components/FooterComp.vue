<script setup>
	import { Observer } from 'mobx-vue-lite';
</script>

<template>
	<header>
		<Observer>
			<footer>
				<div class='flex bg-gray-900 mt-10 py-2 border-b border-b-gray-600'>
					<p class="m-auto text-gray-200 max-lg:text-sm tracking-wider italic">
						<a href="/privacy-policy">Privacy Policy and Terms of Service</a><br/>© Petar Garmaz 2024
					</p>
					<div class="m-auto grid grid-rows-2 grid-cols-2 gap-5">
						<div class="flex">
							<img src="/icon_mail.svg" alt="email" class="mx-3 w-8"/>
							<p class="text-gray-200 max-lg:text-sm tracking-wider italic my-auto">petar.garmaz@gmail.com</p>
						</div>
						<a href="https://github.com/PetarGarmaz" class="flex">
							<img src="/icon_github.svg" alt="github" class="mx-3 w-8"/>
							<p class="text-gray-200 max-lg:text-sm tracking-wider italic my-auto">Check me out on Github</p>
						</a>
						<a href="https://discordapp.com/users/229026532914364416" class="flex">
							<img src="/icon_discord.svg" alt="discord" class="mx-3 w-8"/>
							<p class="text-gray-200 max-lg:text-sm tracking-wider italic my-auto">Find me on Discord</p>
						</a>
					</div>
				</div>	
			</footer>
		</Observer>
	</header>
</template>