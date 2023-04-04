<script setup lang="ts">
	import {useVtexStore} from '@/services/vtex-service'
	const cartStore = useCart()
	const route = useRoute()
	const toast = useToast()
	const vtexStore = useVtexStore()

	const categoryName = ref('')
	const from = ref(0)
	let imageView = ref(false)
	let loadingBestSellers = useState('loadingBestSellers', () => false)
	let loadingCategories = useState('loadingCategories', () => false)
	let loadingProducts = useState('loadingProducts', () => false)
	const maxPriceConf = useState('maxPriceConf', () => 5000)
	let maxPrice = useState('maxPrice', () => 5000)
	const minPriceConf = useState('minPriceConf', () => 0)
	let minPrice = useState('minPrice', () => 0)
	let optionalCatalogs = ref('')
	const optionFilterProducts = ref([
		{name: 'Recomendados', value: 'OrderByTopSaleDESC'},
		{name: 'Novidades', value: 'OrderByReleaseDateDESC'},
		{name: 'Menor preço', value: 'OrderByPriceASC'},
		{name: 'Maior preço', value: 'OrderByPriceDESC'},
		{name: 'Mais vendidos', value: 'OrderByTopSaleDESC'},
		// { 'name': 'POR NOME DE A-Z', 'value': 'OrderByNameASC' },
		// { 'name': 'POR NOME DE Z-A', 'value': 'OrderByNameDESC' },
	])
	let selectedSize = useState('selectedSize', () => null)
	let selectedFilter = useState('selectedFilter', () => 'OrderByTopSaleDESC')
	let showModalFilter = useState('showModalFilter', () => false)
	const subcategories = ref([])
	const to = ref(8)

	let bestSellersProducts = useState('bestSellersProducts', () => null)
	let productsList = useState('productsList', () => null)

	onUpdated(async () => {
		bestSellersProducts.value = await vtexStore.getListProductBestSellers
		productsList.value = await vtexStore.getListProductCategories
		// console.log('depois de montado')
	})

	// let bestSellersProducts = computed(() => {
	// 	return vtexStore.getListProductBestSellers;
	// });
	// let productsList = computed(() => {
	// 	return vtexStore.getListProductCategories;
	// });
	// let loading = computed(() => {
	// 	return loading;
	// });

	const handleFilterSelected = async option => {
		updateListProduct()
	}

	categoryName.value = route.params.id

	subcategories.value.sort((current, previous) =>
		current.name.localeCompare(previous.name),
	)

	function slider() {
		if (minPrice.value > maxPrice.value) {
			maxPrice.value = minPrice.value
			minPrice.value = maxPrice.value - 50
		}
	}

	function imageExists(imageUrl) {
		const http = new XMLHttpRequest()
		try {
			http.open('HEAD', imageUrl, false)
			http.send()
			imageView.value = http.status !== 200 ? false : true
		} catch (error) {
			imageView.value = false
		}

		return imageView
		// http.status != 404;
	}

	function updateSelectedValue(val) {
		selectedFilter.value = val
		updateListProduct()
	}

	async function updateListProduct() {
		loadingProducts.value = true
		vtexStore.setListProductCategories([])

		let respProd = await vtexStore.doSearchProduct({
			idCategory: optionalCatalogs,
			from: from.value,
			to: to.value,
			eSortProduct: selectedFilter.value,
			filterBySize: selectedSize.value,
		})

		vtexStore.setListProductCategories(respProd)
		loadingProducts.value = false
	}

	async function openModalFilter() {
		showModalFilter.value = true
	}

	onBeforeMount(async () => {
		// loading = true
		loadingCategories.value = true
		loadingProducts.value = true
		loadingBestSellers.value = true
		// TODO: MELHORAR POIS ESTÁ QUEBRANDO QUANDO VOLTA DO TERCEIRO NÍVEL
		try {
			vtexStore.setListProductBestSellers([])
			vtexStore.setListProductCategories([])

			optionalCatalogs.value = await vtexStore.getCollectionCategory
			let oc = optionalCatalogs.value.filter(
				x => normalizeText(x.name) === route.params.id,
			)[0]
			if (!oc) {
				optionalCatalogs = vtexStore.getSubCollectionCategorys
				optionalCatalogs.children.forEach(subcat => {
					if (normalizeText(subcat.name) === route.params.id)
						oc = subcat
				})
				vtexStore.setSubCollectionCategorys(oc)
				try {
					vtexStore.setOptionCategory(
						`${vtexStore.getOptionCategory}/${oc.id}`,
					)
				} catch (error) {}
			} else {
				vtexStore.setSubCollectionCategorys(oc)
				vtexStore.setOptionCategory(`${oc.id}`)
			}
			subcategories.value = oc
			// console.log('oc ', JSON.stringify(oc))

			imageExists(`/images/banners/${categoryName.value}.jpg`)

			// await vtexStore.doGetCategories()
			// categories.value = vtexStore.getCategories
		} catch (error) {}
		optionalCatalogs = vtexStore.getOptionCategory
		// console.log('getOptionCategory ', optionalCatalogs)
		// vtexStore.setListProductBestSellers([])

		let respProdBestSellers = await vtexStore.doSearchProduct({
			idCategory: optionalCatalogs,
			from: 0, //from.value,
			to: 8, //to.value,
			eSortProduct: 'OrderByTopSaleDESC',
		})
		// console.log('respProdBestSellers ', respProdBestSellers)

		vtexStore.setListProductBestSellers(respProdBestSellers)

		//OrderByPriceDESC, OrderByPriceASC, OrderByTopSaleDESC, OrderByReviewRateDESC, OrderByNameASC, OrderByNameDESC, OrderByReleaseDateDESC, OrderByBestDiscountDESC, OrderByScoreDESC

		// vtexStore.setListProductCategories([])

		let respProd = await vtexStore.doSearchProduct({
			idCategory: optionalCatalogs,
			from: from.value,
			to: to.value,
			eSortProduct: 'OrderByTopSaleDESC',
		})
		// console.log('respProd ', respProd)

		vtexStore.setListProductCategories(respProd)

		loadingCategories.value = false
		loadingProducts.value = false
		loadingBestSellers.value = false
		// loading = false
		//bestSellersProducts = respProd.value //vtexStore.getListProductCategories
		// console.log('bestSellers ', respProd)
	})

	// const subcategories = ref([
	// 	{
	// 		name: 'Calças',
	// 	},
	// 	{
	// 		name: 'Shorts',
	// 	},
	// 	{
	// 		name: 'Bermudas',
	// 	},
	// 	{
	// 		name: 'Vestidos',
	// 	},
	// 	{
	// 		name: 'Macacões',
	// 	},
	// 	{
	// 		name: 'Saias',
	// 	},
	// 	{
	// 		name: 'Top Fitness',
	// 	},
	// 	{
	// 		name: 'Sutiã',
	// 	},
	// 	{
	// 		name: 'Regatas',
	// 	},
	// 	{
	// 		name: 'Tamancos',
	// 	},
	// 	{
	// 		name: 'Scarpin',
	// 	},
	// 	{
	// 		name: 'Botas',
	// 	},
	// 	{
	// 		name: 'Calcinhas',
	// 	},
	// 	{
	// 		name: 'Sapatilhas',
	// 	},
	// 	{
	// 		name: 'Body',
	// 	},
	// 	{
	// 		name: 'Cintas e modeladores',
	// 	},
	// 	{
	// 		name: 'Meias e pantufas',
	// 	},
	// 	{
	// 		name: 'Short doll',
	// 	},
	// 	{
	// 		name: 'Camisolas',
	// 	},
	// 	{
	// 		name: 'Pijamas',
	// 	},
	// 	{
	// 		name: 'Jaquetas',
	// 	},
	// 	{
	// 		name: 'Calçados',
	// 	},
	// 	{
	// 		name: 'Mules',
	// 	},
	// 	{
	// 		name: 'Rasteiras',
	// 	},
	// 	{
	// 		name: 'Sandálias',
	// 	},
	// 	{
	// 		name: 'Sapatilhas',
	// 	},
	// 	{
	// 		name: 'Sapatos',
	// 	},
	// 	{
	// 		name: 'Tênis',
	// 	},
	// 	{
	// 		name: 'Chinelos',
	// 	},
	// 	{
	// 		name: 'Suéteres',
	// 	},
	// 	{
	// 		name: 'Blusas',
	// 	},
	// 	{
	// 		name: 'Camisas',
	// 	},
	// ])

	// const products = []
	//  ref([
	// 	{
	// 		name: 'Calcinha Biquíni Renda',
	// 		code: '773819000000',
	// 		price: 17.99,
	// 		sizes: [
	// 			{
	// 				label: 'P',
	// 				value: 'p',
	// 				quantity: 10,
	// 			},
	// 			{
	// 				label: 'M',
	// 				value: 'm',
	// 				quantity: 3,
	// 			},
	// 			{
	// 				label: 'G',
	// 				value: 'p',
	// 				quantity: 5,
	// 			},
	// 			{
	// 				label: 'GG',
	// 				value: 'gg',
	// 				quantity: 2,
	// 			},
	// 		],
	// 		image: '/images/produtos/1.png',
	// 	},
	// 	{
	// 		code: '931822000000',
	// 		name: 'Kit 3 Meias Curtas de Algodão Básico',
	// 		price: 19.99,
	// 		sizes: [
	// 			{
	// 				label: '34-39',
	// 				value: '34-39',
	// 				quantity: 1,
	// 			},
	// 		],
	// 		image: '/images/produtos/2.png',
	// 	},
	// 	{
	// 		code: '949920000000',
	// 		name: 'Meia Calça Arrastão Preta - Selene',
	// 		price: 25.99,
	// 		sizes: [
	// 			{
	// 				label: 'P',
	// 				value: 'p',
	// 				quantity: 10,
	// 			},
	// 			{
	// 				label: 'M',
	// 				value: 'm',
	// 				quantity: 3,
	// 			},
	// 			{
	// 				label: 'G',
	// 				value: 'p',
	// 				quantity: 5,
	// 			},
	// 			{
	// 				label: 'GG',
	// 				value: 'gg',
	// 				quantity: 2,
	// 			},
	// 		],
	// 		image: '/images/produtos/3.png',
	// 	},
	// 	{
	// 		code: '972103000000',
	// 		name: 'Calça Jeans Escura Jogger com Bolso Cargo Cintura Alta - Ink',
	// 		price: 139.99,
	// 		sizes: [
	// 			{
	// 				label: '36',
	// 				value: '36',
	// 				quantity: 1,
	// 			},
	// 			{
	// 				label: '38',
	// 				value: '38',
	// 				quantity: 0,
	// 			},
	// 			{
	// 				label: '40',
	// 				value: '40',
	// 				quantity: 15,
	// 			},
	// 			{
	// 				label: '42',
	// 				value: '42',
	// 				quantity: 6,
	// 			},
	// 			{
	// 				label: '44',
	// 				value: '44',
	// 				quantity: 6,
	// 			},
	// 			{
	// 				label: '46',
	// 				value: '46',
	// 				quantity: 6,
	// 			},
	// 		],
	// 		image: '/images/produtos/4.png',
	// 	},
	// 	{
	// 		code: '978012000000',
	// 		name: 'Calça Jeans Black Reta Sawary com Costura Contrastante',
	// 		price: 119.99,
	// 		sizes: [
	// 			{
	// 				label: '36',
	// 				value: '36',
	// 				quantity: 1,
	// 			},
	// 			{
	// 				label: '38',
	// 				value: '38',
	// 				quantity: 0,
	// 			},
	// 			{
	// 				label: '40',
	// 				value: '40',
	// 				quantity: 15,
	// 			},
	// 			{
	// 				label: '42',
	// 				value: '42',
	// 				quantity: 6,
	// 			},
	// 			{
	// 				label: '44',
	// 				value: '44',
	// 				quantity: 6,
	// 			},
	// 			{
	// 				label: '46',
	// 				value: '46',
	// 				quantity: 6,
	// 			},
	// 		],
	// 		image: '/images/produtos/5.png',
	// 	},
	// 	{
	// 		code: '985484000000',
	// 		name: 'Calça Jeans Skinny Pala de Coração Bolso Relógio Biotipo',
	// 		price: 129.99,
	// 		sizes: [
	// 			{
	// 				label: '36',
	// 				value: '36',
	// 				quantity: 1,
	// 			},
	// 			{
	// 				label: '38',
	// 				value: '38',
	// 				quantity: 0,
	// 			},
	// 			{
	// 				label: '40',
	// 				value: '40',
	// 				quantity: 15,
	// 			},
	// 			{
	// 				label: '42',
	// 				value: '42',
	// 				quantity: 6,
	// 			},
	// 			{
	// 				label: '44',
	// 				value: '44',
	// 				quantity: 6,
	// 			},
	// 			{
	// 				label: '46',
	// 				value: '46',
	// 				quantity: 6,
	// 			},
	// 		],
	// 		image: '/images/produtos/6.png',
	// 	},
	// 	{
	// 		code: '987444000000',
	// 		name: 'Pijama Manga Longa Estampa Gatinho Rosa - Ella',
	// 		price: 69.99,
	// 		sizes: [
	// 			{
	// 				label: 'P',
	// 				value: 'p',
	// 				quantity: 10,
	// 			},
	// 			{
	// 				label: 'M',
	// 				value: 'm',
	// 				quantity: 3,
	// 			},
	// 			{
	// 				label: 'G',
	// 				value: 'p',
	// 				quantity: 5,
	// 			},
	// 			{
	// 				label: 'GG',
	// 				value: 'gg',
	// 				quantity: 2,
	// 			},
	// 		],
	// 		image: '/images/produtos/7.png',
	// 	},
	// 	{
	// 		code: '986320000000',
	// 		name: 'Tênis Casual Preto Com Solado Branco - Moleca',
	// 		price: 79.99,
	// 		sizes: [
	// 			{
	// 				label: '36',
	// 				value: '36',
	// 				quantity: 1,
	// 			},
	// 			{
	// 				label: '37',
	// 				value: '37',
	// 				quantity: 0,
	// 			},
	// 			{
	// 				label: '38',
	// 				value: '38',
	// 				quantity: 15,
	// 			},
	// 			{
	// 				label: '39',
	// 				value: '39',
	// 				quantity: 6,
	// 			},
	// 		],
	// 		image: '/images/produtos/8.png',
	// 	},
	// 	{
	// 		code: '985871000000',
	// 		name: 'Blusa Manga Curta Estampa Mickey Branca',
	// 		price: 35.99,
	// 		sizes: [
	// 			{
	// 				label: 'PP',
	// 				value: 'pp',
	// 				quantity: 3,
	// 			},
	// 			{
	// 				label: 'P',
	// 				value: 'p',
	// 				quantity: 10,
	// 			},
	// 			{
	// 				label: 'M',
	// 				value: 'm',
	// 				quantity: 3,
	// 			},
	// 			{
	// 				label: 'G',
	// 				value: 'p',
	// 				quantity: 5,
	// 			},
	// 			{
	// 				label: 'GG',
	// 				value: 'gg',
	// 				quantity: 2,
	// 			},
	// 		],
	// 		image: '/images/produtos/9.png',
	// 	},
	// 	{
	// 		code: '985910000000',
	// 		name: 'Pijama Vermelho com Blusa Manga Longa e Calça Xadrez',
	// 		price: 159.99,
	// 		sizes: [
	// 			{
	// 				label: 'P',
	// 				value: 'p',
	// 				quantity: 10,
	// 			},
	// 			{
	// 				label: 'M',
	// 				value: 'm',
	// 				quantity: 3,
	// 			},
	// 			{
	// 				label: 'G',
	// 				value: 'p',
	// 				quantity: 5,
	// 			},
	// 			{
	// 				label: 'GG',
	// 				value: 'gg',
	// 				quantity: 2,
	// 			},
	// 		],
	// 		image: '/images/produtos/10.png',
	// 	},
	// ])

	// const selectedValues = ref(Array(bestSellersProducts.length).fill(''))

	// function updateSelectedValue(index, selectedValue) {
	// 	selectedValues.value[index] = selectedValue
	// }

	// function addToCart(productName, selectedOption) {
	// 	if (!selectedOption) {
	// 		toast.error('Selecione um tamanho.')
	// 		return
	// 	}

	// 	cartStore.incrementCartTotalItems()

	// 	toast.success(`${productName} foi adicionado ao carrinho.`)
	// }

	// quantity: 5,
	// 			},
	// 			{
	// 				label: 'GG',
	// 				value: 'gg',
	// 				quantity: 2,
	// 			},
	// 		],
	// 		image: '/images/produtos/10.png',
	// 	},
	// ])

	// const selectedValues = ref(Array(bestSellersProducts.length).fill(''))

	// function updateSelectedValue(index, selectedValue) {
	// 	selectedValues.value[index] = selectedValue
	// }

	// function addToCart(productName, selectedOption) {
	// 	if (!selectedOption) {
	// 		toast.error('Selecione um tamanho.')
	// 		return
	// 	}

	// 	cartStore.incrementCartTotalItems()

	// 	toast.success(`${productName} foi adicionado ao carrinho.`)
	// }
