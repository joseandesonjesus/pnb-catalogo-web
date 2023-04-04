import {fileURLToPath} from 'url'
import {defineNuxtConfig} from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
			],
			script: [],
			link: [],
			style: [],
			noscript: [],
		},
	},

	alias: {
		images: fileURLToPath(new URL('./assets/images', import.meta.url)),
		style: fileURLToPath(new URL('./assets/style', import.meta.url)),
		data: fileURLToPath(new URL('./assets/data', import.meta.url)),
	},

	css: ['~/assets/style/main.css', '@unocss/reset/tailwind.css'],

	modules: [
		'@pinia/nuxt',
		'@unocss/nuxt',
		'@nuxtjs/device',
		'nuxt-icon',
		'nuxt-typed-router',
	],

	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate', 'useStore'],
	},

	imports: {
		dirs: ['stores', 'services'],
	},

	device: {
		refreshOnResize: true,
	},

	runtimeConfig: {
		public: {
			api: process.env.NUXT_PUBLIC_API_BASE,
		},
	},

	build: {
		transpile: ['vue-toastification', 'swiper', 'vue-perfect-scrollbar'],
	},

	vue: {
		compilerOptions: {
			isCustomElement: tag => /swiper-slide|swiper-container/.test(tag),
		},
	},

	nitro: {
		devProxy: {
			'/api': {
				target: process.env.NUXT_PUBLIC_API_VTEX_BASE,
				changeOrigin: true,
				// prependPath: true,
				pathRewrite: {'^/api': ''},
			},
			'/catalogs/api': {
				target: process.env.NUXT_PUBLIC_API_VTEX_BASE,
				changeOrigin: true,
				// prependPath: true,
				pathRewrite: {'^/catalogs/api': '/api'},
			},
			'/product/api': {
				target: process.env.NUXT_PUBLIC_API_VTEX_BASE,
				changeOrigin: true,
				// prependPath: true,
				pathRewrite: {'^/product/api': '/api'},
			},
		},
	},
})
