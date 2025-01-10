export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	app: {
		head: {
			script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }]
		}
	},
	alias: {
		'~': './src'
	},
	dir: {
		pages: './src/pages',
		layouts: './src/shared/layouts',
		public: './public/shared/public'
	}
})
