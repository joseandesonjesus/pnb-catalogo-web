import {defineStore} from 'pinia'

const toast = useToast()
const apiUse = useApi()

export const useVtexStore = defineStore('vtex', {
	state() {
		return {
			loadingCart: false,
			loadingItens: false,
			loadingGetAddress: false,
			changeOptDelivery: true,
			changeOptPickup: false,
			deliveryMethod: null,
			deliverySelected: null,
			// deliveryMethodSelected: null,
			logisticsInfo: [],
			selectedAddresses: [],
			shippingData: null,


			categories: null,
			address: null,

			firstName: null,
			lastName: null,
			cpf: null,
			telefone: null,

			receiverName: null, //() => { `${this.firstName} ${this.lastName}` },

			postalCode: null,
			street: null,
			number: null,
			complement: null,
			neighborhood: null,
			city: null,
			state: null,
			country: null,
			
			cart: null,
			totalItems: 0,
			simulationCart: null,
			optionCategory: null,
			delivery: [],
			pickup: [],
			collectionCategorys: [],
			subCollectionCategorys: [],
			optionalCatalogsFromTo: [
				{
					name: 'Moda Feminina',
					imageName: 'moda-feminina.png',
				},
				{
					name: 'Oportunidades',
					imageName: 'oportunidades.png',
				},
				{
					name: 'Moda Masculina',
					imageName: 'moda-masculina.png',
				},
				{
					name: 'Moda Infantil',
					imageName: 'moda-infantil.png',
				},
				{
					name: 'Acessórios',
					imageName: 'acessorios.png',
				},
				{
					name: 'Casa',
					imageName: 'casa.png',
				},
				{
					name: 'Eletrônicos',
					imageName: 'eletronicos.png',
				},
				{
					name: 'Mundo Disney',
					imageName: 'mundo-disney.png',
				},
				{
					name: 'Jequiti',
					imageName: 'beleza.png',
				},
				{
					name: 'Beleza',
					imageName: 'beleza.png',
				},
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
			],
			listProductCategories: [],
			listProductBestSellers: [],
			listProduct: [],

			cupomDiscount: null,
			emailPersonal: null,
			emailValid: null,
			stepDataPersonalValid: false,
			stepGetCepValid: false,
			stepEntregaValid: false,
			stepFinalPay: false,
			editAddress: null,
			// receiver: null,
			showModalDetailStore: false,
			// [
			// 	{
			// 		id: 1,
			// 		name: 'Escova Secadora Soft Bec07R Britânia Bivolt Rose',
			// 		description:
			// 			'As calças leggings são modelos mais justinhos que vão da cintura até o tornozelo. Confeccionada em malha com elasticidade, a modelagem legging tem caimento justo, cós com elástico embutido lisa e preta. Uma peça perfeita para compor o look nos treinos e no dia a dia.',
			// 		size: 'p',
			// 		price: 249.99,
			// 		quantity: 1,
			// 		image: ['https://pernambucanasqa.vteximg.com.br/arquivos/ids/763103-55-55/Escova-Secadora-Soft-Bec07R-Britania-Bivolt-Rose.jpg?v=637829343589270000']
			// 	},
			// 	{
			// 		id: 2,
			// 		name: 'Calça Jeans Feminino Skinny Cintura Alta BASICA LISO Azul Medio 40',
			// 		description:
			// 			'As calças leggings são modelos mais justinhos que vão da cintura até o tornozelo. Confeccionada em malha com elasticidade, a modelagem legging tem caimento justo, cós com elástico embutido lisa e preta. Uma peça perfeita para compor o look nos treinos e no dia a dia.',
			// 		size: 'p',
			// 		price: 99.99,
			// 		quantity: 2,
			// 		image: ['https://pernambucanasqa.vteximg.com.br/arquivos/ids/326675-55-55/Calca-Jeans-Feminino-Skinny-Cintura-Alta-BASICA-LISO-Azul-Medio.jpg?v=637812446945530000']
			// 	},
			// ]
		}
	},
	actions: {
		async doGetCategories() {
			try {
				//await apiUse.get(`api/${route.VtexListCategory}`)
				let resp =  [
						{
							"id": 4,
							"parentId": "4",
							"name": "Acessórios",
							"hasChildren": true,
							"url": "acessorios",
							"children": [
								{
									"id": 82,
									"parentId": "4/82",
									"name": "Bolsas",
									"hasChildren": false,
									"url": "acessorios/bolsas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/82"
								},
								{
									"id": 83,
									"parentId": "4/83",
									"name": "Bonés e Chapéus",
									"hasChildren": false,
									"url": "acessorios/bones-e-chapeus",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/83"
								},
								{
									"id": 84,
									"parentId": "4/84",
									"name": "Cintos",
									"hasChildren": false,
									"url": "acessorios/cintos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/84"
								},
								{
									"id": 85,
									"parentId": "4/85",
									"name": "Copos e Garrafas",
									"hasChildren": false,
									"url": "acessorios/copos-e-garrafas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/85"
								},
								{
									"id": 86,
									"parentId": "4/86",
									"name": "Diversos",
									"hasChildren": false,
									"url": "acessorios/diversos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/86"
								},
								{
									"id": 87,
									"parentId": "4/87",
									"name": "Embalagens de presente",
									"hasChildren": false,
									"url": "acessorios/embalagens-de-presente",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/87"
								},
								{
									"id": 88,
									"parentId": "4/88",
									"name": "Mochilas",
									"hasChildren": false,
									"url": "acessorios/mochilas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/88"
								},
								{
									"id": 89,
									"parentId": "4/89",
									"name": "Relógios",
									"hasChildren": false,
									"url": "acessorios/relogios",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/89"
								},
								{
									"id": 90,
									"parentId": "4/90",
									"name": "Bijuterias",
									"hasChildren": true,
									"url": "acessorios/bijuterias",
									"children": [
										{
											"id": 91,
											"parentId": "4/90/91",
											"order": 0,
											"name": "Brincos",
											"icon": "",
											"url": "acessorios/bijuterias/brincos",
											"url_mobile": "pnbVarejo://vitrine/categoria/acessorios/bijuterias/brincos",
											"children": [],
											"searchParameters": "idCategory=4/90/91"
										},
										{
											"id": 92,
											"parentId": "4/90/92",
											"order": 0,
											"name": "Colares",
											"icon": "",
											"url": "acessorios/bijuterias/colares",
											"url_mobile": "pnbVarejo://vitrine/categoria/acessorios/bijuterias/colares",
											"children": [],
											"searchParameters": "idCategory=4/90/92"
										},
										{
											"id": 93,
											"parentId": "4/90/93",
											"order": 0,
											"name": "Conjuntos",
											"icon": "",
											"url": "acessorios/bijuterias/conjuntos",
											"url_mobile": "pnbVarejo://vitrine/categoria/acessorios/bijuterias/conjuntos",
											"children": [],
											"searchParameters": "idCategory=4/90/93"
										},
										{
											"id": 94,
											"parentId": "4/90/94",
											"order": 0,
											"name": "Pulseiras",
											"icon": "",
											"url": "acessorios/bijuterias/pulseiras",
											"url_mobile": "pnbVarejo://vitrine/categoria/acessorios/bijuterias/pulseiras",
											"children": [],
											"searchParameters": "idCategory=4/90/94"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/90"
								},
								{
									"id": 95,
									"parentId": "4/95",
									"name": "Óculos",
									"hasChildren": false,
									"url": "acessorios/oculos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=4/95"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": false
						},
						{
							"id": 7,
							"parentId": "7",
							"name": "Beleza",
							"hasChildren": true,
							"url": "beleza",
							"children": [
								{
									"id": 159,
									"parentId": "7/159",
									"name": "Maquiagem",
									"hasChildren": false,
									"url": "beleza/maquiagem",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/159"
								},
								{
									"id": 160,
									"parentId": "7/160",
									"name": "Kits",
									"hasChildren": false,
									"url": "beleza/kits",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/160"
								},
								{
									"id": 161,
									"parentId": "7/161",
									"name": "Fragrâncias",
									"hasChildren": false,
									"url": "beleza/fragrancias",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/161"
								},
								{
									"id": 162,
									"parentId": "7/162",
									"name": "Corpo e Banho",
									"hasChildren": false,
									"url": "beleza/corpo-e-banho",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/162"
								},
								{
									"id": 163,
									"parentId": "7/163",
									"name": "Acessórios de Beleza",
									"hasChildren": false,
									"url": "beleza/acessorios-de-beleza",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/163"
								},
								{
									"id": 164,
									"parentId": "7/164",
									"name": "Barbeador",
									"hasChildren": false,
									"url": "beleza/barbeador",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/164"
								},
								{
									"id": 166,
									"parentId": "7/166",
									"name": "Cortador de Cabelo",
									"hasChildren": false,
									"url": "beleza/cortador-de-cabelo",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/166"
								},
								{
									"id": 167,
									"parentId": "7/167",
									"name": "Depilador",
									"hasChildren": false,
									"url": "beleza/depilador",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/167"
								},
								{
									"id": 168,
									"parentId": "7/168",
									"name": "Modelador Eletro",
									"hasChildren": false,
									"url": "beleza/modelador-eletro",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/168"
								},
								{
									"id": 169,
									"parentId": "7/169",
									"name": "Prancha",
									"hasChildren": false,
									"url": "beleza/prancha",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/169"
								},
								{
									"id": 170,
									"parentId": "7/170",
									"name": "Secador",
									"hasChildren": false,
									"url": "beleza/secador",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/170"
								},
								{
									"id": 171,
									"parentId": "7/171",
									"name": "Kit de Cuidados Pessoais",
									"hasChildren": false,
									"url": "beleza/kit-de-cuidados-pessoais",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7/171"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": false
						},
						{
							"id": 5,
							"parentId": "5",
							"name": "Casa",
							"hasChildren": true,
							"url": "casa",
							"children": [
								{
									"id": 96,
									"parentId": "5/96",
									"name": "Cama",
									"hasChildren": true,
									"url": "casa/cama",
									"children": [
										{
											"id": 102,
											"parentId": "5/96/102",
											"order": 2,
											"name": "Jogo de Cama",
											"icon": "",
											"url": "casa/cama/jogo-de-cama",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/jogo-de-cama",
											"children": [],
											"searchParameters": "idCategory=5/96/102"
										},
										{
											"id": 103,
											"parentId": "5/96/103",
											"order": 2,
											"name": "Saia de Cama",
											"icon": "",
											"url": "casa/cama/saia-de-cama",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/saia-de-cama",
											"children": [],
											"searchParameters": "idCategory=5/96/103"
										},
										{
											"id": 104,
											"parentId": "5/96/104",
											"order": 2,
											"name": "Colcha e Kit Colcha",
											"icon": "",
											"url": "casa/cama/colcha-e-kit-colcha",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/colcha-e-kit-colcha",
											"children": [],
											"searchParameters": "idCategory=5/96/104"
										},
										{
											"id": 105,
											"parentId": "5/96/105",
											"order": 2,
											"name": "Edredom",
											"icon": "",
											"url": "casa/cama/edredom",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/edredom",
											"children": [],
											"searchParameters": "idCategory=5/96/105"
										},
										{
											"id": 106,
											"parentId": "5/96/106",
											"order": 2,
											"name": "Cobertores e Mantas",
											"icon": "",
											"url": "casa/cama/cobertores-e-mantas",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/cobertores-e-mantas",
											"children": [],
											"searchParameters": "idCategory=5/96/106"
										},
										{
											"id": 107,
											"parentId": "5/96/107",
											"order": 2,
											"name": "Lençol e Fronha",
											"icon": "",
											"url": "casa/cama/lencol-e-fronha",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/lencol-e-fronha",
											"children": [],
											"searchParameters": "idCategory=5/96/107"
										},
										{
											"id": 108,
											"parentId": "5/96/108",
											"order": 2,
											"name": "Travesseiros e Protetores",
											"icon": "",
											"url": "casa/cama/travesseiros-e-protetores",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/travesseiros-e-protetores",
											"children": [],
											"searchParameters": "idCategory=5/96/108"
										},
										{
											"id": 109,
											"parentId": "5/96/109",
											"order": 2,
											"name": "Porta Travesseiros",
											"icon": "",
											"url": "casa/cama/porta-travesseiros",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/cama/porta-travesseiros",
											"children": [],
											"searchParameters": "idCategory=5/96/109"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/96"
								},
								{
									"id": 97,
									"parentId": "5/97",
									"name": "Mesa",
									"hasChildren": true,
									"url": "casa/mesa",
									"children": [
										{
											"id": 110,
											"parentId": "5/97/110",
											"order": 3,
											"name": "Toalha de Mesa",
											"icon": "",
											"url": "casa/mesa/toalha-de-mesa",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/mesa/toalha-de-mesa",
											"children": [],
											"searchParameters": "idCategory=5/97/110"
										},
										{
											"id": 111,
											"parentId": "5/97/111",
											"order": 3,
											"name": "Pano de Copa",
											"icon": "",
											"url": "casa/mesa/pano-de-copa",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/mesa/pano-de-copa",
											"children": [],
											"searchParameters": "idCategory=5/97/111"
										},
										{
											"id": 112,
											"parentId": "5/97/112",
											"order": 3,
											"name": "Luva e Avental",
											"icon": "",
											"url": "casa/mesa/luva-e-avental",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/mesa/luva-e-avental",
											"children": [],
											"searchParameters": "idCategory=5/97/112"
										},
										{
											"id": 113,
											"parentId": "5/97/113",
											"order": 3,
											"name": "Copos e Canecas",
											"icon": "",
											"url": "casa/mesa/copos-e-canecas",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/mesa/copos-e-canecas",
											"children": [],
											"searchParameters": "idCategory=5/97/113"
										},
										{
											"id": 114,
											"parentId": "5/97/114",
											"order": 3,
											"name": "Kit Cozinha",
											"icon": "",
											"url": "casa/mesa/kit-cozinha",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/mesa/kit-cozinha",
											"children": [],
											"searchParameters": "idCategory=5/97/114"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/97"
								},
								{
									"id": 98,
									"parentId": "5/98",
									"name": "Decoração",
									"hasChildren": true,
									"url": "casa/decoracao",
									"children": [
										{
											"id": 115,
											"parentId": "5/98/115",
											"order": 4,
											"name": "Almofadas",
											"icon": "",
											"url": "casa/decoracao/almofadas",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/almofadas",
											"children": [],
											"searchParameters": "idCategory=5/98/115"
										},
										{
											"id": 116,
											"parentId": "5/98/116",
											"order": 4,
											"name": "Capa de Almofadas e Refil",
											"icon": "",
											"url": "casa/decoracao/capa-de-almofadas-e-refil",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/capa-de-almofadas-e-refil",
											"children": [],
											"searchParameters": "idCategory=5/98/116"
										},
										{
											"id": 117,
											"parentId": "5/98/117",
											"order": 4,
											"name": "Capa para Sofá",
											"icon": "",
											"url": "casa/decoracao/capa-para-sofa",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/capa-para-sofa",
											"children": [],
											"searchParameters": "idCategory=5/98/117"
										},
										{
											"id": 118,
											"parentId": "5/98/118",
											"order": 4,
											"name": "Manta para Sofá",
											"icon": "",
											"url": "casa/decoracao/manta-para-sofa",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/manta-para-sofa",
											"children": [],
											"searchParameters": "idCategory=5/98/118"
										},
										{
											"id": 119,
											"parentId": "5/98/119",
											"order": 4,
											"name": "Objetos de Decoração",
											"icon": "",
											"url": "casa/decoracao/objetos-de-decoracao",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/objetos-de-decoracao",
											"children": [],
											"searchParameters": "idCategory=5/98/119"
										},
										{
											"id": 121,
											"parentId": "5/98/121",
											"order": 4,
											"name": "Cortinas",
											"icon": "",
											"url": "casa/decoracao/cortinas",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/cortinas",
											"children": [],
											"searchParameters": "idCategory=5/98/121"
										},
										{
											"id": 123,
											"parentId": "5/98/123",
											"order": 4,
											"name": "Varão para Cortina",
											"icon": "",
											"url": "casa/decoracao/varao-para-cortina",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/varao-para-cortina",
											"children": [],
											"searchParameters": "idCategory=5/98/123"
										},
										{
											"id": 125,
											"parentId": "5/98/125",
											"order": 4,
											"name": "Cortina Blackout",
											"icon": "",
											"url": "casa/decoracao/cortina-blackout",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/decoracao/cortina-blackout",
											"children": [],
											"searchParameters": "idCategory=5/98/125"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/98"
								},
								{
									"id": 99,
									"parentId": "5/99",
									"name": "Tapetes",
									"hasChildren": false,
									"url": "casa/tapetes",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/99"
								},
								{
									"id": 100,
									"parentId": "5/100",
									"name": "Banho",
									"hasChildren": true,
									"url": "casa/banho",
									"children": [
										{
											"id": 128,
											"parentId": "5/100/128",
											"order": 5,
											"name": "Toalhas de Banho",
											"icon": "",
											"url": "casa/banho/toalhas-de-banho",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/banho/toalhas-de-banho",
											"children": [],
											"searchParameters": "idCategory=5/100/128"
										},
										{
											"id": 129,
											"parentId": "5/100/129",
											"order": 5,
											"name": "Toalhas de Rosto",
											"icon": "",
											"url": "casa/banho/toalhas-de-rosto",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/banho/toalhas-de-rosto",
											"children": [],
											"searchParameters": "idCategory=5/100/129"
										},
										{
											"id": 130,
											"parentId": "5/100/130",
											"order": 5,
											"name": "Toalhas de Piso",
											"icon": "",
											"url": "casa/banho/toalhas-de-piso",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/banho/toalhas-de-piso",
											"children": [],
											"searchParameters": "idCategory=5/100/130"
										},
										{
											"id": 131,
											"parentId": "5/100/131",
											"order": 5,
											"name": "Toalhas de Lavabo",
											"icon": "",
											"url": "casa/banho/toalhas-de-lavabo",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/banho/toalhas-de-lavabo",
											"children": [],
											"searchParameters": "idCategory=5/100/131"
										},
										{
											"id": 132,
											"parentId": "5/100/132",
											"order": 5,
											"name": "Toalhas de Praia",
											"icon": "",
											"url": "casa/banho/toalhas-de-praia",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/banho/toalhas-de-praia",
											"children": [],
											"searchParameters": "idCategory=5/100/132"
										},
										{
											"id": 133,
											"parentId": "5/100/133",
											"order": 5,
											"name": "Roupão",
											"icon": "",
											"url": "casa/banho/roupao",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/banho/roupao",
											"children": [],
											"searchParameters": "idCategory=5/100/133"
										},
										{
											"id": 134,
											"parentId": "5/100/134",
											"order": 5,
											"name": "Jogos de Banho",
											"icon": "",
											"url": "casa/banho/jogos-de-banho",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/banho/jogos-de-banho",
											"children": [],
											"searchParameters": "idCategory=5/100/134"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/100"
								},
								{
									"id": 101,
									"parentId": "5/101",
									"name": "Pet",
									"hasChildren": true,
									"url": "casa/pet",
									"children": [
										{
											"id": 135,
											"parentId": "5/101/135",
											"order": 6,
											"name": "Acessórios",
											"icon": "",
											"url": "casa/pet/acessorios",
											"url_mobile": "pnbVarejo://vitrine/categoria/casa/pet/acessorios",
											"children": [],
											"searchParameters": "idCategory=5/101/135"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/101"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": false
						},
						{
							"id": 6,
							"parentId": "6",
							"name": "Eletrônicos",
							"hasChildren": true,
							"url": "eletronicos",
							"children": [
								{
									"id": 139,
									"parentId": "6/139",
									"name": "Eletroportáteis",
									"hasChildren": true,
									"url": "eletronicos/eletroportateis",
									"children": [
										{
											"id": 126,
											"parentId": "6/139/126",
											"order": 3,
											"name": "Ferramentas",
											"icon": "",
											"url": "eletronicos/eletroportateis/ferramentas",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/ferramentas",
											"children": [],
											"searchParameters": "idCategory=6/139/126"
										},
										{
											"id": 127,
											"parentId": "6/139/127",
											"order": 3,
											"name": "Máquina de Costura",
											"icon": "",
											"url": "eletronicos/eletroportateis/maquina-de-costura",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/maquina-de-costura",
											"children": [],
											"searchParameters": "idCategory=6/139/127"
										},
										{
											"id": 140,
											"parentId": "6/139/140",
											"order": 3,
											"name": "Batedeira",
											"icon": "",
											"url": "eletronicos/eletroportateis/batedeira",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/batedeira",
											"children": [],
											"searchParameters": "idCategory=6/139/140"
										},
										{
											"id": 141,
											"parentId": "6/139/141",
											"order": 3,
											"name": "Cafeteira",
											"icon": "",
											"url": "eletronicos/eletroportateis/cafeteira",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/cafeteira",
											"children": [],
											"searchParameters": "idCategory=6/139/141"
										},
										{
											"id": 142,
											"parentId": "6/139/142",
											"order": 3,
											"name": "Churrasqueira Elétrica",
											"icon": "",
											"url": "eletronicos/eletroportateis/churrasqueira-eletrica",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/churrasqueira-eletrica",
											"children": [],
											"searchParameters": "idCategory=6/139/142"
										},
										{
											"id": 143,
											"parentId": "6/139/143",
											"order": 3,
											"name": "Espremedor",
											"icon": "",
											"url": "eletronicos/eletroportateis/espremedor",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/espremedor",
											"children": [],
											"searchParameters": "idCategory=6/139/143"
										},
										{
											"id": 144,
											"parentId": "6/139/144",
											"order": 3,
											"name": "Ferro de Passar",
											"icon": "",
											"url": "eletronicos/eletroportateis/ferro-de-passar",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/ferro-de-passar",
											"children": [],
											"searchParameters": "idCategory=6/139/144"
										},
										{
											"id": 145,
											"parentId": "6/139/145",
											"order": 3,
											"name": "Fritadeira",
											"icon": "",
											"url": "eletronicos/eletroportateis/fritadeira",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/fritadeira",
											"children": [],
											"searchParameters": "idCategory=6/139/145"
										},
										{
											"id": 146,
											"parentId": "6/139/146",
											"order": 3,
											"name": "Grill",
											"icon": "",
											"url": "eletronicos/eletroportateis/grill",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/grill",
											"children": [],
											"searchParameters": "idCategory=6/139/146"
										},
										{
											"id": 147,
											"parentId": "6/139/147",
											"order": 3,
											"name": "Kit Cozinha Eletro",
											"icon": "",
											"url": "eletronicos/eletroportateis/kit-cozinha-eletro",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/kit-cozinha-eletro",
											"children": [],
											"searchParameters": "idCategory=6/139/147"
										},
										{
											"id": 148,
											"parentId": "6/139/148",
											"order": 3,
											"name": "Liquidificador",
											"icon": "",
											"url": "eletronicos/eletroportateis/liquidificador",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/liquidificador",
											"children": [],
											"searchParameters": "idCategory=6/139/148"
										},
										{
											"id": 149,
											"parentId": "6/139/149",
											"order": 3,
											"name": "Pipoqueira",
											"icon": "",
											"url": "eletronicos/eletroportateis/pipoqueira",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/pipoqueira",
											"children": [],
											"searchParameters": "idCategory=6/139/149"
										},
										{
											"id": 150,
											"parentId": "6/139/150",
											"order": 3,
											"name": "Mixer",
											"icon": "",
											"url": "eletronicos/eletroportateis/mixer",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/mixer",
											"children": [],
											"searchParameters": "idCategory=6/139/150"
										},
										{
											"id": 151,
											"parentId": "6/139/151",
											"order": 3,
											"name": "Panela Elétrica",
											"icon": "",
											"url": "eletronicos/eletroportateis/panela-eletrica",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/panela-eletrica",
											"children": [],
											"searchParameters": "idCategory=6/139/151"
										},
										{
											"id": 152,
											"parentId": "6/139/152",
											"order": 3,
											"name": "Processador",
											"icon": "",
											"url": "eletronicos/eletroportateis/processador",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/processador",
											"children": [],
											"searchParameters": "idCategory=6/139/152"
										},
										{
											"id": 153,
											"parentId": "6/139/153",
											"order": 3,
											"name": "Sanduicheira",
											"icon": "",
											"url": "eletronicos/eletroportateis/sanduicheira",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/sanduicheira",
											"children": [],
											"searchParameters": "idCategory=6/139/153"
										},
										{
											"id": 154,
											"parentId": "6/139/154",
											"order": 3,
											"name": "Torradeira",
											"icon": "",
											"url": "eletronicos/eletroportateis/torradeira",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/torradeira",
											"children": [],
											"searchParameters": "idCategory=6/139/154"
										},
										{
											"id": 155,
											"parentId": "6/139/155",
											"order": 3,
											"name": "Aspirador",
											"icon": "",
											"url": "eletronicos/eletroportateis/aspirador",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/aspirador",
											"children": [],
											"searchParameters": "idCategory=6/139/155"
										},
										{
											"id": 156,
											"parentId": "6/139/156",
											"order": 3,
											"name": "Ventilador",
											"icon": "",
											"url": "eletronicos/eletroportateis/ventilador",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/ventilador",
											"children": [],
											"searchParameters": "idCategory=6/139/156"
										},
										{
											"id": 193,
											"parentId": "6/139/193",
											"order": 3,
											"name": "Forno Elétrico",
											"icon": "",
											"url": "eletronicos/eletroportateis/forno-eletrico",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/eletroportateis/forno-eletrico",
											"children": [],
											"searchParameters": "idCategory=6/139/193"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=6/139"
								},
								{
									"id": 157,
									"parentId": "6/157",
									"name": "Informática",
									"hasChildren": true,
									"url": "eletronicos/informatica",
									"children": [
										{
											"id": 182,
											"parentId": "6/157/182",
											"order": 4,
											"name": "Impressora",
											"icon": "",
											"url": "eletronicos/informatica/impressora",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/informatica/impressora",
											"children": [],
											"searchParameters": "idCategory=6/157/182"
										},
										{
											"id": 183,
											"parentId": "6/157/183",
											"order": 4,
											"name": "Acessórios",
											"icon": "",
											"url": "eletronicos/informatica/acessorios",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/informatica/acessorios",
											"children": [],
											"searchParameters": "idCategory=6/157/183"
										},
										{
											"id": 197,
											"parentId": "6/157/197",
											"order": 4,
											"name": "Notebook",
											"icon": "",
											"url": "eletronicos/informatica/notebook",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/informatica/notebook",
											"children": [],
											"searchParameters": "idCategory=6/157/197"
										},
										{
											"id": 198,
											"parentId": "6/157/198",
											"order": 4,
											"name": "Tablet",
											"icon": "",
											"url": "eletronicos/informatica/tablet",
											"url_mobile": "pnbVarejo://vitrine/categoria/eletronicos/informatica/tablet",
											"children": [],
											"searchParameters": "idCategory=6/157/198"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=6/157"
								},
								{
									"id": 158,
									"parentId": "6/158",
									"name": "Telefonia",
									"hasChildren": false,
									"url": "eletronicos/telefonia",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=6/158"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": false
						},
						{
							"id": 1,
							"parentId": "1",
							"name": "Moda Feminina",
							"hasChildren": true,
							"url": "moda-feminina",
							"children": [
								{
									"id": 8,
									"parentId": "1/8",
									"name": "Blusas",
									"hasChildren": false,
									"url": "moda-feminina/blusas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/8"
								},
								{
									"id": 9,
									"parentId": "1/9",
									"name": "Camisas",
									"hasChildren": false,
									"url": "moda-feminina/camisas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/9"
								},
								{
									"id": 10,
									"parentId": "1/10",
									"name": "Calças",
									"hasChildren": false,
									"url": "moda-feminina/calcas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/10"
								},
								{
									"id": 11,
									"parentId": "1/11",
									"name": "Shorts",
									"hasChildren": false,
									"url": "moda-feminina/shorts",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/11"
								},
								{
									"id": 12,
									"parentId": "1/12",
									"name": "Bermudas",
									"hasChildren": false,
									"url": "moda-feminina/bermudas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/12"
								},
								{
									"id": 13,
									"parentId": "1/13",
									"name": "Vestidos",
									"hasChildren": false,
									"url": "moda-feminina/vestidos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/13"
								},
								{
									"id": 14,
									"parentId": "1/14",
									"name": "Macacões",
									"hasChildren": false,
									"url": "moda-feminina/macacoes",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/14"
								},
								{
									"id": 15,
									"parentId": "1/15",
									"name": "Saias",
									"hasChildren": false,
									"url": "moda-feminina/saias",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/15"
								},
								{
									"id": 16,
									"parentId": "1/16",
									"name": "Top Fitness",
									"hasChildren": false,
									"url": "moda-feminina/top-fitness",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/16"
								},
								{
									"id": 17,
									"parentId": "1/17",
									"name": "Sutiã",
									"hasChildren": false,
									"url": "moda-feminina/sutia",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/17"
								},
								{
									"id": 18,
									"parentId": "1/18",
									"name": "Calcinha",
									"hasChildren": false,
									"url": "moda-feminina/calcinha",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/18"
								},
								{
									"id": 19,
									"parentId": "1/19",
									"name": "Body",
									"hasChildren": false,
									"url": "moda-feminina/body",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/19"
								},
								{
									"id": 20,
									"parentId": "1/20",
									"name": "Cintas e Modeladores",
									"hasChildren": false,
									"url": "moda-feminina/cintas-e-modeladores",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/20"
								},
								{
									"id": 21,
									"parentId": "1/21",
									"name": "Meias e Pantufas",
									"hasChildren": false,
									"url": "moda-feminina/meias-e-pantufas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/21"
								},
								{
									"id": 22,
									"parentId": "1/22",
									"name": "Short doll",
									"hasChildren": false,
									"url": "moda-feminina/short-doll",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/22"
								},
								{
									"id": 23,
									"parentId": "1/23",
									"name": "Camisolas",
									"hasChildren": false,
									"url": "moda-feminina/camisolas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/23"
								},
								{
									"id": 24,
									"parentId": "1/24",
									"name": "Pijamas",
									"hasChildren": false,
									"url": "moda-feminina/pijamas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/24"
								},
								{
									"id": 25,
									"parentId": "1/25",
									"name": "Jaquetas",
									"hasChildren": false,
									"url": "moda-feminina/jaquetas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/25"
								},
								{
									"id": 26,
									"parentId": "1/26",
									"name": "Jardineiras",
									"hasChildren": false,
									"url": "moda-feminina/jardineiras",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/26"
								},
								{
									"id": 27,
									"parentId": "1/27",
									"name": "Biquínis",
									"hasChildren": false,
									"url": "moda-feminina/biquinis",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/27"
								},
								{
									"id": 28,
									"parentId": "1/28",
									"name": "Maiôs",
									"hasChildren": false,
									"url": "moda-feminina/maios",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/28"
								},
								{
									"id": 29,
									"parentId": "1/29",
									"name": "Cangas",
									"hasChildren": false,
									"url": "moda-feminina/cangas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/29"
								},
								{
									"id": 30,
									"parentId": "1/30",
									"name": "Calçados",
									"hasChildren": true,
									"url": "moda-feminina/calcados",
									"children": [
										{
											"id": 31,
											"parentId": "1/30/31",
											"order": 4,
											"name": "Mules",
											"icon": "",
											"url": "moda-feminina/calcados/mules",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/mules",
											"children": [],
											"searchParameters": "idCategory=1/30/31"
										},
										{
											"id": 32,
											"parentId": "1/30/32",
											"order": 4,
											"name": "Rasteiras",
											"icon": "",
											"url": "moda-feminina/calcados/rasteiras",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/rasteiras",
											"children": [],
											"searchParameters": "idCategory=1/30/32"
										},
										{
											"id": 33,
											"parentId": "1/30/33",
											"order": 4,
											"name": "Sandálias",
											"icon": "",
											"url": "moda-feminina/calcados/sandalias",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/sandalias",
											"children": [],
											"searchParameters": "idCategory=1/30/33"
										},
										{
											"id": 34,
											"parentId": "1/30/34",
											"order": 4,
											"name": "Sapatilhas",
											"icon": "",
											"url": "moda-feminina/calcados/sapatilhas",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/sapatilhas",
											"children": [],
											"searchParameters": "idCategory=1/30/34"
										},
										{
											"id": 35,
											"parentId": "1/30/35",
											"order": 4,
											"name": "Sapatos",
											"icon": "",
											"url": "moda-feminina/calcados/sapatos",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/sapatos",
											"children": [],
											"searchParameters": "idCategory=1/30/35"
										},
										{
											"id": 36,
											"parentId": "1/30/36",
											"order": 4,
											"name": "Tênis",
											"icon": "",
											"url": "moda-feminina/calcados/tenis",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/tenis",
											"children": [],
											"searchParameters": "idCategory=1/30/36"
										},
										{
											"id": 37,
											"parentId": "1/30/37",
											"order": 4,
											"name": "Chinelos",
											"icon": "",
											"url": "moda-feminina/calcados/chinelos",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/chinelos",
											"children": [],
											"searchParameters": "idCategory=1/30/37"
										},
										{
											"id": 176,
											"parentId": "1/30/176",
											"order": 4,
											"name": "Tamancos",
											"icon": "",
											"url": "moda-feminina/calcados/tamancos",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/tamancos",
											"children": [],
											"searchParameters": "idCategory=1/30/176"
										},
										{
											"id": 177,
											"parentId": "1/30/177",
											"order": 4,
											"name": "Scarpin",
											"icon": "",
											"url": "moda-feminina/calcados/scarpin",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/scarpin",
											"children": [],
											"searchParameters": "idCategory=1/30/177"
										},
										{
											"id": 179,
											"parentId": "1/30/179",
											"order": 4,
											"name": "Botas",
											"icon": "",
											"url": "moda-feminina/calcados/botas",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-feminina/calcados/botas",
											"children": [],
											"searchParameters": "idCategory=1/30/179"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/30"
								},
								{
									"id": 172,
									"parentId": "1/172",
									"name": "Regatas",
									"hasChildren": false,
									"url": "moda-feminina/regatas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/172"
								},
								{
									"id": 187,
									"parentId": "1/187",
									"name": "Blusão",
									"hasChildren": false,
									"url": "moda-feminina/blusao",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/187"
								},
								{
									"id": 191,
									"parentId": "1/191",
									"name": "Coletes",
									"hasChildren": false,
									"url": "moda-feminina/coletes",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1/191"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": false
						},
						{
							"id": 3,
							"parentId": "3",
							"name": "Moda Infantil",
							"hasChildren": true,
							"url": "moda-infantil",
							"children": [
								{
									"id": 54,
									"parentId": "3/54",
									"name": "Blusas",
									"hasChildren": false,
									"url": "moda-infantil/blusas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/54"
								},
								{
									"id": 55,
									"parentId": "3/55",
									"name": "Camisas",
									"hasChildren": false,
									"url": "moda-infantil/camisas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/55"
								},
								{
									"id": 56,
									"parentId": "3/56",
									"name": "Calças",
									"hasChildren": false,
									"url": "moda-infantil/calcas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/56"
								},
								{
									"id": 57,
									"parentId": "3/57",
									"name": "Shorts",
									"hasChildren": false,
									"url": "moda-infantil/shorts",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/57"
								},
								{
									"id": 58,
									"parentId": "3/58",
									"name": "Bermudas",
									"hasChildren": false,
									"url": "moda-infantil/bermudas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/58"
								},
								{
									"id": 59,
									"parentId": "3/59",
									"name": "Vestidos",
									"hasChildren": false,
									"url": "moda-infantil/vestidos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/59"
								},
								{
									"id": 60,
									"parentId": "3/60",
									"name": "Macacões",
									"hasChildren": false,
									"url": "moda-infantil/macacoes",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/60"
								},
								{
									"id": 61,
									"parentId": "3/61",
									"name": "Saias",
									"hasChildren": false,
									"url": "moda-infantil/saias",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/61"
								},
								{
									"id": 62,
									"parentId": "3/62",
									"name": "Body",
									"hasChildren": false,
									"url": "moda-infantil/body",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/62"
								},
								{
									"id": 63,
									"parentId": "3/63",
									"name": "Jaquetas",
									"hasChildren": false,
									"url": "moda-infantil/jaquetas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/63"
								},
								{
									"id": 65,
									"parentId": "3/65",
									"name": "Biquínis",
									"hasChildren": false,
									"url": "moda-infantil/biquinis",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/65"
								},
								{
									"id": 66,
									"parentId": "3/66",
									"name": "Maiôs",
									"hasChildren": false,
									"url": "moda-infantil/maios",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/66"
								},
								{
									"id": 68,
									"parentId": "3/68",
									"name": "Calcinhas",
									"hasChildren": false,
									"url": "moda-infantil/calcinhas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/68"
								},
								{
									"id": 69,
									"parentId": "3/69",
									"name": "Pijamas",
									"hasChildren": false,
									"url": "moda-infantil/pijamas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/69"
								},
								{
									"id": 71,
									"parentId": "3/71",
									"name": "Pólos",
									"hasChildren": false,
									"url": "moda-infantil/polos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/71"
								},
								{
									"id": 72,
									"parentId": "3/72",
									"name": "Camisetas",
									"hasChildren": false,
									"url": "moda-infantil/camisetas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/72"
								},
								{
									"id": 73,
									"parentId": "3/73",
									"name": "Regatas",
									"hasChildren": false,
									"url": "moda-infantil/regatas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/73"
								},
								{
									"id": 74,
									"parentId": "3/74",
									"name": "Cuecas",
									"hasChildren": false,
									"url": "moda-infantil/cuecas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/74"
								},
								{
									"id": 75,
									"parentId": "3/75",
									"name": "Acessórios",
									"hasChildren": false,
									"url": "moda-infantil/acessorios",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/75"
								},
								{
									"id": 76,
									"parentId": "3/76",
									"name": "Brinquedos",
									"hasChildren": false,
									"url": "moda-infantil/brinquedos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/76"
								},
								{
									"id": 77,
									"parentId": "3/77",
									"name": "Calçados",
									"hasChildren": true,
									"url": "moda-infantil/calcados",
									"children": [
										{
											"id": 80,
											"parentId": "3/77/80",
											"order": 5,
											"name": "Tênis",
											"icon": "",
											"url": "moda-infantil/calcados/tenis",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-infantil/calcados/tenis",
											"children": [],
											"searchParameters": "idCategory=3/77/80"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/77"
								},
								{
									"id": 184,
									"parentId": "3/184",
									"name": "Conjuntos",
									"hasChildren": false,
									"url": "moda-infantil/conjuntos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/184"
								},
								{
									"id": 188,
									"parentId": "3/188",
									"name": "Camisolas",
									"hasChildren": false,
									"url": "moda-infantil/camisolas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/188"
								},
								{
									"id": 196,
									"parentId": "3/196",
									"name": "Meias",
									"hasChildren": false,
									"url": "moda-infantil/meias",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/196"
								},
								{
									"id": 201,
									"parentId": "3/201",
									"name": "Sungas",
									"hasChildren": false,
									"url": "moda-infantil/sungas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3/201"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": false
						},
						{
							"id": 2,
							"parentId": "2",
							"name": "Moda Masculina",
							"hasChildren": true,
							"url": "moda-masculina",
							"children": [
								{
									"id": 38,
									"parentId": "2/38",
									"name": "Suéteres",
									"hasChildren": false,
									"url": "moda-masculina/sueteres",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/38"
								},
								{
									"id": 39,
									"parentId": "2/39",
									"name": "Shorts",
									"hasChildren": false,
									"url": "moda-masculina/shorts",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/39"
								},
								{
									"id": 40,
									"parentId": "2/40",
									"name": "Bermudas",
									"hasChildren": false,
									"url": "moda-masculina/bermudas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/40"
								},
								{
									"id": 41,
									"parentId": "2/41",
									"name": "Pólos",
									"hasChildren": false,
									"url": "moda-masculina/polos",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/41"
								},
								{
									"id": 42,
									"parentId": "2/42",
									"name": "Camisetas",
									"hasChildren": false,
									"url": "moda-masculina/camisetas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/42"
								},
								{
									"id": 43,
									"parentId": "2/43",
									"name": "Camisas",
									"hasChildren": false,
									"url": "moda-masculina/camisas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/43"
								},
								{
									"id": 44,
									"parentId": "2/44",
									"name": "Calças",
									"hasChildren": false,
									"url": "moda-masculina/calcas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/44"
								},
								{
									"id": 45,
									"parentId": "2/45",
									"name": "Regatas",
									"hasChildren": false,
									"url": "moda-masculina/regatas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/45"
								},
								{
									"id": 46,
									"parentId": "2/46",
									"name": "Jaquetas",
									"hasChildren": false,
									"url": "moda-masculina/jaquetas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/46"
								},
								{
									"id": 47,
									"parentId": "2/47",
									"name": "Cuecas",
									"hasChildren": false,
									"url": "moda-masculina/cuecas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/47"
								},
								{
									"id": 48,
									"parentId": "2/48",
									"name": "Meias e Pantufas",
									"hasChildren": false,
									"url": "moda-masculina/meias-e-pantufas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/48"
								},
								{
									"id": 49,
									"parentId": "2/49",
									"name": "Pijamas",
									"hasChildren": false,
									"url": "moda-masculina/pijamas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/49"
								},
								{
									"id": 50,
									"parentId": "2/50",
									"name": "Calçados",
									"hasChildren": true,
									"url": "moda-masculina/calcados",
									"children": [
										{
											"id": 51,
											"parentId": "2/50/51",
											"order": 6,
											"name": "Chinelos",
											"icon": "",
											"url": "moda-masculina/calcados/chinelos",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-masculina/calcados/chinelos",
											"children": [],
											"searchParameters": "idCategory=2/50/51"
										},
										{
											"id": 52,
											"parentId": "2/50/52",
											"order": 6,
											"name": "Tênis",
											"icon": "",
											"url": "moda-masculina/calcados/tenis",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-masculina/calcados/tenis",
											"children": [],
											"searchParameters": "idCategory=2/50/52"
										},
										{
											"id": 53,
											"parentId": "2/50/53",
											"order": 6,
											"name": "Sapatênis",
											"icon": "",
											"url": "moda-masculina/calcados/sapatenis",
											"url_mobile": "pnbVarejo://vitrine/categoria/moda-masculina/calcados/sapatenis",
											"children": [],
											"searchParameters": "idCategory=2/50/53"
										}
									],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/50"
								},
								{
									"id": 175,
									"parentId": "2/175",
									"name": "Sungas",
									"hasChildren": false,
									"url": "moda-masculina/sungas",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/175"
								},
								{
									"id": 185,
									"parentId": "2/185",
									"name": "Blusão",
									"hasChildren": false,
									"url": "moda-masculina/blusao",
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2/185"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": false
						},
						{
							"id": 28,
							"parentId": "28",
							"name": "Mundo Disney",
							"hasChildren": false,
							"url": null,
							"children": [
								{
									"id": 12,
									"parentId": null,
									"name": "Disney",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=206"
								},
								{
									"id": 13,
									"parentId": null,
									"name": "Moda",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=183"
								},
								{
									"id": 14,
									"parentId": null,
									"name": "Acessório",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=186"
								},
								{
									"id": 15,
									"parentId": null,
									"name": "Brinquedos",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=184"
								},
								{
									"id": 16,
									"parentId": null,
									"name": "Casa e decoração",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=185"
								},
								{
									"id": 17,
									"parentId": null,
									"name": "Cama mesa e banho",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=187"
								},
								{
									"id": 18,
									"parentId": null,
									"name": "Mickey e amigos",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=190"
								},
								{
									"id": 19,
									"parentId": null,
									"name": "Princesas",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=191"
								},
								{
									"id": 20,
									"parentId": null,
									"name": "Frozen",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=192"
								},
								{
									"id": 21,
									"parentId": null,
									"name": "Marvel",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=193"
								},
								{
									"id": 22,
									"parentId": null,
									"name": "StarWars",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "productClusterIds=194"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": true
						},
						{
							"id": 29,
							"parentId": "29",
							"name": "Oportunidades",
							"hasChildren": false,
							"url": null,
							"children": [
								{
									"id": 23,
									"parentId": null,
									"name": "Beleza",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=7"
								},
								{
									"id": 24,
									"parentId": null,
									"name": "Cama",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/96"
								},
								{
									"id": 25,
									"parentId": null,
									"name": "Mesa",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/97"
								},
								{
									"id": 26,
									"parentId": null,
									"name": "Banho",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/100"
								},
								{
									"id": 27,
									"parentId": null,
									"name": "Decoração",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=5/98"
								},
								{
									"id": 28,
									"parentId": null,
									"name": "Moda Feminina",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=1"
								},
								{
									"id": 29,
									"parentId": null,
									"name": "Moda Masculina",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=2"
								},
								{
									"id": 30,
									"parentId": null,
									"name": "Moda Infantil",
									"hasChildren": false,
									"url": null,
									"children": [],
									"title": null,
									"metaTagDescription": null,
									"searchParameters": "idCategory=3"
								}
							],
							"title": null,
							"metaTagDescription": null,
							"customCategory": true
						}
							]
				
			
				let collectionCategory = []
				let objResp = Object.assign(resp)
				objResp.forEach(categorie => {
					let cat = this.optionalCatalogsFromTo.filter(
						x => x.name === categorie.name,
					)[0]
					// let objCat = {
					// 	id: categorie.id,
					// 	name: categorie.name,
					// 	imageName: 'imagem_indisponivel.jpg',
					// 	children: categorie.children,
					// }

					// categorie.children.length > -1
					// 	? categorie.children.forEach(childrenY => {
					// 			childrenY.parentId =
					// 				categorie.id + '/' + childrenY.id
					// 			childrenY.children.length > -1
					// 				? childrenY.children.forEach(childrenX => {
					// 						childrenX.parentId =
					// 							childrenY.parentId +
					// 							'/' +
					// 							childrenX.id
					// 				  })
					// 				: []
					// 	  })
					// 	: []
					// let childrenAux = categorie.children

					let objCat = {
						id: categorie.id,
						// parentId: categorie.id,
						name: categorie.name,
						imageName: 'imagem_indisponivel.jpg',
						// children: childrenAux,
						children: categorie.children,
					}
					if (cat) {
						objCat.imageName = cat.imageName
					}
					collectionCategory.push(objCat)
				})

				this.collectionCategorys = collectionCategory
				this.categories = objResp

				return this.categories
			} catch (error) {
				this.categories = null
				toast.error(`Erro ao consultar API Vtex!`)
				console.error('doGetCategories => ', error)
			}
		},
		async doSearchProduct(data) {
			try {
				let resp = await apiUse.get(
					`api/${route.VtexSearchProduct}idCategory=${data.idCategory}&from=${data.from}&to=${data.to}&eSortProduct=${data.eSortProduct}`,
				)
				return resp.data //this.cart
			} catch (error) {
				// this.cart = null
				toast.error(`Erro ao consultar API Vtex!`)
				console.error('doSearchProduct => ', error)
			}
		},
		async doAddUpdateProductCart(data){
			try {
				let resp = await apiUse.post(`api/${route.VtexAddUpdateProductCart}${data.orderId}`, data.body)
				this.cart = resp.data.response
				// this.totalItems = this.cart && this.cart.items ? this.cart.items.length : 0
				this.totalItems = this.cart && this.cart.items 
								? this.cart.items.map((prod) => prod.quantity).reduce((total, quantity) => total + quantity) 
								: 0

				
				console.log('this.totalItems', this.totalItems)
				console.log('this.cart', this.cart)
				return this.cart
			} catch (error) {
				// this.cart = null
				toast.error(`Erro ao consultar API Vtex!`)
				console.error('doGetCart => ', error)
			}
		},
		async doGetCart(data) {
			try {
				console.log('this.cart', this.cart)
				let _orderForm = data ? data : this.cart ? this.cart.orderFormId : this.cart
				let resp = await apiUse.get(`api/${route.VtexGetCart}${ _orderForm ? '?orderForm=' + _orderForm : ''}`)
				this.cart = resp.data
				// this.totalItems = this.cart && this.cart.items ? this.cart.items.length : 0
				this.totalItems = this.cart && this.cart.items && this.cart.items.length > 0
				? this.cart.items.map((prod) => prod.quantity).reduce((total, quantity) => total + quantity) 
				: 0
				console.log('this.totalItems', this.totalItems)
				return this.cart
			} catch (error) {
				// this.cart = null
				toast.error(`Erro ao consultar API Vtex!`)
				console.error('doGetCart => ', error)
			}
		},
		async doGetAddressByCep(data) {
			try {
				console.log('this.postalCode', this.postalCode)

				let resp = await apiUse.get(`api/${route.VtexGetAddressCep}cep=${data}`)

				if(resp.data.street){

					this.address = `${resp.data.street} - ${resp.data.neighborhood} - ${resp.data.city} - ${resp.data.state}` //resp.data
					this.postalCode = resp.data.postalCode
					this.street = resp.data.street
					this.neighborhood = resp.data.neighborhood
					this.city = resp.data.city
					this.state = resp.data.state
					this.country = resp.data.country
	
					return this.address
				}
				return false
				
			} catch (error) {
				this.address = null
				console.error('doGetAddressByCep => ', error)
				toast.error(`Erro ao consultar API Vtex!`)
			}
		},
		async doAddClientProfile(data) {
			debugger
			try {
					// let orderId: 'f8b4da78-c50d-4298-9c55-cc2d99f34c3d',
					// 		body: 	{
					// 					email: emailValid.value,
					// 					firstName: firstName.value,
					// 					lastName: lastName.value,
					// 					documentType: "CPF",
					// 					document: cpf.value,
					// 					phone: telefone.value,
					// 				}
					// 	})
				let resp = await apiUse.post(`api/${route.VtexAddClientProfile}${this.cart.orderFormId}`,{	email: this.emailValid,
																										firstName: this.firstName,
																										lastName: this.lastName,
																										documentType: "CPF",
																										document: this.cpf,
																										phone: this.telefone
																									})
													
				// let resp = await apiUse.post(`api/${route.VtexAddClientProfile}${data.orderId}`,data.body)
				this.simulationCart = resp.data
				return this.cart
			} catch (error) {
				// this.cart = null
				console.error('doAddClientProfile => ', error)
				toast.error(`Erro ao consultar API Vtex!`)
			}
		},
		async doSimulationByCepAndCartVtex(data) {
			try {
				let resp = await apiUse.post(
					`api/${route.VtexSimulationByCepAndCartVtex}${data.orderId}&cep=${data.cep}`,
				)

				this.cart.logisticsInfo = resp.data.logisticsInfo
				this.cart.paymentData = resp.data.paymentData

				await this.groupBy(resp.data.logisticsInfo)
				
				// this.cart = resp.data
				return this.cart
			} catch (error) {
				// this.cart = null
				toast.error(`Erro ao consultar API Vtex!`)
				console.error('doSimulationByCepAndCartVtex => ', error)
			}
		},
		async groupBy(array) {
			//retorna os slas para a interseccao
			const response = array.map((e) => {
			  return e.slas;
			})
	  
			const result = await this.interseccao(...response)

			console.log('res group ', result)

			this.delivery = result ? (result.filter(x => x.deliveryChannel === 'delivery'))
											.reduce(function (prev, current){
																			return prev.price < current.price ? prev : current;
																			})
									: []


			let periodo = this.delivery.shippingEstimate.replace(/[^a-zA-Z\s]/g,'')
			periodo = periodo === 'bd' ? 'dias úteis' : periodo === 'h' ? 'horas' : periodo === 'm' ? 'minutos' : periodo
			let numeroPeriodo = this.delivery.shippingEstimate.replace(/\D/gim,'')

			this.delivery.shippingEstimateAux = `Em até ${numeroPeriodo} ${periodo}`

			console.log('this.delivery ', this.delivery)

			this.deliveryMethod = `Em até ${numeroPeriodo} ${periodo}`

			this.pickup = result ? result.filter(x => x.deliveryChannel === 'pickup-in-point') : []

			this.pickup.forEach(element => {
				let periodo = element.shippingEstimate.replace(/[^a-zA-Z\s]/g,'')
				periodo = periodo === 'bd' ? 'dias úteis' : periodo === 'h' ? 'horas' : periodo === 'm' ? 'minutos' : periodo
				let numeroPeriodo = element.shippingEstimate.replace(/\D/gim,'')
				element.shippingEstimateAux = `Pronto em até ${numeroPeriodo} ${periodo}`
				// console.log('this.pickup ', this.pickup)
			})

			// console.log('this.delivery ', this.delivery)

			
			return result;
		},
		async interseccao(...arrays) {
			// pega somente os arrays não vazios
			let naoVazios = arrays.filter(array => array.length > 0);
			if (naoVazios.length == 0)
				return []; // se todos são vazios, não tem o que calcular
		
			let res = naoVazios.shift(); // começa com o primeiro array
			for (let array of naoVazios) { // calcula a intersecção com os restantes, de 2 em 2
		
				console.log(array, 'price')
				res = await this.interseccao2(res, array);
			}
			return res;
		},
		async interseccao2(array1, array2) {
			// let idsB = new Set(array2.map(b => b.id));
			let idsB = array2.map((b) => {
		
				return { id: b.id, price: b.price }
		
			});
			// return array1.filter(e => idsB.has(e.id));
			//retorna os itens comuns em todos pedidos
			return array1.filter((s, i) => {
		
				//retorna somente os comuns
				let resultado = idsB.find((e) => {
		
				if (e.id === s.id) {
					//somas os valores dos comuns
					s.price += e.price;
		
				}
				return e.id === s.id;
		
				})
		
				return resultado;
			});
	
	
		},
		async doShippingDataVtex(data) {
			try {
				debugger
				let resp = await apiUse.post(`api/${route.VtexShippingDataVtex}${this.cart.orderFormId}`, this.shippingData)
				this.cart = resp.data
				return this.cart
			} catch (error) {
				// this.cart = null
				toast.error(`Erro ao consultar API Vtex!`)
				console.error('doShippingDataVtex => ', error)
			}
		},
		async doMarketingDataVtex(data) {
			try {
				let resp = await apiUse.post(
					`api/${route.VtexMarketingDataVtex}${data.orderId}`,
					data.body,
				)
				this.cart = resp.data
				return this.cart
			} catch (error) {
				// this.cart = null
				toast.error(`Erro ao consultar API Vtex!`)
				console.error('doMarketingDataVtex => ', error)
			}
		},
		async doSetCart(data) {
			this.cart.push(data)
		},
		async deliveryMethodSelected(data){
			console.log('deliveryMethodSelected', data)
		},
		async deliverySelected(data){
			console.log('deliverySelected novo', data)
			console.log('cart ', this.cart)

			this.shippingData = null
			this.logisticsInfo = []

			this.cart.shippingData.logisticsInfo.forEach(li => {
				this.logisticsInfo.push({ itemIndex: li.itemIndex, selectedDeliveryChannel: data.deliveryChannel, selectedSla: data.id })
			});

			this.selectedAddresses = []

			this.selectedAddresses.push(
										{
											addressType: data.deliveryChannel ? 'residential' : 'search',
											receiverName: this.receiverName, // "Joseandeson De Jesus",
											// addressId: "5040287425005",
											// isDisposable: false,
											postalCode: this.postalCode, //"42826-740",
											city: this.city, //"Camaçari",
											state: this.state, //"BA",
											country: this.country, //"BRA",
											street: this.street, //"2ª Travessa Guaraema",
											number: this.number, //"7",
											neighborhood:this.neighborhood, //"Nova Abrantes (Abrantes)",
											complement: this.complement,
											reference: '',
											geoCoordinates: [ 0, 0 ] 

											//this.geoCoordinates, //[ -38.265625, -12.839200019836426 ],
											// addressQuery: ""
										},
			)

				// this.selectedAddresses = [
				// 	{
				// 		addressType: "residential",
				// 		receiverName: "Joseandeson De Jesus",
				// 		addressId: "5040287425005",
				// 		isDisposable: false,
				// 		postalCode: "42826-740",
				// 		city: "Camaçari",
				// 		state: "BA",
				// 		country: "BRA",
				// 		street: "2ª Travessa Guaraema",
				// 		number: "7",
				// 		neighborhood: "Nova Abrantes (Abrantes)",
				// 		complement: null,
				// 		reference: null,
				// 		geoCoordinates: [ -38.265625, -12.839200019836426 ],
				// 		addressQuery: ""
				// 	},
				// ]
				// this.logisticsInfo = [
				// 	{
				// 		itemIndex: 0,
				// 		addressId: "-1680532837668",
				// 		selectedSla: "pickup_pickup (18)",
				// 		selectedDeliveryChannel: "pickup-in-point"
				// 	},
				// ]

				debugger

				this.shippingData = {
										clearAddressIfPostalCodeNotFound: false,
													   selectedAddresses: this.selectedAddresses,
														   logisticsInfo: this.logisticsInfo						
									}

									debugger
				console.log('shippingData ', this.shippingData)


			
		},
		setSubCollectionCategorys(data) {
			this.subCollectionCategorys = data
		},
		setOptionCategory(data) {
			this.optionCategory = data
		},
		setListProductBestSellers(data) {
			this.listProductBestSellers = data
		},
		setListProductCategories(data) {
			this.listProductCategories = data
		},
		updateListProductCategories(data) {
			data.forEach(element => {
				this.listProductCategories.push(element)
			})
		},
		getProductBestSellersByProductId(val) {
			return this.listProductBestSellers.find(
				p => p.productReference === val,
			)
		},
		getProductByProductId(val) {
			let list = this.listProductCategories.find(
				p => p.productReference === val,
			)
			if (!list) {
				list = this.listProductBestSellers.find(
					p => p.productReference === val,
				)
			}
			return list
		},
	},
	getters: {
		getCategories() {
			return this.categories
		},
		getAddressByCep() {
			
			return this.address ?? JSON.stringfy(this.address)
		},
		getCart() {
			return this.cart
		},
		getSimulationCart() {
			return this.simulationCart
		},
		getCollectionCategory() {
			return this.collectionCategorys
		},
		getSubCollectionCategorys() {
			return this.subCollectionCategorys
		},
		getOptionCategory() {
			return this.optionCategory
		},
		getListProduct() {
			return this.listProduct
		},
		getListProductBestSellers() {
			return this.listProductBestSellers
		},
		getListProductCategories() {
			return this.listProductCategories
		},
		getTotalItems() {
			return this.totalItems
		},
	},
})
