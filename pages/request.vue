<template>
	<div class="container">
		<input
			v-model="login"
			type="text"
			class="border-gray"
			placeholder="login"
		/>
		<input
			v-model="password"
			type="text"
			class="border-gray"
			placeholder="senha"
		/>
		<button @click="doLogin">Login</button>

		<div class="mt-48">
			<h1 class="text-36">loggedUser</h1>
			<p class="mt-16">user:</p>
			<pre>{{ user }}</pre>
			<p class="mt-16">apiStore.getUser:</p>
			<pre>{{ apiStore.getUser }}</pre>
		</div>

		<div class="mt-48">
			<h1 class="text-36">vtexStore</h1>
			<p class="mt-16">vtexStore.getCategories:</p>
			<pre>{{ vtexStore.getCategories }}</pre>
			<p class="mt-16">categories:</p>
			<pre>{{ categories }}</pre>
		</div>

		<div class="mt-48">
			<h1 class="text-36">Endereço por cep:</h1>
			<input
				v-model="cep"
				type="text"
				class="border-gray col-span-12"
				placeholder="Cep"
			/>
			<button @click="doGetAddressByCep(cep)">Buscar</button>
			<h1 class="text-26">Resultado Endereço por cep:</h1>

			<pre>{{ address }}</pre>
		</div>

		<div class="mt-48">
			<h1 class="text-36">Carrinho:</h1>
			<input
				v-model="orderId"
				type="text"
				class="border-gray col-span-12"
				placeholder="Order Id"
			/>
			<button @click="doGetCart(orderId)">Obter Carrinho</button>
			<h1 class="text-26">Resultado Carrinho:</h1>

			<pre>{{ cart }}</pre>
		</div>

		<div class="mt-48">
			<h1 class="text-36">Cliente no Carrinho:</h1>
			<input
				v-model="orderId"
				type="text"
				class="border-gray col-span-12"
				placeholder="Order Id"
			/>
			<input
				v-model="email"
				type="text"
				class="border-gray col-span-12"
				placeholder="E-Mail"
			/>
			<input
				v-model="firstName"
				type="text"
				class="border-gray col-span-12"
				placeholder="Primeiro nome"
			/>
			<input
				v-model="lastName"
				type="text"
				class="border-gray col-span-12"
				placeholder="Segundo nome"
			/>
			<input
				v-model="document"
				type="text"
				class="border-gray col-span-12"
				placeholder="CPF"
			/>
			<input
				v-model="phone"
				type="text"
				class="border-gray col-span-12"
				placeholder="Telefone"
			/>

			<button @click="doAddClientProfile">
				Adicionar Cliente ao carrinho
			</button>
			<h1 class="text-26">Resultado Carrinho:</h1>

			<pre>{{ cart }}</pre>
		</div>

		<div class="mt-48">
			<h1 class="text-36">Simular opção entrega do carrinho:</h1>
			<input
				v-model="orderId"
				type="text"
				class="border-gray col-span-12"
				placeholder="Order Id"
			/>

			<input
				v-model="cep"
				type="text"
				class="border-gray col-span-12"
				placeholder="Cep"
			/>

			<button @click="doSimulationByCepAndCartVtex">Simular</button>
			<h1 class="text-26">Resultado Simulação Carrinho:</h1>

			<pre>{{ simulationCart }}</pre>
		</div>

		<div class="mt-48">
			<h1 class="text-36">Opção de entrega no Carrinho:</h1>
			<input
				v-model="firstName"
				type="text"
				class="border-gray col-span-12"
				placeholder="Primeiro nome"
			/>
			<input
				v-model="lastName"
				type="text"
				class="border-gray col-span-12"
				placeholder="Segundo nome"
			/>
			<input
				v-model="orderId"
				type="text"
				class="border-gray col-span-12"
				placeholder="Order Id"
			/>
			<input
				v-model="number"
				type="text"
				class="border-gray col-span-12"
				placeholder=" Numero"
			/>
			<input
				v-model="complement"
				type="text"
				class="border-gray col-span-12"
				placeholder="Complemento"
			/>
			<input
				v-model="addressType"
				type="text"
				class="border-gray col-span-12"
				placeholder="Tipo entrega"
			/>

			<button @click="doGetAddress">Prepara Envio</button>
			<button @click="doShippingDataVtex">
				Adicionar Opção de entrega ao carrinho
			</button>
			<h1 class="text-26">Resultado Opção de entrega Carrinho:</h1>

			<pre>{{ address }}</pre>
		</div>

		<div class="mt-48">
			<h1 class="text-36">Marketing no Carrinho:</h1>

			<input
				v-model="orderId"
				type="text"
				class="border-gray col-span-12"
				placeholder="Order Id"
			/>
			<input
				v-model="utmSource"
				type="text"
				class="border-gray col-span-12"
				placeholder="Source"
			/>
			<input
				v-model="utmCampaign"
				type="text"
				class="border-gray col-span-12"
				placeholder="Campaign"
			/>
			<input
				v-model="utmMedium"
				type="text"
				class="border-gray col-span-12"
				placeholder="Medium"
			/>

			<button @click="doMarketingDataVtex">
				Adicionar marketing ao carrinho
			</button>
			<h1 class="text-26">Resultado marketing Carrinho:</h1>

			<pre>{{ cart }}</pre>
		</div>
	</div>
