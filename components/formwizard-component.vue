<script setup>
import { FormWizard, TabContent } from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import { useVtexStore } from '@/services/vtex-service'
const vtexStore = useVtexStore()
const toast = useToast()
const route = useRoute()

// import { mask } from 'vue-the-mask'
// import { useFuncUtil } from '@/utils/validCPF'
// const funcUtil = useFuncUtil()

// const props = defineProps({
//   title: {
//     type: String,
//     default: 'Awesome Wizard'
//   },
//   subtitle: {
//     type: String,
//     default: 'Split a complicated flow in multiple steps'
//   },
//   nextButtonText: {
//     type: String,
//     default: 'Next'
//   },
//   backButtonText: {
//     type: String,
//     default: 'Back'
//   },
//   finishButtonText: {
//     type: String,
//     default: 'Finish'
//   },
//   stepSize: {
//     type: String,
//     default: 'md',
//     validator: (value) => {
//       let acceptedValues = ['xs', 'sm', 'md', 'lg']
//       return acceptedValues.indexOf(value) !== -1
//     }
//   },
//   /***
//   *  Sets validation (on/off) for back button. By default back button ignores validation
//   */
//   validateOnBack: Boolean,
//   /***
//   * Applies to text, border and circle
//   */
//   color: {
//     type: String,
//     default: '#e74c3c' //circle, border and text color
//   },
//   /***
//   *  Is set to current step and text when beforeChange function fails 
//   */
//   errorColor: {
//     type: String,
//     default: '#8b0000'
//   },
//   /**
//   * Can take one of the following values: 'circle|square|tab`
//   */
//   shape: {
//     type: String,
//     default: 'circle'
//   },
//   /**
//   * name of the transition when transition between steps
//   */
//   transition: {
//     type: String,
//     default: '' //name of the transition when transition between steps
//   },
//   /***
//   * Index of the initial tab to display
//   */
//   startIndex: {
//     type: Number,
//     default: 0
//   }
// })

// function validarCPF() {
// 	funcUtil.validarCPF(cupomDiscount.value)
// }


// let currentCart = useState('currentCart', () => null)
// let cupomDiscount = useState('cupomDiscount', () => '')
// let loadingCart = useState('cupomloadingCartDiscount', () => false)
// let emailPersonal = useState('emailPersonal', () => '')
// let emailValid = useState('emailValid', () => '')
// let firstName = useState('firstName', () => 'Joseandeson')
// let lastName = useState('lastName', () => 'De Jesus')
// let cpf = useState('cpf', () => '01904749550')
// let telefone = useState('telefone', () => '71986272098')
// let stepDataPersonalValid = useState('stepDataPersonalValid', () => false)
// let stepGetCepValid = useState('stepGetCepValid', () => false)
// let stepEntregaValid = useState('stepEntregaValid', () => false)
// let stepFinalPay = useState('stepFinalPay', () => false)

// let cep = useState('cep', () => '42826740')
// let address = useState('address', () => '')

// let street = useState('street', () => '')
// let neighborhood = useState('neighborhood', () => '')
// let city = useState('city', () => '')
// let state = useState('state', () => '')

// let addressLocal = useState('addressLocal', () => null)
// let editAddress = useState('editAddress', () => '')
// let number = useState('number', () => '')
// let complement = useState('complement', () => '')
// let receiver = useState('receiver', () => '');
// let showModalDetailStore = useState('showModalDetailStore', () => false)

// async function getCart() {
// 	currentCart.value = await vtexStore.doGetCart('f8b4da78-c50d-4298-9c55-cc2d99f34c3d')
// }
// function removeFromCart(productName) {
// 	products = products.filter(product => product.name !== productName)

// 	toast.success(`${productName} foi removido do carrinho.`)
// }
// function home() {
// 	console.log(route)
// 	debugger
// 	if (!route.path !== '/') {
// 		route.path(`/`).catch(err => {
// 			console.log(err)
// 		})
// 	}
// }

onBeforeMount(async () => {
	try {
		vtexStore.loadingCart = true
		// currentCart.value = await vtexStore.getCart
		// currentCart.value = await vtexStore.doGetCart(
		// 	'f8b4da78-c50d-4298-9c55-cc2d99f34c3d'
		// )
		// currentCart.value = 
		console.log('currentCart cart antes ', vtexStore.cart)


		// vtexStore.cart ?? 
		await vtexStore.doGetCart('f8b4da78-c50d-4298-9c55-cc2d99f34c3d')
		// await vtexStore.doGetCart()

		console.log('currentCart cart', vtexStore.cart)
		vtexStore.loadingCart = false
	} catch { }
})

onUpdated(async () => {
	// currentCart.value = await vtexStore.getCart
})

function validStep(el) {
	return new Promise((resolve, reject) => {
		console.log('validStep', el)
		try {
			resolve(true)
		} catch (error) {
			reject(error)
		}
	})
}

function validarCheckoutUm() {
	return new Promise((resolve, reject) => {
		console.log('validarCheckoutUm')
		try {
			resolve(true)
		} catch (error) {
			reject('Oque?')
		}
	})
}

function onComplete() {
	toast.success('Finalizando pedido')
	const encoded = encodeURI('https://www.google.com.br')
	window.open(encoded, '_blank')
}

function setLoading() {
	console.log('setLoading')
}
function handleErrorMessage(errorMsg) {
	if (errorMsg) {
		toast.error(errorMsg)
	}
}

async function removeItemOnCart(product, index){
	debugger
	// if (product.quantity === 0) {
		vtexStore.loadingItens = true
		let qt = 0 // product.quantity //++
		let cart = await vtexStore.doAddUpdateProductCart({
				orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
				body: 	{ orderItems: [ {
											id: product.id,
											quantity: qt,
											seller: product.seller,
										}
									]
						}
			})
			vtexStore.loadingItens = false

		// currentCart.value = await vtexStore.getCart

		console.log('cart add ', vtexStore.cart)
		// product.quantity
	// }
}

