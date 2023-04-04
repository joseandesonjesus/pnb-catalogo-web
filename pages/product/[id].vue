<template>
	<ClientOnly>
		<div class="container">
			<button-component
				:on-click="() => $router.back()"
				btn-type="button"
				btn-class="mt-16 w-fit rounded-full p-8 pnb-bg-gray color-black hover:pnb-bg-yellow-2 hover:text-white"
				btn-title="Voltar"
			>
				<Icon name="ic:baseline-keyboard-arrow-left" class="wh-32" />
			</button-component>
			<div class="flex" :class="{'flex-col': $device.isMobile}">
				<SwiperComponent
					:images="product.items[0].images[0]"
					:product-name="product.productName"
					class="z-0 basis-1/4 self-center"
				/>
				<div class="basis-3/4">
					<div class="text-center">
						<h1 class="color-gray-6 md:text-32 text-18 fw-500">
							{{ product.productName }}
						</h1>
						<h2 class="fw-400 text-14 color-gray-4">
							Código do produto: {{ product.productReference }}
						</h2>
						<p
							v-dompurify-html="product.description"
							class="mt-8 mb-16"
						/>
						<h3 class="text-40 fw-700 pnb-dark-blue">
							{{
								formatMoney(
									product.items[0].sellers[0].commertialOffer
										.listPrice,
								)
							}}
						</h3>
						<div>
							<ButtonComponent
								btn-type="button"
								btn-class="border-gray-5 text-gray-5 rounded-4 py-8 text-14  hover:bg-gray-6 hover:text-white hover:border-gray-6"
								btn-title="Adicionar ao carrinho"
								:on-click="() => showPriceDetail()"
							>
								Detalhe do preço
							</ButtonComponent>
							<div class="border-gray-3">
								<div class="mx-15% flex justify-between">
									<p>Produto</p>
									<span>{{
										formatMoney(
											product.items[0].sellers[0]
												.commertialOffer.listPrice,
										)
									}}</span>
								</div>
								<div
									v-show="display.priceDetail"
									class="mx-15% flex justify-between"
								>
									<div
										class="lg:w-40% w-80% rounded-4 mx-auto mt-16"
									>
										<p>
											Consultoria
											<Icon
												name="ic:baseline-info"
												class="wh-18"
											/>
										</p>
										<span>{{
											formatMoney(
												product.items[0].sellers[0]
													.commertialOffer
													.priceWithoutDiscount,
											)
										}}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="md:w-100% lg:w-40% mx-auto mt-16">
						<h2
							v-if="product.items.length > 1"
							class="text-16 text-black"
						>
							Tamanho
						</h2>
						<DropdownComponent
							v-if="product.items.length > 1"
							:options="product.items"
							class="w-100%"
							@select="updateSelectedValue(product, $event)"
						/>
						<!-- @select="
								updateSelectedValue(product.productId)
							" -->
						<ButtonComponent
							btn-type="button"
							btn-class="rounded-4 pnb-bg-dark-blue color-white hover:pnb-bg-yellow-2 w-100% mt-12 text-24"
							btn-title="Adicionar ao carrinho"
							:on-click="() => addToCart(product)"
						>
							Adicionar ao carrinho
						</ButtonComponent>
					</div>
				</div>
			</div>
			<!-- <div class="mt-48 flex justify-center">
				<ButtonComponent
					btn-type="button"
					btn-class="rounded-4 py-8 px-72 text-24 border-black hover:bg-gray-5 hover:text-white hover:border-gray-5"
					btn-title="Ver mais itens"
					:on-click="() => $router.back()"
				>
					Ver mais itens
				</ButtonComponent>
			</div> -->
		</div>
	</ClientOnly>
</template>

