<template>
	<h1 class="text-gray-4 text-28 fw-500 my-32 text-center uppercase">
		mais vendidos
	</h1>
	<loading-component :loading="loading"></loading-component>
	<div class="grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-3">
		<div
			v-for="(product, index) of productsBestSeller"
			:key="index"
			class="b-1 b-gray-3 b-rd-10 flex flex-col justify-between bg-white px-16 pb-16 text-center"
		>
			<!-- {{ product.items[0].images[0].imageUrl }}
    {{ product.productName }} -->

			<div>
				<nuxt-link :to="`/product/${product.productReference}`">
					<img
						class="max-h-200 mx-auto mb-8 object-cover"
						:src="product.items[0].images[0].imageUrl"
						:alt="product.productName"
					/>
				</nuxt-link>
				<h1 class="text-22 fw-500">{{ product.productName }}</h1>
			</div>
			<div class="mt-32">
				<h2 class="text-14">{{ product.productReference }}</h2>
				<p class="text-32 fw-700 pnb-dark-blue">
					{{
						formatMoney(
							product.items[0].sellers[0].commertialOffer
								.listPrice,
						)
					}}
				</p>
			</div>
			<div class="mt-16 grid grid-cols-12 gap-2">
				<dropdown-component
					v-if="product.items.length > 1"
					:options="product.items"
					class="w-100%"
					@select="updateSelectedValue(product, $event)"
				/>
				<button-component
					btn-type="button"
					btn-class="col-span-7 rounded-4 p-8 pnb-bg-dark-blue color-white hover:pnb-bg-yellow-2 ml-4"
					btn-title="Adicionar ao carrinho"
					:on-click="
						() =>
							addToCart(
								product.productName,
								selectedValues[index],
							)
					"
				>
					Adicionar ao carrinho
				</button-component>
			</div>
			<!-- -->
		</div>
	</div>
</template>

<script setup>
	defineProps({
		productsBestSeller: {
			type: Array,
			required: true,
		},
		loading: {
			type: Boolean,
		},
	})

	const selectedValue = useState('selectedValue', () => '')

	function updateSelectedValue(product, sort) {
		let itemsSort = product.items.find(p => p.name === sort)
		selectedValue.value = itemsSort.itemId
		console.log(`itemId: `, selectedValue.value)
	}
</script>
