export default defineNuxtPlugin(nuxtApp => {
	const config = useRuntimeConfig()

	nuxtApp.$apiURL = config.public.api
})
