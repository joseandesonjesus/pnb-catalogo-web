<template>
	<div class="container">
		<FormwizardComponent :cart="null" />
	</div>
</template>

<script setup>
	import FormwizardComponent from '~~/components/formwizard-component.vue'
	// import { useVtexStore } from '@/services/vtex-service'

	// const vtexStore = useVtexStore()
	// // onBeforeMount(async () => {
	// 	// debugger

	// 	const currentCart = await vtexStore.doGetCart('f8b4da78-c50d-4298-9c55-cc2d99f34c3d')
	// 	console.log('currentCart ', currentCart)
	// // });
</script>