</script>

<template>
	<div class="container">
		<div v-if="imageView">
			<img
				:src="`/images/banners/${categoryName}.jpg`"
				:alt="categoryName.replace('-', ' ')"
			/>
		</div>
		<button-component
			:on-click="() => $router.back()"
			btn-type="button"
			btn-class="mt-16 w-fit rounded-full p-8 pnb-bg-gray color-black hover:pnb-bg-yellow-2 hover:text-white"
			btn-title="Voltar"
		>
			<Icon name="ic:baseline-keyboard-arrow-left" class="wh-32" />
		</button-component>
		<h1 class="text-gray-4 text-28 fw-500 my-16 text-center capitalize">
			{{ categoryName.replaceAll('-', ' ') }}
		</h1>
		<loading-component :loading="loadingCategories"></loading-component>
		<div
			v-if="!loadingCategories && subcategories && subcategories.children"
			class="mx-auto grid grid-cols-2 gap-6 md:px-80"
		>
			<!-- to="/catalogs/" -->
			<nuxt-link
				v-for="(subcategory, index) of subcategories.children"
				:key="index"
				:to="`/catalogs/${normalizeText(subcategory.name).replace(
					'/',
					'-',
				)}`"
				class="fw-500 font-16 color-gray-5 b-1 b-gray b-solid b-rd-4 hover:pnb-bg-yellow-2 py-6 text-center hover:text-white"
			>
				{{ subcategory.name }}
			</nuxt-link>
		</div>

		<div
			v-if="!loadingCategories"
			class="mt-30 fw-500 font-16 color-gray-5 text-right"
		>
			<button
				type="button"
				class="position-relative wh-45 rounded-full bg-transparent"
				aria-label="Filter"
				@click.prevent="openModalFilter()"
			>
				<Icon
					name="ic:baseline-filter-alt"
					class="color-gray-4 wh-24 hover:color-gray-6"
				/>
			</button>
			<DropdownComponent
				v-model="selectedFilter"
				:options="optionFilterProducts"
				class="w-25%"
				@select="updateSelectedValue($event)"
			/>
			<!-- @change="handleFilterSelected" -->
			<!-- @option-selected="handleFilterSelected" @select="updateSelectedValue(optionFilterProducts, $event)"-->
		</div>

		<products-component
			:products="productsList"
			:loading="loadingProducts"
			:to="to"
			:from="from"
			:selectedFilter="selectedFilter"
			:optionalCatalogs="optionalCatalogs"
		/>

		<bestsellers-component
			:productsBestSeller="bestSellersProducts"
			:loading="loadingBestSellers"
		/>

		<modal-component
			v-show="showModalFilter"
			@close-modal="showModalFilter = false"
			class="z-50"
		>
			<template v-slot:body>
				<div class="px-15">
					<div class="fw-500 font-16 color-gray-5 grid text-left">
						Por preço:
						<!-- <slider :range="{min: 10, max: 50}" :options="{range: {min: 20, max: 40}}" v-model="sliderValue"> </slider> -->
						<div class="w-250 h-30 range-slider grid">
							<input
								@change="slider"
								v-model.number="minPrice"
								min="0"
								:max="maxPriceConf"
								step="1"
								type="range"
							/>
							<input
								@change="slider"
								v-model.number="maxPrice"
								min="0"
								:max="maxPriceConf"
								step="1"
								type="range"
							/>
							<!-- <svg width="100%" height="24">
								<line x1="4" y1="0" x2="300" y2="0" stroke="#444" stroke-width="2" stroke-dasharray="1 28"></line>
							</svg> -->
							<span hidden @change="slider" class="text-12">
								from
								<input
									class="w-60"
									v-model.number="minPrice"
									type="number"
									min="0"
									:max="maxPriceConf"
								/>
								to
								<input
									class="w-60"
									v-model.number="maxPrice"
									type="number"
									min="0"
									:max="maxPriceConf"
								/>
							</span>
						</div>

						<div class="mt-12 grid">
							{{ formatMoney(minPrice) }} -
							{{ formatMoney(maxPrice) }}
						</div>
					</div>
					<div
						class="fw-500 font-16 color-gray-5 mt-20 grid text-left"
					>
						Por tamanho:
						<div class="b-3 h-150">Lista tamanho aqui</div>
					</div>
				</div>
			</template>
		</modal-component>
	</div>
</template>
