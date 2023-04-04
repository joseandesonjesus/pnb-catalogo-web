<template>
	<h1 class="text-gray-4 text-28 fw-500 my-32 text-center uppercase">
		Produtos da categoria selecionada
	</h1>
	<loading-component :loading="loading"></loading-component>
	<div class="grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-3">
		<div
			v-for="(product, index) of products"
			:key="index"
			class="b-1 b-gray-3 b-rd-10 flex flex-col justify-between bg-white px-16 pb-16 text-center"
		>
			<!-- {{ product.items[0].images[0].imageUrl }} {{ product.productName }} -->

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
			<div class="mt-16 grid grid-cols-12">
				<!-- class="mt-16 grid grid-cols-12 gap-2 " -->
				<!-- <dropdown-component
					:options="product.items"
					class="w-100%"
					@select="updateSelectedValue(index, $event)"
				/> -->
				<DropdownComponent
					v-if="product.items.length > 1"
					:options="product.items"
					class="w-100%"
					@select="updateSelectedValue(product, $event)"
				/>
				<!-- @select="emitSelect"
					@change="updateSelectedValue(product)" -->
				<button-component
					btn-type="button"
					btn-class="col-span-7 rounded-4 p-8 pnb-bg-dark-blue color-white hover:pnb-bg-yellow-2 ml-4"
					btn-title="Adicionar ao carrinho"
					:on-click="() => addToCart(product)"
				>
				<!-- addToCart(
								product.productName,
								selectedValues[index],
							) -->
					Adicionar ao carrinho
				</button-component>
			</div>
			<!-- -->
		</div>
	</div>
	<!-- $router.back() -->
	<div class="now grid-cols-12 text-center">
		<button-component
			v-if="!loading"
			:disabled="loadingMais"
			:on-click="
				() =>
					updateListProductMais(
						(to += 9),
						(from += 9),
						optionalCatalogs,
						selectedFilter,
					)
			"
			btn-type="button"
			btn-class=" mt-16 w-fit rounded-full px-15 py-8 pnb-bg-blue-3 text-white color-black hover:pnb-bg-yellow-2"
			btn-title="Ver Mais"
		>
			<span v-if="!loadingMais"> Ver Mais </span>
			<loading-component :loading="loadingMais"></loading-component>
		</button-component>
	</div>
	<!-- <div class="grid-cols-12 text-center">{{ from }} Paginação {{ to }} selectedFilter {{ selectedFilter }} optionalCatalogs {{ optionalCatalogs }}</div> -->
</template>

<script setup>
	import {useVtexStore} from '@/services/vtex-service'
	const vtexStore = useVtexStore()
	const toast = useToast()

	const props = defineProps({
		products: {
			type: Array,
			required: true,
		},
		loading: {
			type: Boolean,
		},
		from: {
			type: Number,
			default: 0,
		},
		to: {
			type: Number,
			default: 0,
		},
		selectedFilter: {
			type: String,
			default: 'OrderByNameASC',
			required: true,
		},
		optionalCatalogs: {
			type: String,
			required: true,
		},
	})

	let loadingMais = useState('loadingMais', () => false)

	async function updateListProductMais(
		_to,
		_from,
		_optionalCatalogs,
		_selectedFilter,
	) {
		// debugger
		loadingMais.value = true
		// vtexStore.setListProductCategories([])

		let respProd = await vtexStore.doSearchProduct({
			idCategory: _optionalCatalogs,
			from: _from,
			to: _to,
			eSortProduct: _selectedFilter,
		})

		vtexStore.updateListProductCategories(respProd)
		loadingMais.value = false
	}

	const selectedOption = useState('selectedValue', () => '')

	function updateSelectedValue(product, sort) {
		let itemsSort = product.items.find(p => p.name === sort)
		selectedOption.value = itemsSort.itemId
		console.log(`itemId: `, selectedOption.value)
	}

	async function addToCart(product) {
		if (product.items.length > 1 && !selectedOption.value) {
			toast.error('Selecione um tamanho.')
			return
		}
		console.log('selectedOption.value ', selectedOption.value)

		let id = ref(0)
		let sellerId = ref(0)

		if (product.items.length === 1) {
			id = product.items[0].itemId
			sellerId = product.items[0].sellers[0].sellerId //product.seller
		}else{
			id = selectedOption.value
			sellerId = product.items.find(x => x.itemId === selectedOption.value).sellers[0].sellerId
		}

		let cart = await vtexStore.doAddUpdateProductCart({
				orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
				body: 	{ orderItems: [ {
											id: id, //product.items[0].itemId,
											quantity: 1,
											seller: sellerId //product.items[0].sellers[0].sellerId //product.seller,
										}
									]
						}
			})
			// cartStore.incrementCartTotalItems()
		toast.success(`${product.productName} foi adicionado ao carrinho. `)
	}
</script>
