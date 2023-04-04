<template>
	<div>
		<swiper-container
			ref="swiperInstance"
			class="wh-350"
			:class="{'wh-250': $device.isMobile}"
		>
			<swiper-slide v-for="(image, index) of images" :key="index">
				<img :src="image" :alt="productName" />
			</swiper-slide>
		</swiper-container>
	</div>
</template>

<script setup>
	defineProps({
		images: {
			type: Array,
			required: true,
		},
		productName: {
			type: String,
			required: true,
		},
	})

	const swiperInstance = ref(null)

	onMounted(async () => {
		await nextTick()
		const swiperParams = {
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			loop: true,
			grabCursor: true,
			autoplay: true,
			navigation: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				dynamicBullets: true,
			},
		}

		Object.assign(swiperInstance.value, swiperParams)

		swiperInstance.value.initialize()
	})
</script>

<style>
	.swiper-slide img {
		display: block;
		width: auto;
		height: 35vh;
		object-fit: contain;
	}

	.swiper-pagination .swiper-pagination-bullet-active {
		background-color: #004aff;
		opacity: 1;
	}
</style>