</template>

<script setup>
	import {useApiStore} from '@/services/api-service'
	import {useVtexStore} from '@/services/vtex-service'

	const apiStore = useApiStore()
	const vtexStore = useVtexStore()

	// LOGIN API
	const login = ref(null)
	const password = ref(null)
	const user = ref(null)

	async function doLogin() {
		await apiStore.doPostUser({
			login_Usuario: login.value,
			senha_Usuario_Sem_Cripto: password.value,
		})

		user.value = apiStore.getUser
	}

	// VTEX API
	const categories = ref(null)
	const cep = ref('42826740')
	const address = ref(null)

	const cart = ref(null)
	const simulationCart = ref(null)
	const orderId = ref('9479dd49e4c7d22de1c26dcc663a98e3c14b00c3')
	const email = ref(null)
	const firstName = ref('Joseandeson')
	const lastName = ref('Jesus')
	const document = ref(null)
	const phone = ref(null)

	const number = ref('8')
	const complement = ref('Casa 7')
	const addressType = ref('Residential')

	const utmSource = ref('Source')
	const utmCampaign = ref('Campaign')
	const utmMedium = ref('Medium')

	onBeforeMount(async () => {
		categories.value = await vtexStore.doGetCategories()
		// await vtexStore.doGetCategories()
		// categories.value = vtexStore.getCategories
	})

	async function doGetAddressByCep(data) {
		address.value = await vtexStore.doGetAddressByCep(data)
	}
	async function doGetCart(data) {
		cart.value = await vtexStore.doGetCart(data)
	}
	async function doAddClientProfile() {
		cart.value = await vtexStore.doAddClientProfile({
			orderId: orderId.value,
			body: {
				email: email.value,
				firstName: firstName.value,
				lastName: lastName.value,
				documentType: 'cpf',
				document: document.value,
				phone: phone.value,
			},
		})
	}
	async function doSimulationByCepAndCartVtex() {
		simulationCart.value = await vtexStore.doSimulationByCepAndCartVtex({
			orderId: orderId.value,
			cep: cep.value,
		})
	}
	async function doShippingDataVtex() {
		cart.value = await vtexStore.doShippingDataVtex({
			orderId: orderId.value,
			body: {
				email: email.value,
				firstName: firstName.value,
				lastName: lastName.value,
				documentType: 'cpf',
				document: document.value,
				phone: phone.value,
			},
		})
	}
	function doGetAddress() {
		address.value.addressType = addressType.value
		address.value.number = number.value
		address.value.complement = complement.value
		address.value.complement = complement.value
		address.value.receiverName = `${firstName.value} ${lastName.value}`

		// const postalCode = cep.value
	}
	async function doMarketingDataVtex() {
		cart.value = await vtexStore.doMarketingDataVtex({
			orderId: orderId.value,
			body: {
				utmSource: utmSource.value,
				utmCampaign: utmCampaign.value,
				utmMedium: utmMedium.value,
			},
		})
	}
</script>
