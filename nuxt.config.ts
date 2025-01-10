export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	ssr: false,
	devServer: {
		port: 4200
	},
	app: {
		head: {
			meta: [
				{
					name: 'viewport',
					content:
						'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no'
				}
			],
			script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }]
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	alias: {
		'~': './src'
	},
	css: ['./src/shared/assets/main.css'],
	dir: {
		pages: './src/pages',
		layouts: './src/shared/layouts',
		public: './src/shared/public',
		assets: './src/shared/assets'
	},
	pinia: {
		storesDirs: ['./src/shared/store/**']
	},

	modules: ['@pinia/nuxt']
})
