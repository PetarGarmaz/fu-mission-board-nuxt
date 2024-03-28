// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@sidebase/nuxt-session', '@sidebase/nuxt-auth', "nuxt-mongoose", '@samk-dev/nuxt-vcalendar', 'mobx-vue-lite/nuxt', ['nuxt-mail', {
		message: {to: 'petar.garmaz@gmail.com',},
		smtp: {
			host: "live.smtp.mailtrap.io",
			port: 587,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS
			},
		},
    }],],
	build: {
		babel: {
		  plugins: [
			[
			  '@babel/plugin-proposal-decorators',
			  {
				legacy: true
			  }
			],
			[
			  '@babel/plugin-proposal-class-properties',
			  {
				loose: true
			  }
			]
		  ]
		},
		transpile: ['@vuepic/vue-datepicker']
    },
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
	}
})