<script setup>
	import {useVtexStore} from '@/services/vtex-service'
	const vtexStore = useVtexStore()
	const route = useRoute()
	const toast = useToast()
	const cartStore = useCart()

	const productId = route.params.id

	const display = reactive({
		priceDetail: false,
	})

	function showPriceDetail() {
		display.priceDetail = !display.priceDetail
	}
	const product = vtexStore.getProductByProductId(productId)
	// const product = ref({
	// 	code: '773819000000',
	// 	name: 'Calcinha Biquíni Renda',
	// 	description:
	// 		'<p>Calcinha biquíni é o modelo preferido das brasileiras, garante conforto e beleza para qualquer ocasião de uso. <br />Modelo em renda. <br />Cor: Branco</p>',
	// 	price: {
	// 		final: 17.99,
	// 		product: 16.73,
	// 		comission: 1.26,
	// 	},
	// 	sizes: [
	// 		{
	// 			label: 'P',
	// 			value: 'p',
	// 			quantity: 10,
	// 		},
	// 		{
	// 			label: 'M',
	// 			value: 'm',
	// 			quantity: 3,
	// 		},
	// 		{
	// 			label: 'G',
	// 			value: 'g',
	// 			quantity: 5,
	// 		},
	// 		{
	// 			label: 'GG',
	// 			value: 'gg',
	// 			quantity: 2,
	// 		},
	// 	],
	// 	images: [
	// 		'/images/produtos/calcinha/1.jpg',
	// 		'/images/produtos/calcinha/2.jpg',
	// 	],
	// })

	const selectedOption = useState('selectedOption', '')

	// const handleOptionSelected = option => {
	// 	console.log('test select product')
	// 	selectedOption.value = option.name
	// }

	async function addToCart(product) {
		if (product.items.length > 1 && !selectedOption.value) {
			toast.error('Selecione um tamanho.')
			return
		}
		console.log('selectedOption.value ', selectedOption.value)
		// cartStore.incrementCartTotalItems()


		let id = ref(0)
		let sellerId = ref(0)

		if (product.items.length === 1) {
			id = product.items[0].itemId
			sellerId = product.items[0].sellers[0].sellerId //product.seller
			// vtexStore.doSetCart(product.items[0])
			// let cart = await vtexStore.doAddUpdateProductCart({
			// 	orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
			// 	body: 	{ orderItems: [ {
			// 								id: product.items[0].itemId,
			// 								quantity: 1,
			// 								seller: product.items[0].sellers[0].sellerId //product.seller,
			// 							}
			// 						]
			// 			}
			// })
			// cartStore.incrementCartTotalItems()
			// toast.success(
			// 	`Produto só tem um sortimento ${product.items[0].itemId}`,
			// )
			// return
		}else{
			id = selectedOption.value
			sellerId = product.items.find(x => x.itemId === selectedOption.value).sellers[0].sellerId
			//product.seller
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
			cartStore.incrementCartTotalItems()
		toast.success(`${product.productName} foi adicionado ao carrinho. `)
	}

	// async function incrementItemOnCart(product, index) {
	// 	loadingCart = true
	// 	let qt = product.quantity + 1 //++
	// 	let cart = await vtexStore.doAddUpdateProductCart({
	// 			orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
	// 			body: 	{ orderItems: [ {
	// 										id: product.id,
	// 										quantity: qt,
	// 										seller: product.seller,
	// 									}
	// 								]
	// 					}
	// 		})
	// 	loadingCart = false

	// 	currentCart.value = await vtexStore.getCart

	// 	console.log('cart add ',cart)
	// 	product.quantity++
	// }

	function updateSelectedValue(product, sort) {
		// selectedOption.value = val
		// console.log('val prod ', val)
		let itemsSort = product.items.find(p => p.name === sort)
		selectedOption.value = itemsSort.itemId
		console.log(`itemId: `, selectedOption.value)
		// console.log(`updateSelectedValue product comp, index: ${JSON.stringify(index)} event: ${JSON.stringify(val)}`)
	}
</script>

<style scoped></style>
