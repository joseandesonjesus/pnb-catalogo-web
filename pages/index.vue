<template>
	<div class="container">
		<div class="align-all-center pnb-dark-blue flex-col text-center">
			<h1 class="fw-800 md:text-size-32 text-size-22">Catalogo Padrao</h1>
			<h2 class="md:text-size-28 text-size-20 fw-500 py-20 md:py-40">
				<span class="fw-800">Clique e confira</span> os produtos que
				selecionamos para você!
			</h2>
		</div>
		<div
			v-show="!loading"
			class="grid grid-cols-2 gap-24 md:grid-cols-3 lg:grid-cols-4"
		>
			<div
				v-for="(category, index) in optionalCatalogs"
				:key="index"
				class="position-relative cursor-pointer hover:brightness-75"
			>
				<NuxtLink
					:to="
						category.url
							? category.url
							: `/catalogs/${normalizeText(category.name)}`
					"
					:target="category.url ? '_blank' : '_self'"
				>
					<img
						:src="`/images/catalogos/${category.imageName}`"
						:alt="category.name"
						class="lg:h-400 md:h-350 h-250 w-auto"
					/>
					<p
						v-show="category.name"
						class="position-absolute bottom-25% left-50% translate--1/2 pnb-text-shadow md:text-size-16 text-size-14 ws-nowrap text-white"
					>
						{{ category.name }}
					</p>
				</NuxtLink>
			</div>
		</div>
		<loading-component :loading="loading"></loading-component>

		<div v-show="!loading">
			<h1
				class="pnb-dark-blue md:text-size-28 text-size-20 fw-500 py-20 md:py-40"
			>
				Veja também os catálogos a seguir 😉
			</h1>
			<div  class="grid grid-cols-2 gap-24 md:grid-cols-3 lg:grid-cols-4">
				<div
					v-for="(category, index) in mandatoryCatalogs"
					:key="index"
					class="position-relative cursor-pointer hover:brightness-75"
				>
					<NuxtLink
						:to="
							category.url
								? category.url
								: `/catalogs/${normalizeText(category.name)}`
						"
						:target="category.url ? '_blank' : '_self'"
					>
						<img
							:src="`/images/catalogos/${category.imageName}`"
							:alt="category.name"
							class="lg:h-400 md:h-350 h-250 w-auto"
						/>
						<p
							v-show="category.name"
							class="position-absolute bottom-25% left-50% translate--1/2 pnb-text-shadow md:text-size-16 text-size-14 ws-nowrap text-white"
						>
							{{ category.name }}
						</p>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {useVtexStore} from '@/services/vtex-service'
	const vtexStore = useVtexStore()
	const loading = ref(false)

	// const categories = ref(null)

	const optionalCatalogs = ref(null)
	const currentCart = ref(null)

	onBeforeMount(async () => {
		try {
			loading.value = true
			await vtexStore.doGetCategories()
			optionalCatalogs.value = vtexStore.getCollectionCategory
			currentCart.value = await vtexStore.doGetCart(
				'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
			)
		} catch (error) {
		} finally {
			loading.value = false
		}
		// await vtexStore.doGetCategories()
		// categories.value = vtexStore.getCategories
	})

	// const optionalCatalogs = ref([
	// 	{
	// 		name: 'Moda Feminina',
	// 		imageName: 'moda-feminina.png',
	// 	},
	// 	{
	// 		name: 'Oportunidades',
	// 		imageName: 'oportunidades.png',
	// 	},
	// 	{
	// 		name: 'Moda Masculina',
	// 		imageName: 'moda-masculina.png',
	// 	},
	// 	{
	// 		name: 'Moda Infantil',
	// 		imageName: 'moda-infantil.png',
	// 	},
	// 	{
	// 		name: 'Acessórios',
	// 		imageName: 'acessorios.png',
	// 	},
	// 	{
	// 		name: 'Casa',
	// 		imageName: 'casa.png',
	// 	},
	// 	{
	// 		name: 'Eletrônicos',
	// 		imageName: 'eletronicos.png',
	// 	},
	// 	{
	// 		name: 'Mundo Disney',
	// 		imageName: 'mundo-disney.png',
	// 	},
	// ])

	const mandatoryCatalogs = ref([
		// {
		// 	name: 'Jequiti',
		// 	imageName: 'beleza.png',
		// },
		{
			name: 'Jeans',
			imageName: 'jeans.png',
		},
		{
			name: 'Moda Íntima',
			imageName: 'moda-intima.png',
		},
		{
			name: 'Paolla Oliveira | Jeans',
			imageName: 'paola-oliveira-jeans.jpg',
			url: 'https://pernambucanas.zappag.com.br/catalog/visualizar?id=CatlogoPaolla&r=2502&l=11&c=',
		},
		{
			name: '',
			imageName: 'produto-financeiro.jpg',
			url: 'https://pernambucanas.zappag.com.br/revendedor/catalog/visualizar?id=produtosfinanceiros&r=2502&l=11&c=',
		},
	])
</script>