async function decrementItemOnCart(product, index) {
	if (product.quantity > 1) {
		vtexStore.loadingItens = true
		let qt = product.quantity - 1 //++
		let cart = await vtexStore.doAddUpdateProductCart({
				orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
				body: 	{ orderItems: [ {
											id: product.id,
											quantity: qt,
											seller: product.seller,
										}
									]
						}
			})
			vtexStore.loadingItens = false

		// currentCart.value = await vtexStore.getCart

		// console.log('cart add ',cart)
		product.quantity--
	}
}

async function incrementItemOnCart(product, index) {
	vtexStore.loadingItens = true
	console.log('loadingItens', vtexStore.loadingItens)
	let qt = product.quantity + 1 //++
	let cart = await vtexStore.doAddUpdateProductCart({
			orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
			body: 	{ orderItems: [ {
										id: product.id,
										quantity: qt,
										seller: product.seller,
									}
								]
					}
		})

	// currentCart.value = await vtexStore.getCart
	vtexStore.loadingItens = false
	console.log('loadingItens', vtexStore.loadingItens)

	console.log('cart add ',cart)
	// product.quantity++
}

function goBack() {
	//   this.$refs.formWiz.prevTab()
	console.log('depois de montado')
}

async function validDataPersonal() {
	vtexStore.stepDataPersonalValid = (vtexStore.emailValid && vtexStore.firstName && vtexStore.lastName && vtexStore.cpf && vtexStore.telefone) ? true : false

	if (!vtexStore.stepDataPersonalValid) {
		toast.error('Precisa preencher os dados obrigatórios')
	} else {
		vtexStore.receiverName = `${vtexStore.firstName} ${vtexStore.lastName}`
		
		// currentCart.value = 
		await vtexStore.doAddClientProfile()
		// currentCart.value = await vtexStore.doAddClientProfile({
		// 		orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
		// 		body: 	{
		// 					email: emailValid.value,
		// 					firstName: firstName.value,
		// 					lastName: lastName.value,
		// 					documentType: "CPF",
		// 					document: cpf.value,
		// 					phone: telefone.value,
		// 				}
		// 	})
	}
}

async function GetAddressByCep(postalCode) {
	vtexStore.loadingGetAddress = true
debugger
	if(postalCode){
		let addressRet = await vtexStore.doGetAddressByCep(postalCode)
		
		if(addressRet){
			await vtexStore.doSimulationByCepAndCartVtex( { orderId: vtexStore.cart.orderFormId, cep: postalCode } )
			vtexStore.stepGetCepValid = true
		}else{
			toast.error('Nenhum endereço foi localizado com o cep informado')
		}
	}else{
		toast.error('Precisa informar um cep')
	}

	vtexStore.loadingGetAddress = false

	console.log('delivery ', vtexStore.delivery)
	console.log('pickup ', vtexStore.pickup)
	// let orderForm = vtexStore.cart.orderFormId
	// console.log('orderForm ', orderForm)
	// street = addressRet.street
	// neighborhood = addressRet.neighborhood
	// city = addressRet.city
	// state = addressRet.state

	//address.value = `${addressRet.street} - ${addressRet.neighborhood} - ${addressRet.city} - ${addressRet.state}`

	//return `${addressRet.street} - ${addressRet.neighborhood} - ${addressRet.city} - ${addressRet.state}`
}

async function validDelivery() {
	debugger
	if(vtexStore.number){
		// currentCart.value = 
		await vtexStore.doShippingDataVtex()
		//vtexStore.doGetCart('f8b4da78-c50d-4298-9c55-cc2d99f34c3d')
		
		vtexStore.stepGetCepValid = false, vtexStore.stepEntregaValid = true, vtexStore.stepFinalPay = true
	}else{
		toast.info('Precisa preencher os campos obrigatórios')
	}
}

function deliveryMethodSelected(methodSelect){
	console.log('methodSelect ', methodSelect)
}

async function openModalDetailStore() {
	vtexStore.showModalDetailStore = true
}
</script>

