<template>
	<header class="w-100% top--15 z-1 fixed md:top--52">
		<div
			ref="skew"
			class="pnb-skew pnb-bg-yellow position-relative b-10-solid-blue shadow"
		>
			<div class="md:pt-75 md:pb-30 pt-35 pb-20 md:px-16">
				<div class="container">
					<h1
						class="pnb-skew-retailer-name pnb-dark-blue md:text-size-48 fw-500 text-size-22 uppercase"
					>
						<nuxt-link to="/"
							>Catálogo de
							<span class="fw-800">#STEFANY</span></nuxt-link
						>
					</h1>
				</div>
			</div>
		</div>
		<div
			ref="skewa"
			class="pnb-skew pnb-bg-blue-3 position-relative shadow"
		></div>
		<div
			ref="logo"
			class="mr-15 position-absolute right-0 float-right md:mr-80 lg:mt--10"
		>
			<img
				alt="Pernambucanas"
				class="max-h-35 w-fit md:max-h-60"
				src="~/assets/images/pernambucanas-logo.png"
			/>
			<div class="float-right mt-8">
				<button
					type="button"
					class="pnb-bg-yellow-2 position-relative wh-45 mr-8 rounded-full p-6 md:p-12"
					aria-label="Compartilhar"
					@click.prevent="copyUrl()"
				>
					<Icon
						name="ic:baseline-share"
						class="pnb-dark-blue wh-24 hover:color-white"
					/>
				</button>
				<nuxt-link
					:to="vtexStore.getTotalItems === 0 ? '' : '/cart'"
					class="pnb-bg-yellow-2 position-relative wh-45 rounded-full p-6 md:p-12"
					aria-label="Carrinho"
				>
					<b
						ref="cartTotalItems"
						class="position-absolute text-size-12 right--5 top-0 translate-x--1/20 rounded-full bg-white px-4 md:right-0"
						>
						<!-- class="position-absolute text-size-12 right--5 top-0 translate-x--1/2 rounded-full bg-white px-4 md:right-0" -->
						{{ vtexStore.getTotalItems }}
					</b>
					<Icon
						name="ic:baseline-shopping-cart"
						class="pnb-dark-blue wh-24 hover:color-white"
					/>
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<script setup>
	import {useVtexStore} from '@/services/vtex-service'
	const toast = useToast()
	const cartStore = useCart()
	const vtexStore = useVtexStore()

	const {setHeaderHeight} = useHeaderHeight()

	const headerHeight = ref(0)

	const skew = ref(null)
	const skewHeight = ref(0)

	const logo = ref(null)
	const logoHeight = ref(0)

	// let cartTotalItems = useState('cartTotalItems', () => 0)

	// watch(
	// 	() => cartTotalItems,
	// 	newValue => {
	// 		debugger
	// 		console.log('newValue ', newValue)
	// 		cartTotalItems = newValue
	// 	},
	// )

	function copyUrl() {
		navigator.clipboard.writeText(window.location.href)
		toast.success('Link copiado com sucesso.')
	}

	const updateHeaderHeight = () => {
		skewHeight.value = skew.value.offsetHeight
		logoHeight.value = logo.value.offsetHeight

		headerHeight.value = skewHeight.value + logoHeight.value
		setHeaderHeight(headerHeight.value)
	}

	onMounted(() => {
		updateHeaderHeight()
		window.addEventListener('resize', updateHeaderHeight)
	})

	onUpdated(() => {
		updateHeaderHeight()
	})

	onUnmounted(() => {
		window.removeEventListener('resize', updateHeaderHeight)
	})
</script>

<style>
	.pnb-skew {
		transform: skewY(-3deg);
	}

	.pnb-skew-retailer-name {
		transform: skewY(3deg);
	}
</style>
