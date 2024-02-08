// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@sidebase/nuxt-session', "nuxt-mongoose"],
	postcss: {
		plugins: {
		tailwindcss: {},
		autoprefixer: {},
		},
	},
	mongoose: {
		uri: process.env.MONGODB_URI,
		options: {dbName: "fu_mission_board"},
		modelsDir: 'models',
	},
})