<template>
	<div>
		<form-wizard id="formWizard" ref="formWizard" step-size="sm" color="#0072ff" title subtitle shape="circle"
			@on-beforeTabPrev="goBack" @on-loading="setLoading" @on-complete="onComplete" @on-error="handleErrorMessage"
			:hide-buttons="true" next-button-text="Próximo" back-button-text="Voltar" finish-button-text="Finalizar">
			<tab-content title="Sacola">		
				<div v-show="vtexStore.loadingCart">
					<loading-component :loading="vtexStore.loadingCart"></loading-component>
				</div>
				<div v-show="!vtexStore.loadingCart">
					<!-- <div v-if="currentCart"> -->
						<div v-if="vtexStore.cart">
						<!-- class="grid grid-cols-2" -->
						<!-- <div class="w-100% lg:flex" v-if="currentCart.items"> -->
						<div class="w-100% lg:flex" v-if="vtexStore.cart.items">
							<div class="w-100% lg:w-70% mr-16">
									<div class="card-new-cart-title flex text-10 md:text-14">
										<div class="card-new-cart-product ">
											Produto
										</div>
										<div class="card-new-cart-price">Preço</div>
										<div class="card-new-cart-quantity">
											Quantidade
										</div>
										<div class="card-new-cart-subtotal">
											Subtotal
										</div>
										<div class="card-new-cart-action"></div>
									</div>
								<perfect-scrollbar class="h-60%">
									<div class="card-new-cart mb-10  text-10 mr-15 md:text-14" v-for="(
																		product, index
																	) of vtexStore.cart.items" :key="index">
																	<!-- ) of currentCart.items" :key="index"> -->
										<div class="flex">							
											<div class="card-new-cart-product">
												<img class="card-cart-image mr-8" :src="product.imageUrl" />
												<h1 class=" color-gray-5">
													{{ product.name }}
													
												</h1>

											</div>
											<div class="card-new-cart-price color-gray-5">
												{{ formatMoney(product.price / 100) }}
											</div>
											<div class="card-new-cart-quantity">
												<div v-show="!vtexStore.loadingItens" class="align-all-center mx-8">
													<button-component btn-type="button" btn-class="w-20 md:w-30"
														btn-title="Remover uma unidade" :on-click=" () => decrementItemOnCart( product, index, ) ">
														<Icon name="ic:outline-minus" class="color-gray w-20 md:w-30" />
													</button-component>
													<input-component input-type="text"
														input-class="w-20 md:w-30 color-gray-5 py-7 px-2 text-center text-10 md:text-14 font-500"
														:value="product.quantity" />
													<!-- @update:value="newQuantity => (product.quantity = newQuantity) " /> -->
													<button-component btn-type="button" btn-class="w-20 md:w-30"
														btn-title="Adicionar mais uma unidade" :on-click="
															() =>
																incrementItemOnCart(
																	product,
																	index,
																)
														">
														<Icon name="ic:outline-plus" class="color-gray w-20 md:w-30" />
													</button-component>
												</div>
												<div v-show="vtexStore.loadingItens">
													<loading-component :loading="vtexStore.loadingItens" loading-class="color-gray-4"></loading-component>
												</div>
											</div>
											<div class="card-new-cart-subtotal color-gray-5">
												{{
													formatMoney(
														product.priceDefinition.total /
														100,
													)
												}}
											</div>
											<div  class="card-new-cart-action">
												<button-component v-show="!vtexStore.loadingItens" btn-type="button"
													:btn-class="product.availability === 'cannotBeDelivered' ? 'card-new-cart-action-delete-hover hover:card-new-cart-action-delete-hover' : 'card-new-cart-action-delete hover:card-new-cart-action-delete-hover'"
													btn-title="Remover" :on-click="() => removeItemOnCart( product, index)">
													x
												</button-component>

												<!-- <span class="card-new-cart-action-delete hover:card-new-cart-action-delete-hover" 
														:on-click="() => removeItemOnCart( product, index)">
													x
												</span> -->
												<div v-show="vtexStore.loadingItens">
													<loading-component :loading="vtexStore.loadingItens" loading-class="color-gray-4"></loading-component>
												</div>
											</div>
										</div>
										<div v-show="product.availability === 'cannotBeDelivered'" class="text-red-800 text-center font-bold inline-block bg-gray-300 w-100%">
												PRODUTO INDISPONÍVEL PARA ESSE TIPO DE ENTREGA
											</div>
									</div>
								</perfect-scrollbar>
							</div>

							<div id="cardTotal" class="card-new-cart h-100% lg:w-30% mt-60 bg-white">
								<div hidden>
									<div class="text-13 color-gray-5 w-100%">
										Cupom de Desconto
									</div>
									<input-component input-type="tel"
										input-class="hover:testeFocus w-60% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 "
										input-placeholder="Código" :value="vtexStore.cupomDiscount" @update:value="
											newCupom =>
												(vtexStore.cupomDiscount = newCupom)
										" />
									<button-component btn-type="button"
										btn-class="b-rd-6 p-4 mb-15 w-30% h-40 bg-gray-4 pnb-bg-blue-1"
										btn-title="Calcular desconto" :on-click="() => { }">
										Calcular
									</button-component>
								</div>
								<!-- <div v-for="(total, index ) of currentCart.totalizers" :key="index"> -->
								<div v-for="(total, index ) of vtexStore.cart.totalizers" :key="index">
									
									<div class="my-3 flex">
										<div class="w-40%">{{ total.id === 'Items' ? 'Subtotal' : total.id === 'Shipping' ? 'Entrega' : '' }}</div>
										<div class="w-60% text-right">
											{{ total.value === 0 ? 'Grátis' : formatMoney(total.value / 100) }}
										</div>
									</div>
								</div>
								<div class="">
									<div class="my-3 flex">
										<div class="w-40% font-bold">Total</div>
										<div class="w-60% text-right font-bold">
											{{
												// formatMoney(currentCart.value / 100)
												formatMoney(vtexStore.cart.value / 100)
												
											}}
										</div>
									</div>
								</div>
								<button-component btn-type="button"
									btn-class="b-rd-6 p-4 mb-15 mt-40 w-100% h-50 bg-gray-4 pnb-bg-blue-1"
									btn-title="Finalizar compra" :on-click="() => { $refs.formWizard.nextTab() }">
									Finalizar Compra
									<!-- nextTab -->
								</button-component>
								<button-component btn-type="button"
									btn-class="b-rd-6 p-4 w-100% h-50 bg-gray-4 pnb-bg-blue-2 color-blue-6"
									btn-title="Continuar comprando" :on-click="() => $router.back()">
									Continuar Comprando
								</button-component>
							</div>
						</div>
					</div>
					<div v-else>
						<h1 class="text-32">Seu carrinho está vazio</h1>
						<p class="text-16 my-16">
							Adicione produtos ao carrinho para continuar a
							compra
						</p>
						<button-component btn-type="button"
							btn-class="rounded-4 p-16 w-30% bg-gray-4 color-white hover:pnb-bg-yellow-2 text-16 align-all-center mx-auto"
							btn-title="Adicionar ao carrinho" :on-click="() => $router.back()">
							<span>Ver mais produtos</span>
						</button-component>
					</div>
				</div>
			</tab-content>
			<tab-content title="Identificação" :prev-change="validStep" :before-change="validarCheckoutUm">
				<div v-show="!vtexStore.emailValid" class="flex lg:w-100% mx-auto" >
					<div class="w-100%">
						<div class="flex justify-center w-100%">
							<input-component input-type="text"
								input-class="focus:b-b-blue-6 focus:b-b-2 w-100% color-gray-5 py-7 px-2 text-16 b-b-2 "
								input-placeholder="seu@email.com" :value="vtexStore.emailPersonal" @update:value="newCupom => (vtexStore.emailPersonal = newCupom)" />
						</div>
						<div class="flex justify-center">
							<button-component btn-type="button"
								btn-class="b-rd-6 p-4 my-20 w-40% lg:w-20% h-50 bg-gray-4 pnb-bg-blue-1" btn-title="Finalizar compra"
								:on-click="
									() => {
										vtexStore.emailValid = vtexStore.emailPersonal
									}
								">
								Continuar
							</button-component>
						</div>
						<div class="flex justify-center text-left text-gray-600">
							<!-- <div class="w-30%"> </div> -->
							<div class=""> 

								<p class="font-700 text-gray-700">
								Usamos seu e-mail de forma 100% segura para:
							</p>
							<li class="pl-25">Identificar seu perfil</li>
							<li class="pl-25">
								Notificar sobre o andamento do seu pedido
							</li>
							<li class="pl-25">
								Gerenciar seu histórico de compras
							</li>
							<li class="pl-25">
								Acelerar o preenchimento de suas informações
							</li>
							</div>
							<!-- <div class="w-30%"> </div> -->

							
						</div>
						<div class="flex justify-center">
							<button-component btn-type="button"
								btn-class="b-rd-6 p-4 my-20 w-50% lg:w-30% h-50 bg-gray-4 pnb-bg-blue-2 color-blue-6"
								btn-title="Continuar comprando" :on-click="() => $router.back()">
								Continuar Comprando
							</button-component>
						</div>
					</div>
				</div>
				<!-- flex md:w-100% lg:w-100% mx-auto :class="{'flex-col': $device.isMobile}"-->
				<div v-show="vtexStore.emailValid" class="w-100% lg:flex" >
					<!-- PARTE DADOS PESSOAIS -->
					<div  class="card-cart h-100% p-5!" :class="vtexStore.stepDataPersonalValid ? 'bg-gray-200!' : ''">
						<h5 class="font-600 text-gray-700">Dados Pessoais</h5>
						<h5 v-show="!vtexStore.stepDataPersonalValid" class="text-gray-700">
							Solicitamos apenas as informações essenciais para a
							realização da compra
						</h5>
						<!-- <div v-show="stepDataPersonalValid" class="text-14">
							<p>{{ emailValid }}</p>
							<p>Nome: {{ firstName }} {{ lastName }}</p>
							<p>Telefone: {{ telefone }}</p>
						</div> -->
						<input-component v-show="!vtexStore.stepDataPersonalValid" input-type="text"
							input-class="hover:testeFocus w-100% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
							input-placeholder="seu@email.com" input-title="Email*" :value="vtexStore.emailValid"
							@update:value="newEmail => (vtexStore.emailValid = newEmail)" />
						<div v-show="!vtexStore.stepDataPersonalValid" class="w-100% flex">
							<input-component input-type="text"
								input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
								input-placeholder="Primeiro nome*" input-title="Primeiro nome*" :value="vtexStore.firstName"
								@update:value="
									newFirstName => (vtexStore.firstName = newFirstName)
								" />
							<input-component input-type="text"
								input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
								input-placeholder="lastName" input-title="Último nome*" :value="vtexStore.lastName" @update:value="
									newLastName => (vtexStore.lastName = newLastName)
								" />
						</div>
						<div v-show="!vtexStore.stepDataPersonalValid" class="w-100% flex">
							<input-component input-type="text"
								input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
								input-placeholder="cpf" input-title="CPF*" :value="vtexStore.cpf"
								@update:value="newCpf => (vtexStore.cpf = newCpf)" />
							<input-component input-type="text"
								input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
								input-placeholder="telefone" input-title="Telefone*" :value="vtexStore.telefone" @update:value="
									newTelefone => (vtexStore.telefone = newTelefone)
								" />
						</div>
						<div class="flex justify-center">
							<button-component v-show="!vtexStore.stepDataPersonalValid" btn-type="button"
								btn-class="b-rd-6 p-4 my-30 w-100% h-50 bg-gray-4 pnb-bg-blue-1 color-blue-3"
								btn-title="Continuar comprando" :on-click="() => { validDataPersonal() ? $refs.formWizard.nextTab() : null }">
								Ir para entrega
							</button-component>
							<a @click="() => vtexStore.stepDataPersonalValid = false" v-show="vtexStore.stepDataPersonalValid"
								class="cursor-pointer mt-10 text-14">Editar informações</a>
						</div>
					</div>

					<!-- PARTE ENTREGA -->
					<div  class="card-cart h-100% p-5! " :class="vtexStore.stepDataPersonalValid && !vtexStore.stepEntregaValid ? '' : 'bg-gray-200!'">
						<!-- <div class="position-relative">
							<h5 class="font-600 text-gray-700">Entrega</h5>
							<a v-show="stepEntregaValid" class="cursor-pointer position-absolute right--15 top--15 color-blue-500 text-12" @click="() => (stepEntregaValid = false, stepGetCepValid = true)"  > 
								<Icon name="ic:outline-edit" class="wh-24 " /> </a>
						</div> -->
						
						<div v-show="!vtexStore.stepDataPersonalValid">
							<h5 class="text-gray-700">
								Aguardando o preenchimento dos dados
							</h5>
						</div>
						<!-- <div v-show="stepDataPersonalValid" >
							<input-component v-show="!stepEntregaValid" input-type="text"
								input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5" input-placeholder="Cep"
								input-title="Cep*" :value="cep" @update:value="newCep => (GetAddressByCep(newCep))" />
								<a v-show="!stepEntregaValid" class="color-blue-500 text-12" target="_blank" href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" > <Icon name="ic:help" class="wh-24 " /> Não sei meu CEP</a>
								<loading-component :loading="vtexStore.loadingGetAddress"></loading-component>
								
							<div v-show="stepGetCepValid">
								<p class="my-8 font-600 text-gray-5">Forma de entrega</p>
								< !-- TODO: COLOCAR AS OPÇÕES DE ENTREGA -- >
								<div class="flex">
									<button-component v-show="vtexStore.delivery" btn-type="button"
										btn-class="b-rd-0 b-rd-l-6 p-4 my-30 w-100% h-50 bg-gray-4 pnb-bg-blue-1 color-blue-3"
										btn-title="Continuar comprando" :on-click="() => ( vtexStore.changeOptPickup = false, vtexStore.changeOptDelivery = true )">
										Entregar
									</button-component>
									<button-component v-show="vtexStore.pickup" btn-type="button"
										btn-class="b-rd-0 b-rd-r-6  p-4 my-30 w-100% h-50 pnb-bg-blue-2 color-blue-6"
										btn-title="Continuar comprando" :on-click="() => ( vtexStore.changeOptPickup =true, vtexStore.changeOptDelivery = false )">
										Retirar
									</button-component>
								</div>
								<div v-show="vtexStore.changeOptDelivery">
									<div class="flex b-2 py-20 b-color-yellow-4 align-all-center " v-show="vtexStore.delivery.length === 0">
										<Icon name="ic:outline-info" class="wh-20%  color-yellow-4 " />
										<p class="wh-90% ">
											<p>Seus itens estão indisponíveis para entrega.</p>
											<p>Você pode retirá-los em um ponto de retirada próximo.</p>
										</p>
									</div>
									<div v-show="vtexStore.delivery" class="flex">
										< !-- {{vtexStore.delivery}} -- >
										<div class="card-cart cursor-pointer" @click="vtexStore.deliverySelected(vtexStore.delivery)">
											<span>{{vtexStore.deliveryMethod}}</span> <span class="float-right">{{ formatMoney(vtexStore.delivery.price / 100)}}</span>
										</div>
									</div>
								</div>
								<div v-show="vtexStore.changeOptPickup">
									<div v-show="vtexStore.pickup.length > 0">
										< !-- @click="vtexStore.deliverySelected(pickup)"  -- >
										<div class="flex b-2 py-20 b-color-blue-6 cursor-pointer"  v-for="(pickup, index) in vtexStore.pickup" :key="index">
											<div class="flex w-100%" >
												<div class="pt-20">
													<Icon name="ic:place" class="wh-30  color-blue-6 " />
												</div>
												<div class="w-100%">
													<p class="cursor-pointer" @click="vtexStore.deliverySelected(pickup)">
														<p class="py-0 my-0">{{ pickup.pickupStoreInfo.friendlyName }}</p>
														<p class="py-0 my-0">{{ pickup.pickupStoreInfo.address.street }} {{ pickup.pickupStoreInfo.address.number }}</p>
														<p class="py-0 my-0">{{ pickup.pickupStoreInfo.address.neighborhood }} - {{ pickup.pickupStoreInfo.address.city }} - {{ pickup.pickupStoreInfo.address.state }}</p>
														<p class="py-0 my-0">{{`Grátis ${pickup.shippingEstimateAux} `}}</p>
													</p>
												</div>

											</div >
											<div class="w-100%">
												<p class="mx-auto cursor-pointer" @click="vtexStore.deliverySelected('Ver mais detalhes')">
													Ver mais detalhes
												</p>
											</div>
										</div>
									</div>
								</div>

								<div v-show="vtexStore.delivery">

									<p class="my-8 font-600 text-gray-5">Endereço de entrega</p>

									<div class="mb-7" v-show="!editAddress && address">
										<p class="my-8  font-12 text-gray-5">{{ address }}</p>
										<a @click="() => editAddress = true"
											class="cursor-pointer my-10 text-14 text-gray-5 ___">Alterar</a>
									</div>

									<input-component v-show="editAddress" input-type="text"
										input-class=" w-90% color-gray-5 pb-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="Endereço" :value="address" />

									<input-component input-type="text"
										input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="Número" input-title="Número*" :value="number" @update:value="
											newNumber => (number = newNumber)
										" />
									<input-component input-type="text"
										input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="Complemento" input-title="Complemento" :value="complement"
										@update:value="
											newComplement => (complement = newComplement)
										" />
									<input-component input-type="text"
										input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="telefone" input-title="Destinatário*" :value="receiver" @update:value="
											newReceiver => (receiver = newReceiver)
										" />

								</div>
								<button-component btn-type="button"
									btn-class="b-rd-6 p-4 my-30 w-100% h-50 bg-gray-4 pnb-bg-blue-1 color-blue-3"
									btn-title="Continuar comprando" 
									:on-click="() => { validDelivery(),  $refs.formWizard.nextTab()   }
									">
									< !-- ? $refs.formWizard.nextTab() : null -- >
								< !-- :on-click="() => { stepGetCepValid = false, stepEntregaValid = true, stepFinalPay = true, $refs.formWizard.nextTab()  -- >
									Ir para pagamento
								</button-component>

							</div>
							<div v-show="!stepGetCepValid && address && number">
								<p>{{ street }} {{ number }}</p>
								<p>{{ neighborhood }} - {{ city }} - {{ state }} </p>
								<p>{{ cep }} </p>
								<span>{{vtexStore.deliveryMethod}}</span> <span class="float-right">{{ formatMoney(vtexStore.delivery.price / 100)}}</span>
							</div>
						</div> -->

					</div>

					<div  class="card-cart h-100% p-5!">
						<h5 class="font-600 text-gray-700">Resumo do pedido</h5>
						<div v-show="vtexStore.loadingCart">
							<h5 class="text-gray-700">
								Aguardando o preenchimento dos dados
							</h5>
						</div>
						<div v-show="!vtexStore.loadingCart">
							<!-- <div v-if="currentCart" class=""> -->
							<div v-if="vtexStore.cart" class="">
								<!-- <div class="w-100%  color-gray-7 text-12 mb-20 " v-if="currentCart.items">-->
								<div class="w-100%  color-gray-7 text-12 mb-20 " v-if="vtexStore.cart.items">
									<div class="b-b-2">
											<perfect-scrollbar class="max-h-250">
											<!-- <div class="w-100% flex my-20 pr-20" v-for="( product, index ) of currentCart.items" -->
											<div class="w-100% flex my-20 pr-20" v-for="( product, index ) of vtexStore.cart.items"
												:key="index">
												<div class="">
													<img class="card-cart-image mr-8" :src="product.imageUrl" />
												</div>
												<div class="w-100%">
													<div class="">
														{{ product.name }}
													</div>
													<div v-show="product.availability === 'cannotBeDelivered'" class="">
														cannotBeDelivered
													</div>
													
													<div class="flex w-100%">
														<div class="w-50%">Quantidade {{ product.quantity }}</div>
														<div class="w-50% text-right">{{ formatMoney(product.price / 100) }}
														</div>
													</div>

												</div>
											</div>
										</perfect-scrollbar>
										</div>

									<!-- <div v-for="(total, index ) of currentCart.totalizers" :key="index"> -->
									<div v-for="(total, index ) of vtexStore.cart.totalizers" :key="index">
										<div class="my-3 flex">
											<div class="w-40%">{{ total.id === 'Items' ? 'Subtotal' : total.id ===
												'Shipping' ? 'Entrega' : '' }}</div>
											<!-- <div class="w-40%">{{ total.name }}</div> -->
											<div class="w-60% text-right">
												{{ total.value === 0 ? 'Grátis' : formatMoney(total.value / 100) }}
											</div>
										</div>
									</div>
									<div class="">
										<div class="my-3 flex">
											<div class="w-40% font-bold">Total</div>
											<div class="w-60% text-right font-bold">
												{{
													// formatMoney(currentCart.value / 100)
													formatMoney(vtexStore.cart.value / 100)
													
												}}
											</div>
										</div>
									</div>
									<!-- <div class="">
													<div class="my-3 flex">
														<div class="w-40%">Subtotal</div>
														<div class="w-60% text-right">
															{{
																formatMoney(currentCart.value / 100)
															}}
														</div>
													</div>
													<div class="my-3 flex">
														<div class="w-40% font-bold">Total</div>
														<div class="w-60% text-right font-bold">
															{{
																formatMoney(currentCart.value / 100)
															}}
														</div>
													</div>
												</div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</tab-content>
			<tab-content title="Entrega"> 
				<!-- class="flex md:w-100% lg:w-100% mx-auto" :class="{'flex-col': $device.isMobile}" -->
				<!-- <div v-show="!emailValid" class="flex md:w-100% lg:w-100% mx-auto" :class="{'flex-col': $device.isMobile}">
					<div class="">
						<div class="flex justify-center">
							<input-component input-type="text"
								input-class="hover:b-b-2 hover:b-b-blue-6 w-100% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 "
								input-placeholder="seu@email.com" :value="emailPersonal" @update:value="
									newCupom => (emailPersonal = newCupom)
								" />
						</div>
						<div class="flex justify-center">
							<button-component btn-type="button"
								btn-class="b-rd-6 p-4 my-20 w-20% h-50 bg-gray-4 pnb-bg-blue-1" btn-title="Finalizar compra"
								:on-click="
									() => {
										emailValid = emailPersonal
									}
								">
								Continuar
							</button-component>
						</div>
						<div class="flex justify-center text-left text-gray-600">
							<div class="w-30%"> </div>
							<div class="w-30%"> 

								<p class="font-700 text-gray-700">
								Usamos seu e-mail de forma 100% segura para:
							</p>
							<li class="pl-25">Identificar seu perfil</li>
							<li class="pl-25">
								Notificar sobre o andamento do seu pedido
							</li>
							<li class="pl-25">
								Gerenciar seu histórico de compras
							</li>
							<li class="pl-25">
								Acelerar o preenchimento de suas informações
							</li>
							</div>
							<div class="w-30%"> </div>

							
						</div>
						<div class="flex justify-center">
							<button-component btn-type="button"
								btn-class="b-rd-6 p-4 my-20 w-30% h-50 bg-gray-4 pnb-bg-blue-2 color-blue-6"
								btn-title="Continuar comprando" :on-click="() => $router.back()">
								Continuar Comprando
							</button-component>
						</div>
					</div>
				</div> -->
				<!-- class="flex md:w-100% lg:w-100% mx-auto" :class="{'flex-col': $device.isMobile}" -->
				<div v-show="vtexStore.emailValid" class="w-100% lg:flex">
					<div class="card-cart h-100% p-5!" :class="vtexStore.stepDataPersonalValid ? 'bg-gray-200!' : ''">
						<!-- <h5 class="font-600 text-gray-700">Dados Pessoais</h5>
						<h5 v-show="!stepDataPersonalValid" class="text-gray-700">
							Solicitamos apenas as informações essenciais para a
							realização da compra
						</h5> -->
						<div v-show="vtexStore.stepDataPersonalValid" class="text-14">
							<p class="py-0 my-0">{{ vtexStore.emailValid }}</p>
							<p class="py-0 my-0">Nome: {{ vtexStore.firstName }} {{ vtexStore.lastName }}</p>
							<p class="py-0 my-0">Telefone: {{ vtexStore.telefone }}</p>
						</div>
						<!-- <input-component v-show="!stepDataPersonalValid" input-type="text"
							input-class="hover:testeFocus w-100% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
							input-placeholder="seu@email.com" input-title="Email*" :value="emailValid"
							@update:value="newEmail => (emailValid = newEmail)" />
							<div v-show="!stepDataPersonalValid" class="w-100% flex">
								<input-component input-type="text"
									input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
									input-placeholder="Primeiro nome*" input-title="Primeiro nome*" :value="firstName"
									@update:value="
										newFirstName => (firstName = newFirstName)
									" />
								<input-component input-type="text"
									input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
									input-placeholder="lastName" input-title="Último nome*" :value="lastName" @update:value="
										newLastName => (lastName = newLastName)
									" />
							</div>
							<div v-show="!stepDataPersonalValid" class="w-100% flex">
								<input-component input-type="text"
									input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
									input-placeholder="cpf" input-title="CPF*" :value="cpf"
									@update:value="newCpf => (cpf = newCpf)" />
								<input-component input-type="text"
									input-class="hover:testeFocus w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
									input-placeholder="telefone" input-title="Telefone*" :value="telefone" @update:value="
										newTelefone => (telefone = newTelefone)
									" />
							</div>-->
							<div class="flex justify-center">
								<!-- <button-component v-show="!stepDataPersonalValid" btn-type="button"
									btn-class="b-rd-6 p-4 my-30 w-100% h-50 bg-gray-4 pnb-bg-blue-1 color-blue-3"
									btn-title="Continuar comprando" :on-click="() => validDataPersonal()">
									Ir para entrega
								</button-component> -->
								<a @click="() => { vtexStore.stepDataPersonalValid = false, $refs.formWizard.prevTab() }" v-show="vtexStore.stepDataPersonalValid"
									class="cursor-pointer mt-10 text-14">Editar informações</a>
									<!-- <a @click="() => stepDataPersonalValid = false" v-show="stepDataPersonalValid"
									class="cursor-pointer mt-10 text-14">Editar informações</a> -- >
									< !-- :on-click="() => { validDataPersonal(),  $refs.formWizard.nextTab() }" -->
							</div>
					</div>

					<div class="card-cart h-100% p-5! " :class="vtexStore.stepDataPersonalValid && !vtexStore.stepEntregaValid ? '' : 'bg-gray-200!'">
						<div class="position-relative">
							<h5 class="font-600 text-gray-700">Entrega</h5>
							<a v-show="vtexStore.stepEntregaValid" class="cursor-pointer position-absolute right--15 top--15 color-blue-500 text-12" 
							@click="() => (vtexStore.stepEntregaValid = false, vtexStore.stepGetCepValid = true, vtexStore.stepFinalPay = false)"  > 
								<Icon name="ic:outline-edit" class="wh-24 " /> </a>
						</div>
						
						<!-- , $refs.formWizard.prevTab()
							 <div v-show="!stepDataPersonalValid">
							<h5 class="text-gray-700">
								Aguardando o preenchimento dos dados
							</h5>
						</div> -->
						<div v-show="vtexStore.stepDataPersonalValid" >
							<input-component v-show="!vtexStore.stepEntregaValid" input-type="text"
								input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5" input-placeholder="Cep"
								input-title="Cep*" :value="vtexStore.postalCode" @update:value="newCep => (GetAddressByCep(newCep))" />
								<a v-show="!vtexStore.stepEntregaValid" class="color-blue-500 text-12" target="_blank" href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" > <Icon name="ic:help" class="wh-24 " /> Não sei meu CEP</a>
								<loading-component :loading="vtexStore.loadingGetAddress"></loading-component>
								
							<div v-show="vtexStore.stepGetCepValid">
								<p class="my-8 font-600 text-gray-5">Forma de entrega</p>
								<!-- TODO: COLOCAR AS OPÇÕES DE ENTREGA -->
								<div class="flex">
									<button-component v-show="vtexStore.delivery" btn-type="button"
										btn-class="b-rd-0 b-rd-l-6 p-4 my-30 w-100% h-50 bg-gray-4 pnb-bg-blue-1 color-blue-3"
										btn-title="Continuar comprando" :on-click="() => ( vtexStore.changeOptPickup = false, vtexStore.changeOptDelivery = true )">
										Entregar
									</button-component>
									<button-component v-show="vtexStore.pickup" btn-type="button"
										btn-class="b-rd-0 b-rd-r-6  p-4 my-30 w-100% h-50 pnb-bg-blue-2 color-blue-6"
										btn-title="Continuar comprando" :on-click="() => ( vtexStore.changeOptPickup =true, vtexStore.changeOptDelivery = false )">
										Retirar
									</button-component>
								</div>
								<div v-show="vtexStore.changeOptDelivery">
									<div class="flex b-2 py-20 b-color-yellow-4 align-all-center " v-show="vtexStore.delivery.length === 0">
										<Icon name="ic:outline-info" class="wh-20%  color-yellow-4 " />
										<p class="wh-90% ">
											<p>Seus itens estão indisponíveis para entrega.</p>
											<p>Você pode retirá-los em um ponto de retirada próximo.</p>
										</p>
									</div>
									<div v-show="vtexStore.delivery" class="flex">
										<!-- {{vtexStore.delivery}} -->
										<div class="card-cart cursor-pointer" @click="vtexStore.deliverySelected(vtexStore.delivery)">
											<span>{{vtexStore.deliveryMethod}}</span> <span class="float-right">{{ formatMoney(vtexStore.delivery.price / 100)}}</span>
										</div>
									</div>
								</div>
								<div v-show="vtexStore.changeOptPickup">
									<div v-show="vtexStore.pickup.length > 0">
										<div class="b-1 my-10 b-color-blue-6 " v-for="(pickup, index) in vtexStore.pickup" :key="index">
											<div class="flex w-100%" >
												<div class="pt-20">
													<Icon name="ic:place" class="wh-30  color-blue-6 " />
												</div>
												<div class="w-100%">
													<p class="cursor-pointer" @click="vtexStore.deliverySelected(pickup)">
														<p class="py-0 my-0">{{ pickup.pickupStoreInfo.friendlyName }}</p>
														<p class="py-0 my-0">{{ pickup.pickupStoreInfo.address.street }} {{ pickup.pickupStoreInfo.address.number }}</p>
														<p class="py-0 my-0">{{ pickup.pickupStoreInfo.address.neighborhood }} - {{ pickup.pickupStoreInfo.address.city }} - {{ pickup.pickupStoreInfo.address.state }}</p>
														<p class="py-0 my-0">{{`Grátis ${pickup.shippingEstimateAux} `}}</p>
													</p>
												</div>

											</div >
											<div class="w-100%">
												<p class="mx-auto cursor-pointer" @click="vtexStore.deliverySelected('Ver mais detalhes')">
													Ver mais detalhes
												</p>
											</div>
										</div>
										
									</div>
								</div>

								<div v-show="vtexStore.delivery && vtexStore.changeOptDelivery">

									<p class="my-8 font-600 text-gray-5">Endereço de entrega</p>

									<div class="mb-7" v-show="!vtexStore.editAddress && vtexStore.address">
										<p class="my-8  font-12 text-gray-5">{{ vtexStore.address }}</p>
										<a @click="() => { vtexStore.editAddress = true, vtexStore.stepFinalPay = false, $refs.formWizard.prevTab() }"
											class="cursor-pointer my-10 text-14 text-gray-5 ___">Alterar</a>
									</div>

									<input-component v-show="vtexStore.editAddress" input-type="text"
										input-class=" w-90% color-gray-5 pb-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="Endereço" :value="vtexStore.address" />

									<input-component input-type="text"
										input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="Número" input-title="Número*" :value="vtexStore.number" @update:value="
											newNumber => (vtexStore.number = newNumber)
										" />
									<input-component input-type="text"
										input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="Complemento" input-title="Complemento" :value="vtexStore.complement"
										@update:value="
											newComplement => (vtexStore.complement = newComplement)
										" />
									<input-component input-type="text"
										input-class=" w-90% color-gray-5 py-7 px-2 mr-10 text-16 b-b-2 my-5"
										input-placeholder="Destinatário" input-title="Destinatário*" :value="vtexStore.receiverName" @update:value="
											newReceiver => (vtexStore.receiverName = newReceiver)
										" />

								</div>
								<button-component btn-type="button"
									btn-class="b-rd-6 p-4 my-30 w-100% h-50 bg-gray-4 pnb-bg-blue-1 color-blue-3"
									btn-title="Continuar comprando" 
									:on-click="() => { validDelivery()  }
									">
									<!-- :on-click="() => ( stepGetCepValid = false, stepEntregaValid = true, stepFinalPay = true ) -->
									Ir para pagamento
								</button-component>
							</div>
							<div v-show="!vtexStore.stepGetCepValid && vtexStore.address && vtexStore.number">
								<p class="py-0 my-0">{{ vtexStore.street }} {{ vtexStore.number }}</p>
								<p class="py-0 my-0">{{ vtexStore.neighborhood }} - {{ vtexStore.city }} - {{ vtexStore.state }} </p>
								<p class="py-0 my-0">{{ vtexStore.postalCode }} </p>
								<span>{{vtexStore.deliveryMethod}}</span> <span class="float-right">{{ formatMoney(vtexStore.delivery.price / 100)}}</span>
							</div>
						</div>

					</div>

					<div class="card-cart h-100% p-5!">
						<h5 class="font-600 text-gray-700">Resumo do pedido</h5>
						<div v-show="vtexStore.loadingCart">
							<h5 class="text-gray-700">
								Aguardando o preenchimento dos dados
							</h5>
						</div>
						<div v-show="!vtexStore.loadingCart">
							<!-- <div v-if="currentCart" class=""> -->
							<div v-if="vtexStore.cart" class="">
								<!-- <div class="w-100%  color-gray-7 text-12 mb-20 " v-if="currentCart.items"> -->
								<div class="w-100%  color-gray-7 text-12 mb-20 " v-if="vtexStore.cart.items">
									<div class="b-b-2">
										<perfect-scrollbar class="max-h-250">
										<!-- <div class="w-100% flex my-20 pr-20" v-for="( product, index ) of currentCart.items" -->
										<div class="w-100% flex my-20 pr-20" v-for="( product, index ) of vtexStore.cart.items"
											:key="index">
											<div class="">
												<img class="card-cart-image mr-8" :src="product.imageUrl" />
											</div>
											<div class="w-100%">
												<div class="">
													{{ product.name }}
												</div>
												<div class="flex w-100%">
													<div class="w-50%">Quantidade {{ product.quantity }}</div>
													<div class="w-50% text-right">{{ formatMoney(product.price / 100) }}
													</div>
												</div>

											</div>
										</div>
									</perfect-scrollbar>
									</div>
									<!-- <div v-for="(total, index ) of currentCart.totalizers" :key="index"> -->
									<div v-for="(total, index ) of vtexStore.cart.totalizers" :key="index">
										<div class="my-3 flex">
											<div class="w-40%">{{ total.id === 'Items' ? 'Subtotal' : total.id ===
												'Shipping' ? 'Entrega' : '' }}</div>
											<!-- <div class="w-40%">{{ total.name }}</div> -->
											<div class="w-60% text-right">
												{{ total.value === 0 ? 'Grátis' : formatMoney(total.value / 100) }}
											</div>
										</div>
									</div>
									<div class="">
										<div class="my-3 flex">
											<div class="w-40% font-bold">Total</div>
											<div class="w-60% text-right font-bold">
												{{
													// formatMoney(currentCart.value / 100)
													formatMoney(vtexStore.cart.value / 100)

												}}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<button-component v-show="vtexStore.stepFinalPay" btn-type="button"
									btn-class="b-rd-6 p-4 my-30 w-100% h-50 bg-gray-4 pnb-bg-blue-1 color-blue-3"
									btn-title="Continuar comprando" :on-click="() => {  }">
									Finalizar Compra
								</button-component>
					</div>
				</div>
			</tab-content>
			<!-- <tab-content title="Confirmação"> R e s u m o do pedido </tab-content> -->

			<!-- <div slot="footer" scope="props"> -->
				<!-- {{ $refs.formWizard }} -->
				<!-- <button @click="props.prev()">Prev</button> -->
				<!-- <button>Cancel</button> -->
				<!-- <button class="w-40 bg-yellow-500" @click="$refs.formWizard.nextTab()">Next</button> -->
				<!-- <button>Cancel</button> -->
			<!-- </div> -->

			<!-- <template slot="footer" scope="props">
			<div class=wizard-footer-left>
				<wizard-button  v-if="props.activeTabIndex > 0 && !props.isLastStep" :style="props.fillButtonStyle">Previous</wizard-button>
				</div>
				<div class="wizard-footer-right">
				<wizard-button v-if="!props.isLastStep" @click.native="props.nextTab()" class="wizard-footer-right" :style="props.fillButtonStyle">Next</wizard-button>
				
				<wizard-button v-else @click.native="alert('Done')" class="wizard-footer-right finish-button" :style="props.fillButtonStyle">{{props.isLastStep ? 'Done' : 'Next'}}</wizard-button>
				</div>
			
			</template> -->
		</form-wizard>
	</div>
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
</template>
