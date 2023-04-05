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

			firstName: 'Primeiro nome',
			lastName: 'Segundo nome',
			cpf: 'CPF',
			telefone: 'Telefone',

			receiverName: 'Primeiro nome e Segundo nome', //() => { `${this.firstName} ${this.lastName}` },

			postalCode: '01301100',
			street: 'Rua da Consolação',
			number: '3001',
			complement: '',
			neighborhood: 'Consolação',
			city: 'São Paulo',
			state: 'SP',
			country: 'BRA',
			
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
			listProductCategories:  [
					{
						"productId": "1076",
						"productName": "X-Games Relógio 5 Atm Preto Plástico",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "x-games-relogio-5-atm-preto-plastico921623000000",
						"productReference": "921623",
						"productReferenceCode": "921623",
						"categoryId": "89",
						"productTitle": "X-Games Relógio 5 Atm Preto Plástico",
						"metaTagDescription": "X-Games Relógio 5 Atm Preto Plástico",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>-Material Caixa: Plástico\n <br />-Sistema: Digital\n <br />-Cor Pulseira: Preto\n <br />-Cor Do Fundo: Preto\n <br />-Kit Relógio: Não Possui Kit\n <br />-Artigo: 921623",
						"items": [
							{
								"itemId": "70011",
								"name": "X-Games Relógio 5 Atm Preto Plástico",
								"nameComplete": "X-Games Relógio 5 Atm Preto Plástico",
								"complementName": "<p>X-Games Relógio 5 Atm Preto Plástico</p>",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/360739/X-Games-Relogio-5-Atm-Preto-Plastico.jpg?v=637812508816900000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=70011&qty=1&seller=1&sc=1&price=13999&cv=36FDF877668E48F8AE664D25CEF3918A_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 139.99,
											"listPrice": 139.99,
											"priceWithoutDiscount": 139.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "36FDF877668E48F8AE664D25CEF3918A_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "1022",
						"productName": "Lince Relógio 5 Atm Bege Metal",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "lince-relogio-5-atm-bege-metal-921612000000",
						"productReference": "921612",
						"productReferenceCode": "921612",
						"categoryId": "89",
						"productTitle": "Lince Relógio 5 Atm Bege Metal",
						"metaTagDescription": "Lince Relógio 5 Atm Bege Metal",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>-Material Caixa: Metal\n <br />-Sistema: Analógico\n <br />-Cor Pulseira: Dourado\n <br />-Cor Do Fundo: Bege\n <br />-Kit Relógio: Colar E Brinco\n <br />-Artigo: 921612",
						"items": [
							{
								"itemId": "81509",
								"name": "Lince Relógio 5 Atm Bege Metal",
								"nameComplete": "Lince Relógio 5 Atm Bege Metal",
								"complementName": "<p>Lince Relógio 5 Atm Bege Metal</p>",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/394936/Lince-Relogio-5-Atm-Bege-Metal.jpg?v=637812531096070000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=81509&qty=1&seller=1&sc=1&price=22999&cv=15C24D910B2A4D6A809FA1A32015DAD0_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 229.99,
											"listPrice": 229.99,
											"priceWithoutDiscount": 229.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "15C24D910B2A4D6A809FA1A32015DAD0_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "17077",
						"productName": "Pulseira  Olho Grego",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "pulseira-olho-grego-937055000000",
						"productReference": "937055",
						"productReferenceCode": "937055",
						"categoryId": "94",
						"productTitle": "Pulseira De Olho Grego Ltpp - 053",
						"metaTagDescription": "Pulseira De Olho Grego Ltpp - 053",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Bijuterias/Pulseiras/",
							"/Acessórios/Bijuterias/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/90/94/",
							"/4/90/",
							"/4/"
						],
						"description": "<p>Quem não ama aquele acessório que componhe o look e deixa o dia mais alegre? Perfeito para dar aquele toque extra no seu estilo por combinar com você todos os dias. </p>\n\n<p>-Gênero: Feminino\n<br />-Cor: Dourado \n<br />-Origem Brasil \n<br />-Artigo: 937055",
						"items": [
							{
								"itemId": "84833",
								"name": "UNICO",
								"nameComplete": "Pulseira  Olho Grego UNICO",
								"complementName": "Quem não ama aquele acessório que componhe o look e deixa o dia mais alegre? Perfeito para dar aquele toque extra no seu estilo por combinar com você todos os dias.",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/526567/Pulseira--Olho-Grego.jpg?v=637825734036600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/526589/Pulseira--Olho-Grego.jpg?v=637825734048670000"
									}
								],
								"tamanho": [
									"SEM TAMANHO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=84833&qty=1&seller=1&sc=1&price=1999&cv=B6C948DC4C5E46FAA82A59234EF5FACD_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 19.99,
											"listPrice": 19.99,
											"priceWithoutDiscount": 19.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "B6C948DC4C5E46FAA82A59234EF5FACD_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "254",
										"name": "SEM TAMANHO",
										"position": 60
									}
								]
							}
						]
					},
					{
						"productId": "1059",
						"productName": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "relogio-mondaine-masculino-prata-p2-analogico-99143g0mvne5-922116000000",
						"productReference": "922116",
						"productReferenceCode": "922116",
						"categoryId": "89",
						"productTitle": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"metaTagDescription": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>Mondaine Relógio 5 Atm Prata Metal</p>\n\n<p>-Material Caixa: Metal\n<br />-Sistema: Analógico\n<br />-Cor Pulseira: Prata\n<br />-Cor Do Fundo: Prata\n<br />-Kit Relógio: Não Possui Kit\n<br />-Artigo: 922116",
						"items": [
							{
								"itemId": "70045",
								"name": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
								"nameComplete": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
								"complementName": "0",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/360837/Relogio-Mondaine-Masculino-Prata-P2-Analogico-99143G0Mvne5.jpg?v=637812508867900000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=70045&qty=1&seller=1&sc=1&price=19999&cv=D0A1BDE5E5344983815C820A979D6932_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 199.99,
											"listPrice": 199.99,
											"priceWithoutDiscount": 199.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "D0A1BDE5E5344983815C820A979D6932_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36504",
						"productName": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "conjunto-menina-com-babados-manga-longa-estampa-minnie-branco951961000000",
						"productReference": "951961",
						"productReferenceCode": "951961",
						"categoryId": "93",
						"productTitle": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"metaTagDescription": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Bijuterias/Conjuntos/",
							"/Acessórios/Bijuterias/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/90/93/",
							"/4/90/",
							"/4/"
						],
						"description": "<p><p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p></p>\n\n<p>-Gênero: Menina\n<br />-Ocasião: Dia A Dia\n<br />-Composição De:: Composição Blusa:\n<br />-1 Algodão \n<br />-Composição Calça: Algodão 0,04 Elastano \n<br />-Estampado/Liso: Estampa\n<br />-Personagens: Minnie\n<br />-Tipo De Manga: Manga Longa\n<br />-Origem Brasil\n<br />-Tipo De Gola: Gola Redonda\n<br />-Artigo: 951961",
						"items": [
							{
								"itemId": "109100",
								"name": "4",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 4",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781816/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376367900000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781835/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376376100000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781858/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376384330000"
									}
								],
								"tamanho": [
									"4"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109100&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109103",
								"name": "1",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 1",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781777/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376341800000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781791/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376353830000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781812/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376366670000"
									}
								],
								"tamanho": [
									"1"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109103&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109108",
								"name": "3",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 3",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781780/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376346330000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781793/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376354630000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781821/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376369630000"
									}
								],
								"tamanho": [
									"3"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109108&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109115",
								"name": "2",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 2",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781804/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376362600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781822/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376371200000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781845/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376378870000"
									}
								],
								"tamanho": [
									"2"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109115&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "249",
										"name": "4",
										"position": 55
									},
									{
										"id": "265",
										"name": "2",
										"position": 71
									},
									{
										"id": "266",
										"name": "3",
										"position": 72
									},
									{
										"id": "279",
										"name": "1",
										"position": 85
									}
								]
							}
						]
					},
					{
						"productId": "36476",
						"productName": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-tartaruga-verde-951637000000",
						"productReference": "951637",
						"productReferenceCode": "951637",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>\r\n<p>-Gênero: Unissex <br />-Cor: Prateado <br />-Origem Brasil <br />-Artigo: 951637</p>",
						"items": [
							{
								"itemId": "109062",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Tartaruga Verde UNICO",
								"complementName": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781748/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376317070000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781760/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376326600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781768/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376336930000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109062&qty=1&seller=1&sc=1&price=5999&cv=88AD4E4780C344BB9CA9FEAC38B946FE_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "88AD4E4780C344BB9CA9FEAC38B946FE_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36475",
						"productName": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-dourado-marrom-951635000000",
						"productReference": "951635",
						"productReferenceCode": "951635",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>\r\n<p>-Gênero: Unissex <br />-Cor: Tartaruga <br />-Origem Brasil <br />-Artigo: 951635</p>",
						"items": [
							{
								"itemId": "109046",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Dourado  Marrom UNICO",
								"complementName": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781650/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376275400000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781684/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376285400000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781711/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376296500000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109046&qty=1&seller=1&sc=1&price=5999&cv=D7C122AB38204453AA1B3BE94DF1CE50_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "D7C122AB38204453AA1B3BE94DF1CE50_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36474",
						"productName": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-dourado--preto--951634000000",
						"productReference": "951634",
						"productReferenceCode": "951634",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção. </p>\n\n<p>-Gênero: Unissex\n<br />-Cor: Preto \n<br />-Origem Brasil \n<br />-Artigo: 951634",
						"items": [
							{
								"itemId": "109068",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Dourado  Preto UNICO",
								"complementName": "Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781739/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376312200000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781757/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376324100000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781765/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376335230000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109068&qty=1&seller=1&sc=1&price=5999&cv=5D72E9B779B44F8E918545BE117E9036_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "5D72E9B779B44F8E918545BE117E9036_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36459",
						"productName": "Cinto Liso Marrom",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "cinto-liso-marrom950737000000",
						"productReference": "950737",
						"productReferenceCode": "950737",
						"categoryId": "84",
						"productTitle": "Cinto Liso Marrom",
						"metaTagDescription": "Cinto Liso Marrom",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Cintos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/84/",
							"/4/"
						],
						"description": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>\r\n<p>-Gênero: Feminino <br />-Cor: Marrom <br />-Origem Brasil <br />-Artigo: 950737</p>",
						"items": [
							{
								"itemId": "109017",
								"name": "P",
								"nameComplete": "Cinto Liso Marrom P",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781586/Cinto-Liso-Marrom.jpg?v=637829376255070000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781625/Cinto-Liso-Marrom.jpg?v=637829376266470000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781666/Cinto-Liso-Marrom.jpg?v=637829376279930000"
									}
								],
								"tamanho": [
									"P"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109017&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109035",
								"name": "GG",
								"nameComplete": "Cinto Liso Marrom GG",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781673/Cinto-Liso-Marrom.jpg?v=637829376281330000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781696/Cinto-Liso-Marrom.jpg?v=637829376289770000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781721/Cinto-Liso-Marrom.jpg?v=637829376299470000"
									}
								],
								"tamanho": [
									"GG"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109035&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109042",
								"name": "M",
								"nameComplete": "Cinto Liso Marrom M",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781659/Cinto-Liso-Marrom.jpg?v=637829376278030000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781692/Cinto-Liso-Marrom.jpg?v=637829376289470000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781722/Cinto-Liso-Marrom.jpg?v=637829376299800000"
									}
								],
								"tamanho": [
									"M"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109042&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109044",
								"name": "G",
								"nameComplete": "Cinto Liso Marrom G",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781702/Cinto-Liso-Marrom.jpg?v=637829376292270000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781726/Cinto-Liso-Marrom.jpg?v=637829376300770000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781735/Cinto-Liso-Marrom.jpg?v=637829376309100000"
									}
								],
								"tamanho": [
									"G"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109044&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "195",
										"name": "P",
										"position": 2
									},
									{
										"id": "197",
										"name": "M",
										"position": 3
									},
									{
										"id": "196",
										"name": "G",
										"position": 4
									},
									{
										"id": "201",
										"name": "GG",
										"position": 5
									}
								]
							}
						]
					}
				],
				
			listProductBestSellers: [
					{
						"productId": "1076",
						"productName": "X-Games Relógio 5 Atm Preto Plástico",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "x-games-relogio-5-atm-preto-plastico921623000000",
						"productReference": "921623",
						"productReferenceCode": "921623",
						"categoryId": "89",
						"productTitle": "X-Games Relógio 5 Atm Preto Plástico",
						"metaTagDescription": "X-Games Relógio 5 Atm Preto Plástico",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>-Material Caixa: Plástico\n <br />-Sistema: Digital\n <br />-Cor Pulseira: Preto\n <br />-Cor Do Fundo: Preto\n <br />-Kit Relógio: Não Possui Kit\n <br />-Artigo: 921623",
						"items": [
							{
								"itemId": "70011",
								"name": "X-Games Relógio 5 Atm Preto Plástico",
								"nameComplete": "X-Games Relógio 5 Atm Preto Plástico",
								"complementName": "<p>X-Games Relógio 5 Atm Preto Plástico</p>",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/360739/X-Games-Relogio-5-Atm-Preto-Plastico.jpg?v=637812508816900000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=70011&qty=1&seller=1&sc=1&price=13999&cv=36FDF877668E48F8AE664D25CEF3918A_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 139.99,
											"listPrice": 139.99,
											"priceWithoutDiscount": 139.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "36FDF877668E48F8AE664D25CEF3918A_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "1022",
						"productName": "Lince Relógio 5 Atm Bege Metal",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "lince-relogio-5-atm-bege-metal-921612000000",
						"productReference": "921612",
						"productReferenceCode": "921612",
						"categoryId": "89",
						"productTitle": "Lince Relógio 5 Atm Bege Metal",
						"metaTagDescription": "Lince Relógio 5 Atm Bege Metal",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>-Material Caixa: Metal\n <br />-Sistema: Analógico\n <br />-Cor Pulseira: Dourado\n <br />-Cor Do Fundo: Bege\n <br />-Kit Relógio: Colar E Brinco\n <br />-Artigo: 921612",
						"items": [
							{
								"itemId": "81509",
								"name": "Lince Relógio 5 Atm Bege Metal",
								"nameComplete": "Lince Relógio 5 Atm Bege Metal",
								"complementName": "<p>Lince Relógio 5 Atm Bege Metal</p>",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/394936/Lince-Relogio-5-Atm-Bege-Metal.jpg?v=637812531096070000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=81509&qty=1&seller=1&sc=1&price=22999&cv=15C24D910B2A4D6A809FA1A32015DAD0_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 229.99,
											"listPrice": 229.99,
											"priceWithoutDiscount": 229.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "15C24D910B2A4D6A809FA1A32015DAD0_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "17077",
						"productName": "Pulseira  Olho Grego",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "pulseira-olho-grego-937055000000",
						"productReference": "937055",
						"productReferenceCode": "937055",
						"categoryId": "94",
						"productTitle": "Pulseira De Olho Grego Ltpp - 053",
						"metaTagDescription": "Pulseira De Olho Grego Ltpp - 053",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Bijuterias/Pulseiras/",
							"/Acessórios/Bijuterias/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/90/94/",
							"/4/90/",
							"/4/"
						],
						"description": "<p>Quem não ama aquele acessório que componhe o look e deixa o dia mais alegre? Perfeito para dar aquele toque extra no seu estilo por combinar com você todos os dias. </p>\n\n<p>-Gênero: Feminino\n<br />-Cor: Dourado \n<br />-Origem Brasil \n<br />-Artigo: 937055",
						"items": [
							{
								"itemId": "84833",
								"name": "UNICO",
								"nameComplete": "Pulseira  Olho Grego UNICO",
								"complementName": "Quem não ama aquele acessório que componhe o look e deixa o dia mais alegre? Perfeito para dar aquele toque extra no seu estilo por combinar com você todos os dias.",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/526567/Pulseira--Olho-Grego.jpg?v=637825734036600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/526589/Pulseira--Olho-Grego.jpg?v=637825734048670000"
									}
								],
								"tamanho": [
									"SEM TAMANHO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=84833&qty=1&seller=1&sc=1&price=1999&cv=B6C948DC4C5E46FAA82A59234EF5FACD_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 19.99,
											"listPrice": 19.99,
											"priceWithoutDiscount": 19.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "B6C948DC4C5E46FAA82A59234EF5FACD_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "254",
										"name": "SEM TAMANHO",
										"position": 60
									}
								]
							}
						]
					},
					{
						"productId": "1059",
						"productName": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "relogio-mondaine-masculino-prata-p2-analogico-99143g0mvne5-922116000000",
						"productReference": "922116",
						"productReferenceCode": "922116",
						"categoryId": "89",
						"productTitle": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"metaTagDescription": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>Mondaine Relógio 5 Atm Prata Metal</p>\n\n<p>-Material Caixa: Metal\n<br />-Sistema: Analógico\n<br />-Cor Pulseira: Prata\n<br />-Cor Do Fundo: Prata\n<br />-Kit Relógio: Não Possui Kit\n<br />-Artigo: 922116",
						"items": [
							{
								"itemId": "70045",
								"name": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
								"nameComplete": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
								"complementName": "0",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/360837/Relogio-Mondaine-Masculino-Prata-P2-Analogico-99143G0Mvne5.jpg?v=637812508867900000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=70045&qty=1&seller=1&sc=1&price=19999&cv=D0A1BDE5E5344983815C820A979D6932_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 199.99,
											"listPrice": 199.99,
											"priceWithoutDiscount": 199.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "D0A1BDE5E5344983815C820A979D6932_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36504",
						"productName": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "conjunto-menina-com-babados-manga-longa-estampa-minnie-branco951961000000",
						"productReference": "951961",
						"productReferenceCode": "951961",
						"categoryId": "93",
						"productTitle": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"metaTagDescription": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Bijuterias/Conjuntos/",
							"/Acessórios/Bijuterias/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/90/93/",
							"/4/90/",
							"/4/"
						],
						"description": "<p><p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p></p>\n\n<p>-Gênero: Menina\n<br />-Ocasião: Dia A Dia\n<br />-Composição De:: Composição Blusa:\n<br />-1 Algodão \n<br />-Composição Calça: Algodão 0,04 Elastano \n<br />-Estampado/Liso: Estampa\n<br />-Personagens: Minnie\n<br />-Tipo De Manga: Manga Longa\n<br />-Origem Brasil\n<br />-Tipo De Gola: Gola Redonda\n<br />-Artigo: 951961",
						"items": [
							{
								"itemId": "109100",
								"name": "4",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 4",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781816/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376367900000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781835/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376376100000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781858/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376384330000"
									}
								],
								"tamanho": [
									"4"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109100&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109103",
								"name": "1",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 1",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781777/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376341800000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781791/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376353830000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781812/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376366670000"
									}
								],
								"tamanho": [
									"1"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109103&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109108",
								"name": "3",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 3",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781780/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376346330000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781793/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376354630000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781821/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376369630000"
									}
								],
								"tamanho": [
									"3"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109108&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109115",
								"name": "2",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 2",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781804/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376362600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781822/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376371200000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781845/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376378870000"
									}
								],
								"tamanho": [
									"2"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109115&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "249",
										"name": "4",
										"position": 55
									},
									{
										"id": "265",
										"name": "2",
										"position": 71
									},
									{
										"id": "266",
										"name": "3",
										"position": 72
									},
									{
										"id": "279",
										"name": "1",
										"position": 85
									}
								]
							}
						]
					},
					{
						"productId": "36476",
						"productName": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-tartaruga-verde-951637000000",
						"productReference": "951637",
						"productReferenceCode": "951637",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>\r\n<p>-Gênero: Unissex <br />-Cor: Prateado <br />-Origem Brasil <br />-Artigo: 951637</p>",
						"items": [
							{
								"itemId": "109062",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Tartaruga Verde UNICO",
								"complementName": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781748/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376317070000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781760/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376326600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781768/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376336930000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109062&qty=1&seller=1&sc=1&price=5999&cv=88AD4E4780C344BB9CA9FEAC38B946FE_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "88AD4E4780C344BB9CA9FEAC38B946FE_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36475",
						"productName": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-dourado-marrom-951635000000",
						"productReference": "951635",
						"productReferenceCode": "951635",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>\r\n<p>-Gênero: Unissex <br />-Cor: Tartaruga <br />-Origem Brasil <br />-Artigo: 951635</p>",
						"items": [
							{
								"itemId": "109046",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Dourado  Marrom UNICO",
								"complementName": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781650/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376275400000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781684/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376285400000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781711/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376296500000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109046&qty=1&seller=1&sc=1&price=5999&cv=D7C122AB38204453AA1B3BE94DF1CE50_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "D7C122AB38204453AA1B3BE94DF1CE50_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36474",
						"productName": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-dourado--preto--951634000000",
						"productReference": "951634",
						"productReferenceCode": "951634",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção. </p>\n\n<p>-Gênero: Unissex\n<br />-Cor: Preto \n<br />-Origem Brasil \n<br />-Artigo: 951634",
						"items": [
							{
								"itemId": "109068",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Dourado  Preto UNICO",
								"complementName": "Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781739/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376312200000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781757/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376324100000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781765/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376335230000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109068&qty=1&seller=1&sc=1&price=5999&cv=5D72E9B779B44F8E918545BE117E9036_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "5D72E9B779B44F8E918545BE117E9036_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36459",
						"productName": "Cinto Liso Marrom",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "cinto-liso-marrom950737000000",
						"productReference": "950737",
						"productReferenceCode": "950737",
						"categoryId": "84",
						"productTitle": "Cinto Liso Marrom",
						"metaTagDescription": "Cinto Liso Marrom",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Cintos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/84/",
							"/4/"
						],
						"description": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>\r\n<p>-Gênero: Feminino <br />-Cor: Marrom <br />-Origem Brasil <br />-Artigo: 950737</p>",
						"items": [
							{
								"itemId": "109017",
								"name": "P",
								"nameComplete": "Cinto Liso Marrom P",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781586/Cinto-Liso-Marrom.jpg?v=637829376255070000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781625/Cinto-Liso-Marrom.jpg?v=637829376266470000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781666/Cinto-Liso-Marrom.jpg?v=637829376279930000"
									}
								],
								"tamanho": [
									"P"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109017&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109035",
								"name": "GG",
								"nameComplete": "Cinto Liso Marrom GG",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781673/Cinto-Liso-Marrom.jpg?v=637829376281330000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781696/Cinto-Liso-Marrom.jpg?v=637829376289770000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781721/Cinto-Liso-Marrom.jpg?v=637829376299470000"
									}
								],
								"tamanho": [
									"GG"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109035&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109042",
								"name": "M",
								"nameComplete": "Cinto Liso Marrom M",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781659/Cinto-Liso-Marrom.jpg?v=637829376278030000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781692/Cinto-Liso-Marrom.jpg?v=637829376289470000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781722/Cinto-Liso-Marrom.jpg?v=637829376299800000"
									}
								],
								"tamanho": [
									"M"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109042&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109044",
								"name": "G",
								"nameComplete": "Cinto Liso Marrom G",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781702/Cinto-Liso-Marrom.jpg?v=637829376292270000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781726/Cinto-Liso-Marrom.jpg?v=637829376300770000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781735/Cinto-Liso-Marrom.jpg?v=637829376309100000"
									}
								],
								"tamanho": [
									"G"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109044&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "195",
										"name": "P",
										"position": 2
									},
									{
										"id": "197",
										"name": "M",
										"position": 3
									},
									{
										"id": "196",
										"name": "G",
										"position": 4
									},
									{
										"id": "201",
										"name": "GG",
										"position": 5
									}
								]
							}
						]
					}
				],
			
			listProduct: [
					{
						"productId": "1076",
						"productName": "X-Games Relógio 5 Atm Preto Plástico",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "x-games-relogio-5-atm-preto-plastico921623000000",
						"productReference": "921623",
						"productReferenceCode": "921623",
						"categoryId": "89",
						"productTitle": "X-Games Relógio 5 Atm Preto Plástico",
						"metaTagDescription": "X-Games Relógio 5 Atm Preto Plástico",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>-Material Caixa: Plástico\n <br />-Sistema: Digital\n <br />-Cor Pulseira: Preto\n <br />-Cor Do Fundo: Preto\n <br />-Kit Relógio: Não Possui Kit\n <br />-Artigo: 921623",
						"items": [
							{
								"itemId": "70011",
								"name": "X-Games Relógio 5 Atm Preto Plástico",
								"nameComplete": "X-Games Relógio 5 Atm Preto Plástico",
								"complementName": "<p>X-Games Relógio 5 Atm Preto Plástico</p>",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/360739/X-Games-Relogio-5-Atm-Preto-Plastico.jpg?v=637812508816900000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=70011&qty=1&seller=1&sc=1&price=13999&cv=36FDF877668E48F8AE664D25CEF3918A_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 139.99,
											"listPrice": 139.99,
											"priceWithoutDiscount": 139.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "36FDF877668E48F8AE664D25CEF3918A_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "1022",
						"productName": "Lince Relógio 5 Atm Bege Metal",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "lince-relogio-5-atm-bege-metal-921612000000",
						"productReference": "921612",
						"productReferenceCode": "921612",
						"categoryId": "89",
						"productTitle": "Lince Relógio 5 Atm Bege Metal",
						"metaTagDescription": "Lince Relógio 5 Atm Bege Metal",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>-Material Caixa: Metal\n <br />-Sistema: Analógico\n <br />-Cor Pulseira: Dourado\n <br />-Cor Do Fundo: Bege\n <br />-Kit Relógio: Colar E Brinco\n <br />-Artigo: 921612",
						"items": [
							{
								"itemId": "81509",
								"name": "Lince Relógio 5 Atm Bege Metal",
								"nameComplete": "Lince Relógio 5 Atm Bege Metal",
								"complementName": "<p>Lince Relógio 5 Atm Bege Metal</p>",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/394936/Lince-Relogio-5-Atm-Bege-Metal.jpg?v=637812531096070000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=81509&qty=1&seller=1&sc=1&price=22999&cv=15C24D910B2A4D6A809FA1A32015DAD0_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 229.99,
											"listPrice": 229.99,
											"priceWithoutDiscount": 229.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "15C24D910B2A4D6A809FA1A32015DAD0_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "17077",
						"productName": "Pulseira  Olho Grego",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "pulseira-olho-grego-937055000000",
						"productReference": "937055",
						"productReferenceCode": "937055",
						"categoryId": "94",
						"productTitle": "Pulseira De Olho Grego Ltpp - 053",
						"metaTagDescription": "Pulseira De Olho Grego Ltpp - 053",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Bijuterias/Pulseiras/",
							"/Acessórios/Bijuterias/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/90/94/",
							"/4/90/",
							"/4/"
						],
						"description": "<p>Quem não ama aquele acessório que componhe o look e deixa o dia mais alegre? Perfeito para dar aquele toque extra no seu estilo por combinar com você todos os dias. </p>\n\n<p>-Gênero: Feminino\n<br />-Cor: Dourado \n<br />-Origem Brasil \n<br />-Artigo: 937055",
						"items": [
							{
								"itemId": "84833",
								"name": "UNICO",
								"nameComplete": "Pulseira  Olho Grego UNICO",
								"complementName": "Quem não ama aquele acessório que componhe o look e deixa o dia mais alegre? Perfeito para dar aquele toque extra no seu estilo por combinar com você todos os dias.",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/526567/Pulseira--Olho-Grego.jpg?v=637825734036600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/526589/Pulseira--Olho-Grego.jpg?v=637825734048670000"
									}
								],
								"tamanho": [
									"SEM TAMANHO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=84833&qty=1&seller=1&sc=1&price=1999&cv=B6C948DC4C5E46FAA82A59234EF5FACD_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 19.99,
											"listPrice": 19.99,
											"priceWithoutDiscount": 19.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "B6C948DC4C5E46FAA82A59234EF5FACD_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "254",
										"name": "SEM TAMANHO",
										"position": 60
									}
								]
							}
						]
					},
					{
						"productId": "1059",
						"productName": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"brand": "Teste",
						"brandId": 2000000,
						"brandImageUrl": null,
						"linkText": "relogio-mondaine-masculino-prata-p2-analogico-99143g0mvne5-922116000000",
						"productReference": "922116",
						"productReferenceCode": "922116",
						"categoryId": "89",
						"productTitle": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"metaTagDescription": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Relógios/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/89/",
							"/4/"
						],
						"description": "<p>Mondaine Relógio 5 Atm Prata Metal</p>\n\n<p>-Material Caixa: Metal\n<br />-Sistema: Analógico\n<br />-Cor Pulseira: Prata\n<br />-Cor Do Fundo: Prata\n<br />-Kit Relógio: Não Possui Kit\n<br />-Artigo: 922116",
						"items": [
							{
								"itemId": "70045",
								"name": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
								"nameComplete": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
								"complementName": "0",
								"modalType": null,
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/360837/Relogio-Mondaine-Masculino-Prata-P2-Analogico-99143G0Mvne5.jpg?v=637812508867900000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=70045&qty=1&seller=1&sc=1&price=19999&cv=D0A1BDE5E5344983815C820A979D6932_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 199.99,
											"listPrice": 199.99,
											"priceWithoutDiscount": 199.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 100,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "D0A1BDE5E5344983815C820A979D6932_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36504",
						"productName": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "conjunto-menina-com-babados-manga-longa-estampa-minnie-branco951961000000",
						"productReference": "951961",
						"productReferenceCode": "951961",
						"categoryId": "93",
						"productTitle": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"metaTagDescription": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Bijuterias/Conjuntos/",
							"/Acessórios/Bijuterias/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/90/93/",
							"/4/90/",
							"/4/"
						],
						"description": "<p><p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p></p>\n\n<p>-Gênero: Menina\n<br />-Ocasião: Dia A Dia\n<br />-Composição De:: Composição Blusa:\n<br />-1 Algodão \n<br />-Composição Calça: Algodão 0,04 Elastano \n<br />-Estampado/Liso: Estampa\n<br />-Personagens: Minnie\n<br />-Tipo De Manga: Manga Longa\n<br />-Origem Brasil\n<br />-Tipo De Gola: Gola Redonda\n<br />-Artigo: 951961",
						"items": [
							{
								"itemId": "109100",
								"name": "4",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 4",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781816/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376367900000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781835/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376376100000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781858/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376384330000"
									}
								],
								"tamanho": [
									"4"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109100&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109103",
								"name": "1",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 1",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781777/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376341800000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781791/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376353830000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781812/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376366670000"
									}
								],
								"tamanho": [
									"1"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109103&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109108",
								"name": "3",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 3",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781780/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376346330000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781793/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376354630000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781821/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376369630000"
									}
								],
								"tamanho": [
									"3"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109108&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109115",
								"name": "2",
								"nameComplete": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 2",
								"complementName": "<p>Os conjuntos infantis são peças chaves para os pais que buscam praticidade na hora de vestir sua pequena, graças a combinação das peças que já estão prontas para serem usadas no dia a dia ou em ocasiões especiais.<p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781804/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376362600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781822/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376371200000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781845/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376378870000"
									}
								],
								"tamanho": [
									"2"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109115&qty=1&seller=1&sc=1&price=4999&cv=AA9A54012DAE41238F0DC2BB098943B8_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 49.99,
											"listPrice": 49.99,
											"priceWithoutDiscount": 49.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "AA9A54012DAE41238F0DC2BB098943B8_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "249",
										"name": "4",
										"position": 55
									},
									{
										"id": "265",
										"name": "2",
										"position": 71
									},
									{
										"id": "266",
										"name": "3",
										"position": 72
									},
									{
										"id": "279",
										"name": "1",
										"position": 85
									}
								]
							}
						]
					},
					{
						"productId": "36476",
						"productName": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-tartaruga-verde-951637000000",
						"productReference": "951637",
						"productReferenceCode": "951637",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Tartaruga Verde",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>\r\n<p>-Gênero: Unissex <br />-Cor: Prateado <br />-Origem Brasil <br />-Artigo: 951637</p>",
						"items": [
							{
								"itemId": "109062",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Tartaruga Verde UNICO",
								"complementName": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781748/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376317070000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781760/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376326600000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781768/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376336930000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109062&qty=1&seller=1&sc=1&price=5999&cv=88AD4E4780C344BB9CA9FEAC38B946FE_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "88AD4E4780C344BB9CA9FEAC38B946FE_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36475",
						"productName": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-dourado-marrom-951635000000",
						"productReference": "951635",
						"productReferenceCode": "951635",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Dourado  Marrom",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>\r\n<p>-Gênero: Unissex <br />-Cor: Tartaruga <br />-Origem Brasil <br />-Artigo: 951635</p>",
						"items": [
							{
								"itemId": "109046",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Dourado  Marrom UNICO",
								"complementName": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781650/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376275400000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781684/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376285400000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781711/Oculos-Unissex-Metal-Hexagonal-Dourado--Marrom.jpg?v=637829376296500000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109046&qty=1&seller=1&sc=1&price=5999&cv=D7C122AB38204453AA1B3BE94DF1CE50_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "D7C122AB38204453AA1B3BE94DF1CE50_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36474",
						"productName": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "oculos-unissex-metal-hexagonal-dourado--preto--951634000000",
						"productReference": "951634",
						"productReferenceCode": "951634",
						"categoryId": "95",
						"productTitle": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"metaTagDescription": "Óculos Unissex Metal Hexagonal Dourado  Preto",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Óculos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/95/",
							"/4/"
						],
						"description": "<p>Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção. </p>\n\n<p>-Gênero: Unissex\n<br />-Cor: Preto \n<br />-Origem Brasil \n<br />-Artigo: 951634",
						"items": [
							{
								"itemId": "109068",
								"name": "UNICO",
								"nameComplete": "Óculos Unissex Metal Hexagonal Dourado  Preto UNICO",
								"complementName": "Perfeito para dar aquele toque extra no seu estilo. Uma peça que combina com você todos os dias. Não pode faltar em sua coleção.",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781739/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376312200000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781757/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376324100000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781765/Oculos-Unissex-Metal-Hexagonal-Dourado--Preto.jpg?v=637829376335230000"
									}
								],
								"tamanho": [
									"UNICO"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109068&qty=1&seller=1&sc=1&price=5999&cv=5D72E9B779B44F8E918545BE117E9036_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 59.99,
											"listPrice": 59.99,
											"priceWithoutDiscount": 59.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "5D72E9B779B44F8E918545BE117E9036_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "209",
										"name": "UNICO",
										"position": 1
									}
								]
							}
						]
					},
					{
						"productId": "36459",
						"productName": "Cinto Liso Marrom",
						"brand": "Sem Marca",
						"brandId": 2000008,
						"brandImageUrl": null,
						"linkText": "cinto-liso-marrom950737000000",
						"productReference": "950737",
						"productReferenceCode": "950737",
						"categoryId": "84",
						"productTitle": "Cinto Liso Marrom",
						"metaTagDescription": "Cinto Liso Marrom",
						"releaseDate": "2019-01-01T00:00:00Z",
						"categories": [
							"/Acessórios/Cintos/",
							"/Acessórios/"
						],
						"categoriesIds": [
							"/4/84/",
							"/4/"
						],
						"description": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>\r\n<p>-Gênero: Feminino <br />-Cor: Marrom <br />-Origem Brasil <br />-Artigo: 950737</p>",
						"items": [
							{
								"itemId": "109017",
								"name": "P",
								"nameComplete": "Cinto Liso Marrom P",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781586/Cinto-Liso-Marrom.jpg?v=637829376255070000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781625/Cinto-Liso-Marrom.jpg?v=637829376266470000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781666/Cinto-Liso-Marrom.jpg?v=637829376279930000"
									}
								],
								"tamanho": [
									"P"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109017&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109035",
								"name": "GG",
								"nameComplete": "Cinto Liso Marrom GG",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781673/Cinto-Liso-Marrom.jpg?v=637829376281330000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781696/Cinto-Liso-Marrom.jpg?v=637829376289770000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781721/Cinto-Liso-Marrom.jpg?v=637829376299470000"
									}
								],
								"tamanho": [
									"GG"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109035&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109042",
								"name": "M",
								"nameComplete": "Cinto Liso Marrom M",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781659/Cinto-Liso-Marrom.jpg?v=637829376278030000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781692/Cinto-Liso-Marrom.jpg?v=637829376289470000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781722/Cinto-Liso-Marrom.jpg?v=637829376299800000"
									}
								],
								"tamanho": [
									"M"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109042&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:38:55Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							},
							{
								"itemId": "109044",
								"name": "G",
								"nameComplete": "Cinto Liso Marrom G",
								"complementName": "<p>Cintos são acessórios que além de ajustar as calças servem para dar destaque no seu look e podem ser usados em diversas ocasiões.</p>",
								"modalType": "",
								"isKit": false,
								"images": [
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781702/Cinto-Liso-Marrom.jpg?v=637829376292270000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781726/Cinto-Liso-Marrom.jpg?v=637829376300770000"
									},
									{
										"imageUrl": "https://pernambucanasqa.vteximg.com.br/arquivos/ids/781735/Cinto-Liso-Marrom.jpg?v=637829376309100000"
									}
								],
								"tamanho": [
									"G"
								],
								"variations": [
									"Tamanho"
								],
								"sellers": [
									{
										"sellerId": "1",
										"sellerName": "Pernambucanas",
										"addToCartLink": "https://pernambucanasqa.vtexcommercestable.com.br/checkout/cart/add?sku=109044&qty=1&seller=1&sc=1&price=3999&cv=6BA0E74D054F436FA7DF8FA32FBFB4F6_&sc=1",
										"sellerDefault": true,
										"commertialOffer": {
											"discountHighLight": [],
											"giftSkuIds": [],
											"teasers": [],
											"buyTogether": [],
											"itemMetadataAttachment": [],
											"price": 39.99,
											"listPrice": 39.99,
											"priceWithoutDiscount": 39.99,
											"rewardValue": 0,
											"priceValidUntil": "2024-04-05T13:42:12Z",
											"availableQuantity": 50,
											"isAvailable": true,
											"tax": 0,
											"getInfoErrorMessage": null,
											"cacheVersionUsedToCallCheckout": "6BA0E74D054F436FA7DF8FA32FBFB4F6_"
										}
									}
								],
								"videos": [],
								"estimatedDateArrival": null,
								"duraçãoseguroegarantia": null
							}
						],
						"skuSpecifications": [
							{
								"field": {
									"id": 32,
									"name": "Tamanho",
									"isActive": true,
									"position": 1,
									"type": "Combo"
								},
								"values": [
									{
										"id": "195",
										"name": "P",
										"position": 2
									},
									{
										"id": "197",
										"name": "M",
										"position": 3
									},
									{
										"id": "196",
										"name": "G",
										"position": 4
									},
									{
										"id": "201",
										"name": "GG",
										"position": 5
									}
								]
							}
						]
					}
				],

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
				
				//let _orderForm = data ? data : this.cart ? this.cart.orderFormId : this.cart
				//let resp = await apiUse.get(`api/${route.VtexGetCart}${ _orderForm ? '?orderForm=' + _orderForm : ''}`)
				this.cart = {
					"orderFormId": "f8b4da78-c50d-4298-9c55-cc2d99f34c3d",
					"salesChannel": "1",
					"loggedIn": false,
					"isCheckedIn": false,
					"storeId": null,
					"checkedInPickupPointId": null,
					"allowManualPrice": false,
					"canEditData": true,
					"userProfileId": "2b5c1c38-a6aa-4709-a018-672fe3703ccd",
					"userType": null,
					"ignoreProfileData": false,
					"value": 76283,
					"messages": [],
					"items": [
						{
							"id": "81509",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Lince Relógio 5 Atm Bege Metal",
							"skuName": "Lince Relógio 5 Atm Bege Metal",
							"productId": "1022",
							"refId": "921612000000",
							"ean": "92161200085",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/394936-55-55/Lince-Relogio-5-Atm-Bege-Metal.jpg?v=637812531096070000",
							"detailUrl": "/lince-relogio-5-atm-bege-metal-921612000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:17:56Z",
							"price": 22999,
							"listPrice": 22999,
							"rewardValue": 0,
							"sellingPrice": 22999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 22999,
								"total": 22999,
								"sellingPrices": [
									{
										"value": 22999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109103",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 1",
							"skuName": "1",
							"productId": "36504",
							"refId": "951961000100",
							"ean": "95196100108",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781777-55-55/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376341800000",
							"detailUrl": "/conjunto-menina-com-babados-manga-longa-estampa-minnie-branco951961000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:17:56Z",
							"price": 4999,
							"listPrice": 4999,
							"rewardValue": 0,
							"sellingPrice": 4999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 4999,
								"total": 4999,
								"sellingPrices": [
									{
										"value": 4999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "70045",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"skuName": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"productId": "1059",
							"refId": "922116000000",
							"ean": "7909669059127",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/360837-55-55/Relogio-Mondaine-Masculino-Prata-P2-Analogico-99143G0Mvne5.jpg?v=637812508867900000",
							"detailUrl": "/relogio-mondaine-masculino-prata-p2-analogico-99143g0mvne5-922116000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:17:56Z",
							"price": 19999,
							"listPrice": 19999,
							"rewardValue": 0,
							"sellingPrice": 19999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 19999,
								"total": 19999,
								"sellingPrices": [
									{
										"value": 19999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109062",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Óculos Unissex Metal Hexagonal Tartaruga Verde UNICO",
							"skuName": "UNICO",
							"productId": "36476",
							"refId": "951637000100",
							"ean": "95163700188",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781748-55-55/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376317070000",
							"detailUrl": "/oculos-unissex-metal-hexagonal-tartaruga-verde-951637000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:17:56Z",
							"price": 5999,
							"listPrice": 5999,
							"rewardValue": 0,
							"sellingPrice": 5999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 5999,
								"total": 5999,
								"sellingPrices": [
									{
										"value": 5999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109042",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Cinto Liso Marrom M",
							"skuName": "M",
							"productId": "36459",
							"refId": "950737000300",
							"ean": "95073700353",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781659-55-55/Cinto-Liso-Marrom.jpg?v=637829376278030000",
							"detailUrl": "/cinto-liso-marrom950737000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:17:56Z",
							"price": 3999,
							"listPrice": 3999,
							"rewardValue": 0,
							"sellingPrice": 3999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 3999,
								"total": 3999,
								"sellingPrices": [
									{
										"value": 3999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "2044",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"skuName": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"productId": "1789",
							"refId": "870624000000",
							"ean": "8023277109971",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/513832-55-55/Barbeador-Eletrico-Gama-Gsh900-Bivolt.png?v=637825723642800000",
							"detailUrl": "/barbeador-eltrico-gama-gsh900-bivolt870624000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:17:56Z",
							"price": 13990,
							"listPrice": 13990,
							"rewardValue": 0,
							"sellingPrice": 13990,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 13990,
								"total": 13990,
								"sellingPrices": [
									{
										"value": 13990,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "98509",
							"requestIndex": null,
							"quantity": 2,
							"seller": "1",
							"name": "Meia Masculina Estampada Snoopy 39/43",
							"skuName": "39/43",
							"productId": "22074",
							"refId": "937176000100",
							"ean": "093717600151",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/777395-55-55/Meia-Masculina-Estampada-Snoopy.jpg?v=637829372260500000",
							"detailUrl": "/meia-masculina-estampada-snoopy-937176000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:17:56Z",
							"price": 599,
							"listPrice": 599,
							"rewardValue": 0,
							"sellingPrice": 599,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 599,
								"total": 1198,
								"sellingPrices": [
									{
										"value": 599,
										"quantity": 2
									}
								]
							}
						}
					],
					"selectableGifts": [],
					"totalizers": [
						{
							"id": "Items",
							"name": "Total dos Itens",
							"value": 73183
						},
						{
							"id": "Shipping",
							"name": "Total do Frete",
							"value": 3100
						}
					],
					"shippingData": {
						"address": {
							"addressType": "search",
							"receiverName": "Joseandeson Jesus",
							"addressId": "3b246a4e8a3a481cb05e105d61183370",
							"isDisposable": true,
							"postalCode": "41510-000",
							"city": "Salvador",
							"state": "BA",
							"country": "BRA",
							"street": "BA-526",
							"number": "305",
							"neighborhood": "São Cristóvão",
							"complement": "",
							"reference": "",
							"geoCoordinates": [
								0,
								0
							]
						},
						"logisticsInfo": [
							{
								"itemIndex": 0,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "81509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 3,
										"listPrice": 3,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 1,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109103",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 844,
										"listPrice": 844,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1241,
										"listPrice": 1241,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 2,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "70045",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 3,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109062",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1688,
										"listPrice": 1688,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2482,
										"listPrice": 2482,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 4,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109042",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 563,
										"listPrice": 563,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 827,
										"listPrice": 827,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 5,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "2044",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2,
										"listPrice": 2,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 3,
										"listPrice": 3,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 6,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "98509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2,
										"listPrice": 2,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							}
						],
						"selectedAddresses": [
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"availableAddresses": [
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-8402679367805",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4dbcb50474314e2a9a52a82097268d95",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111719468",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "b4d9d2642e9242029efc5bed541c5e86",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "ad683ad67b934476814b9cd294dfecfc",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361267416812",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "95e89e6d050d4bbea6dcbea420470639",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0794dcdc0a6e495e94cd8e298383dee8",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3df4b62d1168490686b93a113727e54d",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361289891102",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-1680532837668",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "8d0eaaf9094b456fb85d34f074105d8f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "1",
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "7ee227b6d8c6402b849acff44a874b71",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "72e9a7d5616b499aadd868a7e5f82d60",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2eb6e45c4423448f818abb5a60fe723a",
								"isDisposable": true,
								"postalCode": "41098-020",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Alameda Euvaldo Luz",
								"number": "92",
								"neighborhood": "Horto Bela Vista",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "80d04621d51046c6b594375dde5a24f9",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4f4d08966ae641ca997241b6e3f0d26f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0ea529788811477a93a6a159e12155fe",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111977394",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.35043,
									-12.91109
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bc09dc106d924f26be844c61f01b036a",
								"isDisposable": false,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "8",
								"neighborhood": "Consolação",
								"complement": "casa 7",
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-5041604556543",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua Da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "e9b8e28873074a6c8afbfcd17a903e2b",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "cs 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4e3e16202b184bc08b840a08401f6a22",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2479138162d54d2fbd4d01c7082c7837",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bb7c8a57fee34b819ccea319fcf0009b",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "df8cdbd0d3994303a0682709b6160b15",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Dunas de abrantes",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "28a8e7a3fa8f405dbc36835aa4293bfa",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3360191616670",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "5040287425005",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"pickupPoints": []
					},
					"clientProfileData": {
						"email": "joseandesonjesus@gmail.com",
						"firstName": "Joseandeson",
						"lastName": "Jesus",
						"document": "01904749550",
						"documentType": "CPF",
						"phone": "71986272098",
						"corporateName": null,
						"tradeName": null,
						"corporateDocument": null,
						"stateInscription": null,
						"corporatePhone": null,
						"isCorporate": false,
						"profileCompleteOnLoading": false,
						"profileErrorOnLoading": false,
						"customerClass": null
					},
					"paymentData": {
						"installmentOptions": [
							{
								"paymentSystem": "1",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "2",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "3",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "4",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "8",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "9",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "16",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "17",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "125",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "401",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "402",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							}
						],
						"paymentSystems": [
							{
								"id": 17,
								"name": "Promissory",
								"groupName": "promissoryPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "17",
								"template": "promissoryPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 16,
								"name": "Vale",
								"groupName": "giftCardPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "16",
								"template": "giftCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 125,
								"name": "Pix",
								"groupName": "instantPaymentPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "125",
								"template": "instantPaymentPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 2,
								"name": "Visa",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^4[0-9]{15}$",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "2",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 1,
								"name": "American Express",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^3[47][0-9]{13}$",
									"mask": "9999 999999 99999",
									"cardCodeRegex": "^[0-9]{4}$",
									"cardCodeMask": "9999",
									"weights": [
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "1",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 3,
								"name": "Diners",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^3(0[0-5]|[68][0-9])[0-9]{11}$",
									"mask": "9999 999999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "3",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 4,
								"name": "Mastercard",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "4",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 8,
								"name": "Hipercard",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^606282|^3841(?:[0|4|6]{1})0",
									"mask": "9999999999999999999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										1,
										1,
										1
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "8",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 9,
								"name": "Elo",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^(50(67(0[78]|1[5789]|2[012456789]|3[01234569]|4[0-7]|53|7[4-8])|9(0(0[0-9]|1[34]|2[0-7]|3[0359]|4[01235678]|5[01235789]|6[0-9]|7[01346789]|8[01234789]|9[123479])|1(0[34568]|4[6-9]|5[1-8]|8[356789])|2(2[0-2]|5[78]|6[1-9]|7[0-9]|8[01235678]|90)|357|4(0[7-9]|1[0-9]|2[0-2]|31|5[7-9]|6[0-6]|84)|55[01]|636|7(2[2-9]|6[5-9])))|4(0117[89]|3(1274|8935)|5(1416|7(393|63[12])))|6(27780|36368|5(0(0(3[12356789]|4[0-7]|7[78])|4(0[6-9]|1[0234]|2[2-9]|3[045789]|8[5-9]|9[0-9])|5(0[012346789]|1[0-9]|2[0-9]|3[0178]|5[2-9]|6[0-6]|7[7-9]|8[0-8]|9[1-8])|72[0-7]|9(0[1-9]|1[0-9]|2[0128]|3[89]|4[6-9]|5[0145]|6[235678]|71))|16(5[2-9]|6[0-9]|7[01456789])|50(0[0-9]|1[02345678]|36|5[1267]))))\\d{0,13}$",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "9",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 402,
								"name": "Cartão Pernambucanas Elo",
								"groupName": "customPrivate_402PaymentGroup",
								"validator": {
									"regex": "5(0(9(2(7(4)))))|6(5(0(5(1(6)))))|6(5(0(5(1(7)))))|6(5(0(5(9(7)))))|6(5(5(0(1(2)))))|6(5(0(5(2(4)))))",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "402",
								"template": "customPrivate_402PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas Elo",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:13:23.4074493Z",
								"availablePayments": null
							},
							{
								"id": 401,
								"name": "Cartão Pernambucanas",
								"groupName": "customPrivate_401PaymentGroup",
								"validator": {
									"regex": "6(0(8(6(1(9)))))",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "*",
									"cardCodeMask": "null",
									"weights": [],
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "401",
								"template": "customPrivate_401PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:13:23.4074493Z",
								"availablePayments": null
							}
						],
						"payments": [
							{
								"paymentSystem": "17",
								"bin": null,
								"accountId": null,
								"tokenId": null,
								"installments": 1,
								"referenceValue": 76283,
								"value": 76283,
								"merchantSellerPayments": [
									{
										"id": "PERNAMBUCANASQA",
										"installments": 1,
										"referenceValue": 76283,
										"value": 76283,
										"interestRate": 0,
										"installmentValue": 76283
									}
								]
							}
						],
						"giftCards": [],
						"giftCardMessages": [],
						"availableAccounts": [],
						"availableTokens": [],
						"availableAssociations": {}
					},
					"marketingData": null,
					"sellers": [
						{
							"id": "1",
							"name": "Pernambucanas",
							"logo": ""
						}
					],
					"clientPreferencesData": {
						"locale": "pt-BR",
						"optinNewsLetter": false
					},
					"commercialConditionData": null,
					"storePreferencesData": {
						"countryCode": "BRA",
						"saveUserData": true,
						"timeZone": "E. South America Standard Time",
						"currencyCode": "BRL",
						"currencyLocale": 1046,
						"currencySymbol": "R$",
						"currencyFormatInfo": {
							"currencyDecimalDigits": 2,
							"currencyDecimalSeparator": ",",
							"currencyGroupSeparator": ".",
							"currencyGroupSize": 3,
							"startsWithCurrencySymbol": true
						}
					},
					"giftRegistryData": null,
					"openTextField": null,
					"invoiceData": null,
					"customData": null,
					"hooksData": null,
					"ratesAndBenefitsData": {
						"rateAndBenefitsIdentifiers": [],
						"teaser": []
					},
					"subscriptionData": null,
					"merchantContextData": null,
					"itemsOrdination": null,
					"logisticsInfo": null
							}
				
				// this.totalItems = this.cart && this.cart.items ? this.cart.items.length : 0
				this.totalItems = this.cart && this.cart.items && this.cart.items.length > 0
				? this.cart.items.map((prod) => prod.quantity).reduce((total, quantity) => total + quantity) 
				: 0
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

				let resp = {
					"addressType": null,
					"receiverName": null,
					"addressId": null,
					"isDisposable": false,
					"postalCode": "01301100",
					"city": "São Paulo",
					"state": "SP",
					"country": "BRA",
					"street": "Rua da Consolação",
					"number": "",
					"neighborhood": "Consolação",
					"complement": "",
					"reference": "",
					"geoCoordinates": [
						-46.654625,
						-23.55044
					]
				}

				if(resp.street){

					this.address = `${resp.street} - ${resp.neighborhood} - ${resp.city} - ${resp.state}` //resp
					this.postalCode = resp.postalCode
					this.street = resp.street
					this.neighborhood = resp.neighborhood
					this.city = resp.city
					this.state = resp.state
					this.country = resp.country
	
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
			
			try {
			
				
				this.simulationCart = {
					"orderFormId": "f8b4da78-c50d-4298-9c55-cc2d99f34c3d",
					"salesChannel": "1",
					"loggedIn": false,
					"isCheckedIn": false,
					"storeId": null,
					"checkedInPickupPointId": null,
					"allowManualPrice": false,
					"canEditData": true,
					"userProfileId": "2b5c1c38-a6aa-4709-a018-672fe3703ccd",
					"userType": null,
					"ignoreProfileData": false,
					"value": 76283,
					"messages": [],
					"items": [
						{
							"id": "81509",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Lince Relógio 5 Atm Bege Metal",
							"skuName": "Lince Relógio 5 Atm Bege Metal",
							"productId": "1022",
							"refId": "921612000000",
							"ean": "92161200085",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/394936-55-55/Lince-Relogio-5-Atm-Bege-Metal.jpg?v=637812531096070000",
							"detailUrl": "/lince-relogio-5-atm-bege-metal-921612000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 22999,
							"listPrice": 22999,
							"rewardValue": 0,
							"sellingPrice": 22999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 22999,
								"total": 22999,
								"sellingPrices": [
									{
										"value": 22999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109103",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 1",
							"skuName": "1",
							"productId": "36504",
							"refId": "951961000100",
							"ean": "95196100108",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781777-55-55/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376341800000",
							"detailUrl": "/conjunto-menina-com-babados-manga-longa-estampa-minnie-branco951961000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 4999,
							"listPrice": 4999,
							"rewardValue": 0,
							"sellingPrice": 4999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 4999,
								"total": 4999,
								"sellingPrices": [
									{
										"value": 4999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "70045",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"skuName": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"productId": "1059",
							"refId": "922116000000",
							"ean": "7909669059127",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/360837-55-55/Relogio-Mondaine-Masculino-Prata-P2-Analogico-99143G0Mvne5.jpg?v=637812508867900000",
							"detailUrl": "/relogio-mondaine-masculino-prata-p2-analogico-99143g0mvne5-922116000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 19999,
							"listPrice": 19999,
							"rewardValue": 0,
							"sellingPrice": 19999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 19999,
								"total": 19999,
								"sellingPrices": [
									{
										"value": 19999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109062",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Óculos Unissex Metal Hexagonal Tartaruga Verde UNICO",
							"skuName": "UNICO",
							"productId": "36476",
							"refId": "951637000100",
							"ean": "95163700188",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781748-55-55/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376317070000",
							"detailUrl": "/oculos-unissex-metal-hexagonal-tartaruga-verde-951637000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 5999,
							"listPrice": 5999,
							"rewardValue": 0,
							"sellingPrice": 5999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 5999,
								"total": 5999,
								"sellingPrices": [
									{
										"value": 5999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109042",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Cinto Liso Marrom M",
							"skuName": "M",
							"productId": "36459",
							"refId": "950737000300",
							"ean": "95073700353",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781659-55-55/Cinto-Liso-Marrom.jpg?v=637829376278030000",
							"detailUrl": "/cinto-liso-marrom950737000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 3999,
							"listPrice": 3999,
							"rewardValue": 0,
							"sellingPrice": 3999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 3999,
								"total": 3999,
								"sellingPrices": [
									{
										"value": 3999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "2044",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"skuName": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"productId": "1789",
							"refId": "870624000000",
							"ean": "8023277109971",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/513832-55-55/Barbeador-Eletrico-Gama-Gsh900-Bivolt.png?v=637825723642800000",
							"detailUrl": "/barbeador-eltrico-gama-gsh900-bivolt870624000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 13990,
							"listPrice": 13990,
							"rewardValue": 0,
							"sellingPrice": 13990,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 13990,
								"total": 13990,
								"sellingPrices": [
									{
										"value": 13990,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "98509",
							"requestIndex": null,
							"quantity": 2,
							"seller": "1",
							"name": "Meia Masculina Estampada Snoopy 39/43",
							"skuName": "39/43",
							"productId": "22074",
							"refId": "937176000100",
							"ean": "093717600151",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/777395-55-55/Meia-Masculina-Estampada-Snoopy.jpg?v=637829372260500000",
							"detailUrl": "/meia-masculina-estampada-snoopy-937176000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 599,
							"listPrice": 599,
							"rewardValue": 0,
							"sellingPrice": 599,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 599,
								"total": 1198,
								"sellingPrices": [
									{
										"value": 599,
										"quantity": 2
									}
								]
							}
						}
					],
					"selectableGifts": [],
					"totalizers": [
						{
							"id": "Items",
							"name": "Total dos Itens",
							"value": 73183
						},
						{
							"id": "Shipping",
							"name": "Total do Frete",
							"value": 3100
						}
					],
					"shippingData": {
						"address": {
							"addressType": "search",
							"receiverName": "Joseandeson Jesus",
							"addressId": "3b246a4e8a3a481cb05e105d61183370",
							"isDisposable": true,
							"postalCode": "41510-000",
							"city": "Salvador",
							"state": "BA",
							"country": "BRA",
							"street": "BA-526",
							"number": "305",
							"neighborhood": "São Cristóvão",
							"complement": "",
							"reference": "",
							"geoCoordinates": [
								0,
								0
							]
						},
						"logisticsInfo": [
							{
								"itemIndex": 0,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "81509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 3,
										"listPrice": 3,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 1,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109103",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 844,
										"listPrice": 844,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1241,
										"listPrice": 1241,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 2,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "70045",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 3,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109062",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1688,
										"listPrice": 1688,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2482,
										"listPrice": 2482,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 4,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109042",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 563,
										"listPrice": 563,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 827,
										"listPrice": 827,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 5,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "2044",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2,
										"listPrice": 2,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 3,
										"listPrice": 3,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 6,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "98509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2,
										"listPrice": 2,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							}
						],
						"selectedAddresses": [
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"availableAddresses": [
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-8402679367805",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4dbcb50474314e2a9a52a82097268d95",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111719468",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "b4d9d2642e9242029efc5bed541c5e86",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "ad683ad67b934476814b9cd294dfecfc",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361267416812",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "95e89e6d050d4bbea6dcbea420470639",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0794dcdc0a6e495e94cd8e298383dee8",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3df4b62d1168490686b93a113727e54d",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361289891102",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-1680532837668",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "8d0eaaf9094b456fb85d34f074105d8f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "1",
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "7ee227b6d8c6402b849acff44a874b71",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "72e9a7d5616b499aadd868a7e5f82d60",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2eb6e45c4423448f818abb5a60fe723a",
								"isDisposable": true,
								"postalCode": "41098-020",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Alameda Euvaldo Luz",
								"number": "92",
								"neighborhood": "Horto Bela Vista",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "80d04621d51046c6b594375dde5a24f9",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4f4d08966ae641ca997241b6e3f0d26f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0ea529788811477a93a6a159e12155fe",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111977394",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.35043,
									-12.91109
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bc09dc106d924f26be844c61f01b036a",
								"isDisposable": false,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "8",
								"neighborhood": "Consolação",
								"complement": "casa 7",
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-5041604556543",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua Da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "e9b8e28873074a6c8afbfcd17a903e2b",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "cs 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4e3e16202b184bc08b840a08401f6a22",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2479138162d54d2fbd4d01c7082c7837",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bb7c8a57fee34b819ccea319fcf0009b",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "df8cdbd0d3994303a0682709b6160b15",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Dunas de abrantes",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "28a8e7a3fa8f405dbc36835aa4293bfa",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3360191616670",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "5040287425005",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"pickupPoints": []
					},
					"clientProfileData": {
						"email": "joseandesonjesus@gmail.com",
						"firstName": "Nome",
						"lastName": "Sobre nome",
						"document": "cpf",
						"documentType": "CPF",
						"phone": "telefone",
						"corporateName": null,
						"tradeName": null,
						"corporateDocument": null,
						"stateInscription": null,
						"corporatePhone": null,
						"isCorporate": false,
						"profileCompleteOnLoading": false,
						"profileErrorOnLoading": false,
						"customerClass": null
					},
					"paymentData": {
						"installmentOptions": [
							{
								"paymentSystem": "1",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "2",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "3",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "4",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "8",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "9",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "16",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "17",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "125",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "401",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							},
							{
								"paymentSystem": "402",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 76283,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 76283,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 76283,
												"total": 76283
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 38141,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 38141,
												"total": 76283
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 25427,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 25427,
												"total": 76283
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 19070,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 19070,
												"total": 76283
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 15256,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 15256,
												"total": 76283
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12713,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12713,
												"total": 76283
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10897,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10897,
												"total": 76283
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9535,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9535,
												"total": 76283
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8475,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8475,
												"total": 76283
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7628,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7628,
												"total": 76283
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6934,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6934,
												"total": 76283
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6356,
										"total": 76283,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6356,
												"total": 76283
											}
										]
									}
								]
							}
						],
						"paymentSystems": [
							{
								"id": 17,
								"name": "Promissory",
								"groupName": "promissoryPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "17",
								"template": "promissoryPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 16,
								"name": "Vale",
								"groupName": "giftCardPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "16",
								"template": "giftCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 125,
								"name": "Pix",
								"groupName": "instantPaymentPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "125",
								"template": "instantPaymentPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 2,
								"name": "Visa",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^4[0-9]{15}$",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "2",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 1,
								"name": "American Express",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^3[47][0-9]{13}$",
									"mask": "9999 999999 99999",
									"cardCodeRegex": "^[0-9]{4}$",
									"cardCodeMask": "9999",
									"weights": [
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "1",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 3,
								"name": "Diners",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^3(0[0-5]|[68][0-9])[0-9]{11}$",
									"mask": "9999 999999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "3",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 4,
								"name": "Mastercard",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "4",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 8,
								"name": "Hipercard",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^606282|^3841(?:[0|4|6]{1})0",
									"mask": "9999999999999999999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										1,
										1,
										1
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "8",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 9,
								"name": "Elo",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^(50(67(0[78]|1[5789]|2[012456789]|3[01234569]|4[0-7]|53|7[4-8])|9(0(0[0-9]|1[34]|2[0-7]|3[0359]|4[01235678]|5[01235789]|6[0-9]|7[01346789]|8[01234789]|9[123479])|1(0[34568]|4[6-9]|5[1-8]|8[356789])|2(2[0-2]|5[78]|6[1-9]|7[0-9]|8[01235678]|90)|357|4(0[7-9]|1[0-9]|2[0-2]|31|5[7-9]|6[0-6]|84)|55[01]|636|7(2[2-9]|6[5-9])))|4(0117[89]|3(1274|8935)|5(1416|7(393|63[12])))|6(27780|36368|5(0(0(3[12356789]|4[0-7]|7[78])|4(0[6-9]|1[0234]|2[2-9]|3[045789]|8[5-9]|9[0-9])|5(0[012346789]|1[0-9]|2[0-9]|3[0178]|5[2-9]|6[0-6]|7[7-9]|8[0-8]|9[1-8])|72[0-7]|9(0[1-9]|1[0-9]|2[0128]|3[89]|4[6-9]|5[0145]|6[235678]|71))|16(5[2-9]|6[0-9]|7[01456789])|50(0[0-9]|1[02345678]|36|5[1267]))))\\d{0,13}$",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "9",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 402,
								"name": "Cartão Pernambucanas Elo",
								"groupName": "customPrivate_402PaymentGroup",
								"validator": {
									"regex": "5(0(9(2(7(4)))))|6(5(0(5(1(6)))))|6(5(0(5(1(7)))))|6(5(0(5(9(7)))))|6(5(5(0(1(2)))))|6(5(0(5(2(4)))))",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "402",
								"template": "customPrivate_402PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas Elo",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 401,
								"name": "Cartão Pernambucanas",
								"groupName": "customPrivate_401PaymentGroup",
								"validator": {
									"regex": "6(0(8(6(1(9)))))",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "*",
									"cardCodeMask": "null",
									"weights": [],
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "401",
								"template": "customPrivate_401PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:23:25.7353404Z",
								"availablePayments": null
							}
						],
						"payments": [
							{
								"paymentSystem": "17",
								"bin": null,
								"accountId": null,
								"tokenId": null,
								"installments": 1,
								"referenceValue": 76283,
								"value": 76283,
								"merchantSellerPayments": [
									{
										"id": "PERNAMBUCANASQA",
										"installments": 1,
										"referenceValue": 76283,
										"value": 76283,
										"interestRate": 0,
										"installmentValue": 76283
									}
								]
							}
						],
						"giftCards": [],
						"giftCardMessages": [],
						"availableAccounts": [],
						"availableTokens": [],
						"availableAssociations": {}
					},
					"marketingData": null,
					"sellers": [
						{
							"id": "1",
							"name": "Pernambucanas",
							"logo": ""
						}
					],
					"clientPreferencesData": {
						"locale": "pt-BR",
						"optinNewsLetter": false
					},
					"commercialConditionData": null,
					"storePreferencesData": {
						"countryCode": "BRA",
						"saveUserData": true,
						"timeZone": "E. South America Standard Time",
						"currencyCode": "BRL",
						"currencyLocale": 1046,
						"currencySymbol": "R$",
						"currencyFormatInfo": {
							"currencyDecimalDigits": 2,
							"currencyDecimalSeparator": ",",
							"currencyGroupSeparator": ".",
							"currencyGroupSize": 3,
							"startsWithCurrencySymbol": true
						}
					},
					"giftRegistryData": null,
					"openTextField": null,
					"invoiceData": null,
					"customData": null,
					"hooksData": null,
					"ratesAndBenefitsData": {
						"rateAndBenefitsIdentifiers": [],
						"teaser": []
					},
					"subscriptionData": null,
					"merchantContextData": null,
					"itemsOrdination": null,
					"logisticsInfo": null
				}
				return this.cart
			} catch (error) {
				// this.cart = null
				console.error('doAddClientProfile => ', error)
				toast.error(`Erro ao consultar API Vtex!`)
			}
		},
		async doSimulationByCepAndCartVtex(data) {
			try {
				let resp = {
					"orderFormId": "f8b4da78-c50d-4298-9c55-cc2d99f34c3d",
					"salesChannel": "1",
					"loggedIn": false,
					"isCheckedIn": false,
					"storeId": null,
					"checkedInPickupPointId": null,
					"allowManualPrice": false,
					"canEditData": true,
					"userProfileId": "2b5c1c38-a6aa-4709-a018-672fe3703ccd",
					"userType": null,
					"ignoreProfileData": false,
					"value": 76283,
					"messages": [],
					"items": [
						{
							"id": "81509",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Lince Relógio 5 Atm Bege Metal",
							"skuName": "Lince Relógio 5 Atm Bege Metal",
							"productId": "1022",
							"refId": "921612000000",
							"ean": "92161200085",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/394936-55-55/Lince-Relogio-5-Atm-Bege-Metal.jpg?v=637812531096070000",
							"detailUrl": "/lince-relogio-5-atm-bege-metal-921612000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 22999,
							"listPrice": 22999,
							"rewardValue": 0,
							"sellingPrice": 22999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 22999,
								"total": 22999,
								"sellingPrices": [
									{
										"value": 22999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109103",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 1",
							"skuName": "1",
							"productId": "36504",
							"refId": "951961000100",
							"ean": "95196100108",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781777-55-55/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376341800000",
							"detailUrl": "/conjunto-menina-com-babados-manga-longa-estampa-minnie-branco951961000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 4999,
							"listPrice": 4999,
							"rewardValue": 0,
							"sellingPrice": 4999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 4999,
								"total": 4999,
								"sellingPrices": [
									{
										"value": 4999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "70045",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"skuName": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"productId": "1059",
							"refId": "922116000000",
							"ean": "7909669059127",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/360837-55-55/Relogio-Mondaine-Masculino-Prata-P2-Analogico-99143G0Mvne5.jpg?v=637812508867900000",
							"detailUrl": "/relogio-mondaine-masculino-prata-p2-analogico-99143g0mvne5-922116000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 19999,
							"listPrice": 19999,
							"rewardValue": 0,
							"sellingPrice": 19999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 19999,
								"total": 19999,
								"sellingPrices": [
									{
										"value": 19999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109062",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Óculos Unissex Metal Hexagonal Tartaruga Verde UNICO",
							"skuName": "UNICO",
							"productId": "36476",
							"refId": "951637000100",
							"ean": "95163700188",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781748-55-55/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376317070000",
							"detailUrl": "/oculos-unissex-metal-hexagonal-tartaruga-verde-951637000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 5999,
							"listPrice": 5999,
							"rewardValue": 0,
							"sellingPrice": 5999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 5999,
								"total": 5999,
								"sellingPrices": [
									{
										"value": 5999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109042",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Cinto Liso Marrom M",
							"skuName": "M",
							"productId": "36459",
							"refId": "950737000300",
							"ean": "95073700353",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781659-55-55/Cinto-Liso-Marrom.jpg?v=637829376278030000",
							"detailUrl": "/cinto-liso-marrom950737000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 3999,
							"listPrice": 3999,
							"rewardValue": 0,
							"sellingPrice": 3999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 3999,
								"total": 3999,
								"sellingPrices": [
									{
										"value": 3999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "2044",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"skuName": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"productId": "1789",
							"refId": "870624000000",
							"ean": "8023277109971",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/513832-55-55/Barbeador-Eletrico-Gama-Gsh900-Bivolt.png?v=637825723642800000",
							"detailUrl": "/barbeador-eltrico-gama-gsh900-bivolt870624000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 13990,
							"listPrice": 13990,
							"rewardValue": 0,
							"sellingPrice": 13990,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 13990,
								"total": 13990,
								"sellingPrices": [
									{
										"value": 13990,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "98509",
							"requestIndex": null,
							"quantity": 2,
							"seller": "1",
							"name": "Meia Masculina Estampada Snoopy 39/43",
							"skuName": "39/43",
							"productId": "22074",
							"refId": "937176000100",
							"ean": "093717600151",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/777395-55-55/Meia-Masculina-Estampada-Snoopy.jpg?v=637829372260500000",
							"detailUrl": "/meia-masculina-estampada-snoopy-937176000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:32:38Z",
							"price": 599,
							"listPrice": 599,
							"rewardValue": 0,
							"sellingPrice": 599,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 599,
								"total": 1198,
								"sellingPrices": [
									{
										"value": 599,
										"quantity": 2
									}
								]
							}
						}
					],
					"selectableGifts": [],
					"totalizers": [
						{
							"id": "Items",
							"name": "Total dos Itens",
							"value": 73183
						},
						{
							"id": "Shipping",
							"name": "Total do Frete",
							"value": 3100
						}
					],
					"shippingData": {
						"address": {
							"addressType": "search",
							"receiverName": "Joseandeson Jesus",
							"addressId": "3b246a4e8a3a481cb05e105d61183370",
							"isDisposable": true,
							"postalCode": "41510-000",
							"city": "Salvador",
							"state": "BA",
							"country": "BRA",
							"street": "BA-526",
							"number": "305",
							"neighborhood": "São Cristóvão",
							"complement": "",
							"reference": "",
							"geoCoordinates": [
								0,
								0
							]
						},
						"logisticsInfo": [
							{
								"itemIndex": 0,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "81509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 3,
										"listPrice": 3,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 1,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109103",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 844,
										"listPrice": 844,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1241,
										"listPrice": 1241,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 2,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "70045",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 3,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109062",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1688,
										"listPrice": 1688,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2482,
										"listPrice": 2482,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 4,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109042",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 563,
										"listPrice": 563,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 827,
										"listPrice": 827,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 5,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "2044",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2,
										"listPrice": 2,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 3,
										"listPrice": 3,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 6,
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "98509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "2884",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "6bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "4bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "8bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2,
										"listPrice": 2,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "6bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							}
						],
						"selectedAddresses": [
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"availableAddresses": [
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-8402679367805",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4dbcb50474314e2a9a52a82097268d95",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111719468",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "b4d9d2642e9242029efc5bed541c5e86",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "ad683ad67b934476814b9cd294dfecfc",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361267416812",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "95e89e6d050d4bbea6dcbea420470639",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0794dcdc0a6e495e94cd8e298383dee8",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3df4b62d1168490686b93a113727e54d",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361289891102",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-1680532837668",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "8d0eaaf9094b456fb85d34f074105d8f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "1",
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "7ee227b6d8c6402b849acff44a874b71",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "72e9a7d5616b499aadd868a7e5f82d60",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2eb6e45c4423448f818abb5a60fe723a",
								"isDisposable": true,
								"postalCode": "41098-020",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Alameda Euvaldo Luz",
								"number": "92",
								"neighborhood": "Horto Bela Vista",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "80d04621d51046c6b594375dde5a24f9",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4f4d08966ae641ca997241b6e3f0d26f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0ea529788811477a93a6a159e12155fe",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111977394",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.35043,
									-12.91109
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bc09dc106d924f26be844c61f01b036a",
								"isDisposable": false,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "8",
								"neighborhood": "Consolação",
								"complement": "casa 7",
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-5041604556543",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua Da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "e9b8e28873074a6c8afbfcd17a903e2b",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "cs 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4e3e16202b184bc08b840a08401f6a22",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2479138162d54d2fbd4d01c7082c7837",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bb7c8a57fee34b819ccea319fcf0009b",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "df8cdbd0d3994303a0682709b6160b15",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Dunas de abrantes",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "28a8e7a3fa8f405dbc36835aa4293bfa",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3360191616670",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "5040287425005",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"pickupPoints": []
					},
					"clientProfileData": {
						"email": "joseandesonjesus@gmail.com",
						"firstName": "Nome",
						"lastName": "Sobre nome",
						"document": "cpf",
						"documentType": "CPF",
						"phone": "telefone",
						"corporateName": null,
						"tradeName": null,
						"corporateDocument": null,
						"stateInscription": null,
						"corporatePhone": null,
						"isCorporate": false,
						"profileCompleteOnLoading": false,
						"profileErrorOnLoading": false,
						"customerClass": null
					},
					"paymentData": {
						"installmentOptions": [
							{
								"paymentSystem": "1",
								"bin": null,
								"paymentName": "American Express",
								"paymentGroupName": "creditCardPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "2",
								"bin": null,
								"paymentName": "Visa",
								"paymentGroupName": "creditCardPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "3",
								"bin": null,
								"paymentName": "Diners",
								"paymentGroupName": "creditCardPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "4",
								"bin": null,
								"paymentName": "Mastercard",
								"paymentGroupName": "creditCardPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "8",
								"bin": null,
								"paymentName": "Hipercard",
								"paymentGroupName": "creditCardPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "9",
								"bin": null,
								"paymentName": "Elo",
								"paymentGroupName": "creditCardPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "16",
								"bin": null,
								"paymentName": "Vale",
								"paymentGroupName": "giftCardPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "17",
								"bin": null,
								"paymentName": "Promissory",
								"paymentGroupName": "promissoryPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "125",
								"bin": null,
								"paymentName": "Pix",
								"paymentGroupName": "instantPaymentPaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "401",
								"bin": null,
								"paymentName": "Cartão Pernambucanas",
								"paymentGroupName": "customPrivate_401PaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							},
							{
								"paymentSystem": "402",
								"bin": null,
								"paymentName": "Cartão Pernambucanas Elo",
								"paymentGroupName": "customPrivate_402PaymentGroup",
								"value": 73183,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 73183,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 73183,
												"total": 73183
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 36591,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 36591,
												"total": 73183
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24394,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24394,
												"total": 73183
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18295,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18295,
												"total": 73183
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14636,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14636,
												"total": 73183
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12197,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12197,
												"total": 73183
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10454,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10454,
												"total": 73183
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9147,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9147,
												"total": 73183
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8131,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8131,
												"total": 73183
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7318,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7318,
												"total": 73183
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6653,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6653,
												"total": 73183
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6098,
										"total": 73183,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6098,
												"total": 73183
											}
										]
									}
								]
							}
						],
						"paymentSystems": [
							{
								"id": 17,
								"name": "Promissory",
								"groupName": "promissoryPaymentGroup",
								"validator": null,
								"stringId": "17",
								"template": "promissoryPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 16,
								"name": "Vale",
								"groupName": "giftCardPaymentGroup",
								"validator": null,
								"stringId": "16",
								"template": "giftCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 125,
								"name": "Pix",
								"groupName": "instantPaymentPaymentGroup",
								"validator": null,
								"stringId": "125",
								"template": "instantPaymentPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 2,
								"name": "Visa",
								"groupName": "creditCardPaymentGroup",
								"validator": null,
								"stringId": "2",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 1,
								"name": "American Express",
								"groupName": "creditCardPaymentGroup",
								"validator": null,
								"stringId": "1",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 3,
								"name": "Diners",
								"groupName": "creditCardPaymentGroup",
								"validator": null,
								"stringId": "3",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 4,
								"name": "Mastercard",
								"groupName": "creditCardPaymentGroup",
								"validator": null,
								"stringId": "4",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 8,
								"name": "Hipercard",
								"groupName": "creditCardPaymentGroup",
								"validator": null,
								"stringId": "8",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 9,
								"name": "Elo",
								"groupName": "creditCardPaymentGroup",
								"validator": null,
								"stringId": "9",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 402,
								"name": "Cartão Pernambucanas Elo",
								"groupName": "customPrivate_402PaymentGroup",
								"validator": null,
								"stringId": "402",
								"template": "customPrivate_402PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas Elo",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:23:25.7353404Z",
								"availablePayments": null
							},
							{
								"id": 401,
								"name": "Cartão Pernambucanas",
								"groupName": "customPrivate_401PaymentGroup",
								"validator": null,
								"stringId": "401",
								"template": "customPrivate_401PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:23:25.7353404Z",
								"availablePayments": null
							}
						],
						"payments": [],
						"giftCards": [],
						"giftCardMessages": [],
						"availableAccounts": [],
						"availableTokens": [],
						"availableAssociations": {}
					},
					"marketingData": null,
					"sellers": [
						{
							"id": "1",
							"name": "Pernambucanas",
							"logo": ""
						}
					],
					"clientPreferencesData": {
						"locale": "pt-BR",
						"optinNewsLetter": false
					},
					"commercialConditionData": null,
					"storePreferencesData": {
						"countryCode": "BRA",
						"saveUserData": true,
						"timeZone": "E. South America Standard Time",
						"currencyCode": "BRL",
						"currencyLocale": 1046,
						"currencySymbol": "R$",
						"currencyFormatInfo": {
							"currencyDecimalDigits": 2,
							"currencyDecimalSeparator": ",",
							"currencyGroupSeparator": ".",
							"currencyGroupSize": 3,
							"startsWithCurrencySymbol": true
						}
					},
					"giftRegistryData": null,
					"openTextField": null,
					"invoiceData": null,
					"customData": null,
					"hooksData": null,
					"ratesAndBenefitsData": {
						"rateAndBenefitsIdentifiers": [],
						"teaser": []
					},
					"subscriptionData": null,
					"merchantContextData": null,
					"itemsOrdination": null,
					"logisticsInfo": [
						{
							"itemIndex": 0,
							"addressId": null,
							"selectedSla": null,
							"selectedDeliveryChannel": null,
							"quantity": 1,
							"shipsTo": [
								"BRA"
							],
							"itemId": null,
							"slas": [
								{
									"id": "Normal",
									"deliveryChannel": "delivery",
									"name": "Normal",
									"deliveryIds": [
										{
											"courierId": "288",
											"warehouseId": "1",
											"dockId": "1",
											"courierName": "intelipost_intelipost_4_t0288",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "4bd",
									"shippingEstimateAux": "Em até 4 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 1,
									"listPrice": 1,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "2bd"
								},
								{
									"id": "Expresso",
									"deliveryChannel": "delivery",
									"name": "Expresso",
									"deliveryIds": [
										{
											"courierId": "1c59d1c",
											"warehouseId": "1",
											"dockId": "5",
											"courierName": "intelipost_intelipost_2_t0298",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "7bd",
									"shippingEstimateAux": "Em até 7 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 1,
									"listPrice": 1,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "5bd"
								},
								{
									"id": "pickup_pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup_pickup (18)",
									"deliveryIds": [
										{
											"courierId": "2",
											"warehouseId": "1_1",
											"dockId": "1",
											"courierName": "CliqueRetire",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "2h",
									"shippingEstimateAux": "Pronto em até 2 horas",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": null
									},
									"pickupPointId": "pernambucanasqa018_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "2h"
								},
								{
									"id": "pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (18)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3016)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3016)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Pefisa EC (apenas para funcionários)",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3016",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2387",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3016",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (56)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (56)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Direita",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "56",
											"isDisposable": true,
											"postalCode": "01002-001",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Direita",
											"number": "226",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63565,
												-23.54816
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_56",
									"pickupDistance": 1.9507374,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (54)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (54)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Augusta",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "54",
											"isDisposable": true,
											"postalCode": "01426-000",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Augusta",
											"number": "2721",
											"neighborhood": "Cerqueira César",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.66677,
												-23.56476
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_54",
									"pickupDistance": 2.0169256,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3003)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3003)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua São Bento",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3003",
											"isDisposable": true,
											"postalCode": "01011-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua São Bento",
											"number": "360",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63506,
												-23.54606
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3003",
									"pickupDistance": 2.0529556,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (377)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (377)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Shopping West Plaza",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "377",
											"isDisposable": true,
											"postalCode": "05003-020",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Av. Antártica",
											"number": "408 - LJ  1201",
											"neighborhood": "Perdizes",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.67425,
												-23.52729
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_377",
									"pickupDistance": 3.260175,
									"polygonName": "",
									"transitTime": "30bd"
								}
							],
							"deliveryChannels": [
								{
									"id": "delivery"
								},
								{
									"id": "pickup-in-point"
								}
							]
						},
						{
							"itemIndex": 1,
							"addressId": null,
							"selectedSla": null,
							"selectedDeliveryChannel": null,
							"quantity": 1,
							"shipsTo": [
								"BRA"
							],
							"itemId": null,
							"slas": [
								{
									"id": "Normal",
									"deliveryChannel": "delivery",
									"name": "Normal",
									"deliveryIds": [
										{
											"courierId": "288",
											"warehouseId": "1",
											"dockId": "1",
											"courierName": "intelipost_intelipost_4_t0288",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "4bd",
									"shippingEstimateAux": "Em até 4 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 490,
									"listPrice": 490,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "2bd"
								},
								{
									"id": "Expresso",
									"deliveryChannel": "delivery",
									"name": "Expresso",
									"deliveryIds": [
										{
											"courierId": "1c59d1c",
											"warehouseId": "1",
											"dockId": "5",
											"courierName": "intelipost_intelipost_2_t0298",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "7bd",
									"shippingEstimateAux": "Em até 7 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 976,
									"listPrice": 976,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "5bd"
								},
								{
									"id": "pickup_pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup_pickup (18)",
									"deliveryIds": [
										{
											"courierId": "2",
											"warehouseId": "1_1",
											"dockId": "1",
											"courierName": "CliqueRetire",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "2h",
									"shippingEstimateAux": "Pronto em até 2 horas",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": null
									},
									"pickupPointId": "pernambucanasqa018_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "2h"
								},
								{
									"id": "pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (18)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3016)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3016)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Pefisa EC (apenas para funcionários)",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3016",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2387",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3016",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (56)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (56)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Direita",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "56",
											"isDisposable": true,
											"postalCode": "01002-001",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Direita",
											"number": "226",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63565,
												-23.54816
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_56",
									"pickupDistance": 1.9507374,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (54)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (54)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Augusta",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "54",
											"isDisposable": true,
											"postalCode": "01426-000",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Augusta",
											"number": "2721",
											"neighborhood": "Cerqueira César",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.66677,
												-23.56476
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_54",
									"pickupDistance": 2.0169256,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3003)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3003)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua São Bento",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3003",
											"isDisposable": true,
											"postalCode": "01011-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua São Bento",
											"number": "360",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63506,
												-23.54606
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3003",
									"pickupDistance": 2.0529556,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (377)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (377)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Shopping West Plaza",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "377",
											"isDisposable": true,
											"postalCode": "05003-020",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Av. Antártica",
											"number": "408 - LJ  1201",
											"neighborhood": "Perdizes",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.67425,
												-23.52729
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_377",
									"pickupDistance": 3.260175,
									"polygonName": "",
									"transitTime": "30bd"
								}
							],
							"deliveryChannels": [
								{
									"id": "delivery"
								},
								{
									"id": "pickup-in-point"
								}
							]
						},
						{
							"itemIndex": 2,
							"addressId": null,
							"selectedSla": null,
							"selectedDeliveryChannel": null,
							"quantity": 1,
							"shipsTo": [
								"BRA"
							],
							"itemId": null,
							"slas": [
								{
									"id": "Normal",
									"deliveryChannel": "delivery",
									"name": "Normal",
									"deliveryIds": [
										{
											"courierId": "288",
											"warehouseId": "1",
											"dockId": "1",
											"courierName": "intelipost_intelipost_4_t0288",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "4bd",
									"shippingEstimateAux": "Em até 4 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 1,
									"listPrice": 1,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "2bd"
								},
								{
									"id": "Expresso",
									"deliveryChannel": "delivery",
									"name": "Expresso",
									"deliveryIds": [
										{
											"courierId": "1c59d1c",
											"warehouseId": "1",
											"dockId": "5",
											"courierName": "intelipost_intelipost_2_t0298",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "7bd",
									"shippingEstimateAux": "Em até 7 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 1,
									"listPrice": 1,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "5bd"
								},
								{
									"id": "pickup_pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup_pickup (18)",
									"deliveryIds": [
										{
											"courierId": "2",
											"warehouseId": "1_1",
											"dockId": "1",
											"courierName": "CliqueRetire",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "2h",
									"shippingEstimateAux": "Pronto em até 2 horas",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": null
									},
									"pickupPointId": "pernambucanasqa018_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "2h"
								},
								{
									"id": "pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (18)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3016)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3016)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Pefisa EC (apenas para funcionários)",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3016",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2387",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3016",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (56)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (56)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Direita",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "56",
											"isDisposable": true,
											"postalCode": "01002-001",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Direita",
											"number": "226",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63565,
												-23.54816
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_56",
									"pickupDistance": 1.9507374,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (54)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (54)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Augusta",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "54",
											"isDisposable": true,
											"postalCode": "01426-000",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Augusta",
											"number": "2721",
											"neighborhood": "Cerqueira César",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.66677,
												-23.56476
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_54",
									"pickupDistance": 2.0169256,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3003)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3003)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua São Bento",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3003",
											"isDisposable": true,
											"postalCode": "01011-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua São Bento",
											"number": "360",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63506,
												-23.54606
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3003",
									"pickupDistance": 2.0529556,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (377)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (377)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Shopping West Plaza",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "377",
											"isDisposable": true,
											"postalCode": "05003-020",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Av. Antártica",
											"number": "408 - LJ  1201",
											"neighborhood": "Perdizes",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.67425,
												-23.52729
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_377",
									"pickupDistance": 3.260175,
									"polygonName": "",
									"transitTime": "30bd"
								}
							],
							"deliveryChannels": [
								{
									"id": "delivery"
								},
								{
									"id": "pickup-in-point"
								}
							]
						},
						{
							"itemIndex": 3,
							"addressId": null,
							"selectedSla": null,
							"selectedDeliveryChannel": null,
							"quantity": 1,
							"shipsTo": [
								"BRA"
							],
							"itemId": null,
							"slas": [
								{
									"id": "Normal",
									"deliveryChannel": "delivery",
									"name": "Normal",
									"deliveryIds": [
										{
											"courierId": "288",
											"warehouseId": "1",
											"dockId": "1",
											"courierName": "intelipost_intelipost_4_t0288",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "4bd",
									"shippingEstimateAux": "Em até 4 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 979,
									"listPrice": 979,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "2bd"
								},
								{
									"id": "Expresso",
									"deliveryChannel": "delivery",
									"name": "Expresso",
									"deliveryIds": [
										{
											"courierId": "1c59d1c",
											"warehouseId": "1",
											"dockId": "5",
											"courierName": "intelipost_intelipost_2_t0298",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "7bd",
									"shippingEstimateAux": "Em até 7 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 1952,
									"listPrice": 1952,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "5bd"
								},
								{
									"id": "pickup_pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup_pickup (18)",
									"deliveryIds": [
										{
											"courierId": "2",
											"warehouseId": "1_1",
											"dockId": "1",
											"courierName": "CliqueRetire",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "2h",
									"shippingEstimateAux": "Pronto em até 2 horas",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": null
									},
									"pickupPointId": "pernambucanasqa018_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "2h"
								},
								{
									"id": "pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (18)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3016)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3016)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Pefisa EC (apenas para funcionários)",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3016",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2387",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3016",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (56)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (56)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Direita",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "56",
											"isDisposable": true,
											"postalCode": "01002-001",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Direita",
											"number": "226",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63565,
												-23.54816
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_56",
									"pickupDistance": 1.9507374,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (54)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (54)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Augusta",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "54",
											"isDisposable": true,
											"postalCode": "01426-000",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Augusta",
											"number": "2721",
											"neighborhood": "Cerqueira César",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.66677,
												-23.56476
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_54",
									"pickupDistance": 2.0169256,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3003)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3003)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua São Bento",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3003",
											"isDisposable": true,
											"postalCode": "01011-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua São Bento",
											"number": "360",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63506,
												-23.54606
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3003",
									"pickupDistance": 2.0529556,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (377)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (377)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Shopping West Plaza",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "377",
											"isDisposable": true,
											"postalCode": "05003-020",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Av. Antártica",
											"number": "408 - LJ  1201",
											"neighborhood": "Perdizes",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.67425,
												-23.52729
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_377",
									"pickupDistance": 3.260175,
									"polygonName": "",
									"transitTime": "30bd"
								}
							],
							"deliveryChannels": [
								{
									"id": "delivery"
								},
								{
									"id": "pickup-in-point"
								}
							]
						},
						{
							"itemIndex": 4,
							"addressId": null,
							"selectedSla": null,
							"selectedDeliveryChannel": null,
							"quantity": 1,
							"shipsTo": [
								"BRA"
							],
							"itemId": null,
							"slas": [
								{
									"id": "Normal",
									"deliveryChannel": "delivery",
									"name": "Normal",
									"deliveryIds": [
										{
											"courierId": "288",
											"warehouseId": "1",
											"dockId": "1",
											"courierName": "intelipost_intelipost_4_t0288",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "4bd",
									"shippingEstimateAux": "Em até 4 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 327,
									"listPrice": 327,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "2bd"
								},
								{
									"id": "Expresso",
									"deliveryChannel": "delivery",
									"name": "Expresso",
									"deliveryIds": [
										{
											"courierId": "1c59d1c",
											"warehouseId": "1",
											"dockId": "5",
											"courierName": "intelipost_intelipost_2_t0298",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "7bd",
									"shippingEstimateAux": "Em até 7 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 651,
									"listPrice": 651,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "5bd"
								},
								{
									"id": "pickup_pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup_pickup (18)",
									"deliveryIds": [
										{
											"courierId": "2",
											"warehouseId": "1_1",
											"dockId": "1",
											"courierName": "CliqueRetire",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "2h",
									"shippingEstimateAux": "Pronto em até 2 horas",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": null
									},
									"pickupPointId": "pernambucanasqa018_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "2h"
								},
								{
									"id": "pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (18)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3016)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3016)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Pefisa EC (apenas para funcionários)",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3016",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2387",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3016",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (56)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (56)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Direita",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "56",
											"isDisposable": true,
											"postalCode": "01002-001",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Direita",
											"number": "226",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63565,
												-23.54816
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_56",
									"pickupDistance": 1.9507374,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (54)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (54)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Augusta",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "54",
											"isDisposable": true,
											"postalCode": "01426-000",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Augusta",
											"number": "2721",
											"neighborhood": "Cerqueira César",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.66677,
												-23.56476
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_54",
									"pickupDistance": 2.0169256,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3003)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3003)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua São Bento",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3003",
											"isDisposable": true,
											"postalCode": "01011-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua São Bento",
											"number": "360",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63506,
												-23.54606
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3003",
									"pickupDistance": 2.0529556,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (377)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (377)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Shopping West Plaza",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "377",
											"isDisposable": true,
											"postalCode": "05003-020",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Av. Antártica",
											"number": "408 - LJ  1201",
											"neighborhood": "Perdizes",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.67425,
												-23.52729
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_377",
									"pickupDistance": 3.260175,
									"polygonName": "",
									"transitTime": "30bd"
								}
							],
							"deliveryChannels": [
								{
									"id": "delivery"
								},
								{
									"id": "pickup-in-point"
								}
							]
						},
						{
							"itemIndex": 5,
							"addressId": null,
							"selectedSla": null,
							"selectedDeliveryChannel": null,
							"quantity": 1,
							"shipsTo": [
								"BRA"
							],
							"itemId": null,
							"slas": [
								{
									"id": "Normal",
									"deliveryChannel": "delivery",
									"name": "Normal",
									"deliveryIds": [
										{
											"courierId": "288",
											"warehouseId": "1",
											"dockId": "1",
											"courierName": "intelipost_intelipost_4_t0288",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "4bd",
									"shippingEstimateAux": "Em até 4 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 1,
									"listPrice": 1,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "2bd"
								},
								{
									"id": "Expresso",
									"deliveryChannel": "delivery",
									"name": "Expresso",
									"deliveryIds": [
										{
											"courierId": "1c59d1c",
											"warehouseId": "1",
											"dockId": "5",
											"courierName": "intelipost_intelipost_2_t0298",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "7bd",
									"shippingEstimateAux": "Em até 7 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 3,
									"listPrice": 3,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "5bd"
								},
								{
									"id": "pickup_pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup_pickup (18)",
									"deliveryIds": [
										{
											"courierId": "2",
											"warehouseId": "1_1",
											"dockId": "1",
											"courierName": "CliqueRetire",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "2h",
									"shippingEstimateAux": "Pronto em até 2 horas",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": null
									},
									"pickupPointId": "pernambucanasqa018_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "2h"
								},
								{
									"id": "pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (18)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3016)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3016)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Pefisa EC (apenas para funcionários)",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3016",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2387",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3016",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (56)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (56)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Direita",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "56",
											"isDisposable": true,
											"postalCode": "01002-001",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Direita",
											"number": "226",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63565,
												-23.54816
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_56",
									"pickupDistance": 1.9507374,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (54)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (54)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Augusta",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "54",
											"isDisposable": true,
											"postalCode": "01426-000",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Augusta",
											"number": "2721",
											"neighborhood": "Cerqueira César",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.66677,
												-23.56476
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_54",
									"pickupDistance": 2.0169256,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3003)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3003)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua São Bento",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3003",
											"isDisposable": true,
											"postalCode": "01011-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua São Bento",
											"number": "360",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63506,
												-23.54606
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3003",
									"pickupDistance": 2.0529556,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (377)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (377)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 1,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Shopping West Plaza",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "377",
											"isDisposable": true,
											"postalCode": "05003-020",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Av. Antártica",
											"number": "408 - LJ  1201",
											"neighborhood": "Perdizes",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.67425,
												-23.52729
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_377",
									"pickupDistance": 3.260175,
									"polygonName": "",
									"transitTime": "30bd"
								}
							],
							"deliveryChannels": [
								{
									"id": "delivery"
								},
								{
									"id": "pickup-in-point"
								}
							]
						},
						{
							"itemIndex": 6,
							"addressId": null,
							"selectedSla": null,
							"selectedDeliveryChannel": null,
							"quantity": 2,
							"shipsTo": [
								"BRA"
							],
							"itemId": null,
							"slas": [
								{
									"id": "Normal",
									"deliveryChannel": "delivery",
									"name": "Normal",
									"deliveryIds": [
										{
											"courierId": "288",
											"warehouseId": "1",
											"dockId": "1",
											"courierName": "intelipost_intelipost_4_t0288",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "4bd",
									"shippingEstimateAux": "Em até 4 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 1,
									"listPrice": 1,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "2bd"
								},
								{
									"id": "Expresso",
									"deliveryChannel": "delivery",
									"name": "Expresso",
									"deliveryIds": [
										{
											"courierId": "1c59d1c",
											"warehouseId": "1",
											"dockId": "5",
											"courierName": "intelipost_intelipost_2_t0298",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "7bd",
									"shippingEstimateAux": "Em até 7 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 2,
									"listPrice": 2,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": false,
										"friendlyName": null,
										"address": null,
										"additionalInfo": null,
										"dockId": null
									},
									"pickupPointId": null,
									"pickupDistance": 0,
									"polygonName": "",
									"transitTime": "5bd"
								},
								{
									"id": "pickup_pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup_pickup (18)",
									"deliveryIds": [
										{
											"courierId": "2",
											"warehouseId": "1_1",
											"dockId": "1",
											"courierName": "CliqueRetire",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "2h",
									"shippingEstimateAux": "Pronto em até 2 horas",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": null
									},
									"pickupPointId": "pernambucanasqa018_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "2h"
								},
								{
									"id": "pickup (18)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (18)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Consolação",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "18",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2403",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_18",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3016)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3016)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Pefisa EC (apenas para funcionários)",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3016",
											"isDisposable": true,
											"postalCode": "01301-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Da Consolação",
											"number": "2387",
											"neighborhood": "Consolação",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.6623,
												-23.5554
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3016",
									"pickupDistance": 0.9572106,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (56)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (56)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Direita",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "56",
											"isDisposable": true,
											"postalCode": "01002-001",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Direita",
											"number": "226",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63565,
												-23.54816
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_56",
									"pickupDistance": 1.9507374,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (54)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (54)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua Augusta",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "54",
											"isDisposable": true,
											"postalCode": "01426-000",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua Augusta",
											"number": "2721",
											"neighborhood": "Cerqueira César",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.66677,
												-23.56476
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_54",
									"pickupDistance": 2.0169256,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (3003)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (3003)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Rua São Bento",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "3003",
											"isDisposable": true,
											"postalCode": "01011-100",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Rua São Bento",
											"number": "360",
											"neighborhood": "Centro",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.63506,
												-23.54606
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_3003",
									"pickupDistance": 2.0529556,
									"polygonName": "",
									"transitTime": "30bd"
								},
								{
									"id": "pickup (377)",
									"deliveryChannel": "pickup-in-point",
									"name": "pickup (377)",
									"deliveryIds": [
										{
											"courierId": "1",
											"warehouseId": "1",
											"dockId": "2",
											"courierName": "pickup_pickup_t139",
											"quantity": 2,
											"kitItemDetails": []
										}
									],
									"shippingEstimate": "30bd",
									"shippingEstimateAux": "Pronto em até 30 dias úteis",
									"shippingEstimateDate": null,
									"lockTTL": null,
									"availableDeliveryWindows": [],
									"deliveryWindow": null,
									"price": 0,
									"listPrice": 0,
									"tax": 0,
									"pickupStoreInfo": {
										"isPickupStore": true,
										"friendlyName": "Shopping West Plaza",
										"address": {
											"addressType": "pickup",
											"receiverName": null,
											"addressId": "377",
											"isDisposable": true,
											"postalCode": "05003-020",
											"city": "São Paulo",
											"state": "SP",
											"country": "BRA",
											"street": "Av. Antártica",
											"number": "408 - LJ  1201",
											"neighborhood": "Perdizes",
											"complement": "",
											"reference": null,
											"geoCoordinates": [
												-46.67425,
												-23.52729
											]
										},
										"additionalInfo": "",
										"dockId": "2"
									},
									"pickupPointId": "1_377",
									"pickupDistance": 3.260175,
									"polygonName": "",
									"transitTime": "30bd"
								}
							],
							"deliveryChannels": [
								{
									"id": "delivery"
								},
								{
									"id": "pickup-in-point"
								}
							]
						}
					]
				}

				this.cart.logisticsInfo = resp.logisticsInfo
				this.cart.paymentData = resp.paymentData

				await this.groupBy(resp.logisticsInfo)
				
				// this.cart = resp
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
				
				let resp = {
					"orderFormId": "f8b4da78-c50d-4298-9c55-cc2d99f34c3d",
					"salesChannel": "1",
					"loggedIn": false,
					"isCheckedIn": false,
					"storeId": null,
					"checkedInPickupPointId": null,
					"allowManualPrice": false,
					"canEditData": true,
					"userProfileId": "2b5c1c38-a6aa-4709-a018-672fe3703ccd",
					"userType": null,
					"ignoreProfileData": false,
					"value": 74983,
					"messages": [],
					"items": [
						{
							"id": "81509",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Lince Relógio 5 Atm Bege Metal",
							"skuName": "Lince Relógio 5 Atm Bege Metal",
							"productId": "1022",
							"refId": "921612000000",
							"ean": "92161200085",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/394936-55-55/Lince-Relogio-5-Atm-Bege-Metal.jpg?v=637812531096070000",
							"detailUrl": "/lince-relogio-5-atm-bege-metal-921612000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:38:55Z",
							"price": 22999,
							"listPrice": 22999,
							"rewardValue": 0,
							"sellingPrice": 22999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 22999,
								"total": 22999,
								"sellingPrices": [
									{
										"value": 22999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109103",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Conjunto Menina Com Babados Manga Longa Estampa Minnie Branco 1",
							"skuName": "1",
							"productId": "36504",
							"refId": "951961000100",
							"ean": "95196100108",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781777-55-55/Conjunto-Menina-Com-Babados-Manga-Longa-Estampa-Minnie-Branco.jpg?v=637829376341800000",
							"detailUrl": "/conjunto-menina-com-babados-manga-longa-estampa-minnie-branco951961000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:38:55Z",
							"price": 4999,
							"listPrice": 4999,
							"rewardValue": 0,
							"sellingPrice": 4999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 4999,
								"total": 4999,
								"sellingPrices": [
									{
										"value": 4999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "70045",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"skuName": "Relogio Mondaine Masculino Prata P2 Analogico 99143G0Mvne5",
							"productId": "1059",
							"refId": "922116000000",
							"ean": "7909669059127",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/360837-55-55/Relogio-Mondaine-Masculino-Prata-P2-Analogico-99143G0Mvne5.jpg?v=637812508867900000",
							"detailUrl": "/relogio-mondaine-masculino-prata-p2-analogico-99143g0mvne5-922116000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:38:55Z",
							"price": 19999,
							"listPrice": 19999,
							"rewardValue": 0,
							"sellingPrice": 19999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 19999,
								"total": 19999,
								"sellingPrices": [
									{
										"value": 19999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109062",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Óculos Unissex Metal Hexagonal Tartaruga Verde UNICO",
							"skuName": "UNICO",
							"productId": "36476",
							"refId": "951637000100",
							"ean": "95163700188",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781748-55-55/Oculos-Unissex-Metal-Hexagonal-Tartaruga-Verde.jpg?v=637829376317070000",
							"detailUrl": "/oculos-unissex-metal-hexagonal-tartaruga-verde-951637000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:38:55Z",
							"price": 5999,
							"listPrice": 5999,
							"rewardValue": 0,
							"sellingPrice": 5999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 5999,
								"total": 5999,
								"sellingPrices": [
									{
										"value": 5999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "109042",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Cinto Liso Marrom M",
							"skuName": "M",
							"productId": "36459",
							"refId": "950737000300",
							"ean": "95073700353",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/781659-55-55/Cinto-Liso-Marrom.jpg?v=637829376278030000",
							"detailUrl": "/cinto-liso-marrom950737000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:38:55Z",
							"price": 3999,
							"listPrice": 3999,
							"rewardValue": 0,
							"sellingPrice": 3999,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 3999,
								"total": 3999,
								"sellingPrices": [
									{
										"value": 3999,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "2044",
							"requestIndex": null,
							"quantity": 1,
							"seller": "1",
							"name": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"skuName": "Barbeador Elétrico Gama Gsh900 Bivolt",
							"productId": "1789",
							"refId": "870624000000",
							"ean": "8023277109971",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/513832-55-55/Barbeador-Eletrico-Gama-Gsh900-Bivolt.png?v=637825723642800000",
							"detailUrl": "/barbeador-eltrico-gama-gsh900-bivolt870624000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:38:55Z",
							"price": 13990,
							"listPrice": 13990,
							"rewardValue": 0,
							"sellingPrice": 13990,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 13990,
								"total": 13990,
								"sellingPrices": [
									{
										"value": 13990,
										"quantity": 1
									}
								]
							}
						},
						{
							"id": "98509",
							"requestIndex": null,
							"quantity": 2,
							"seller": "1",
							"name": "Meia Masculina Estampada Snoopy 39/43",
							"skuName": "39/43",
							"productId": "22074",
							"refId": "937176000100",
							"ean": "093717600151",
							"imageUrl": "http://pernambucanasqa.vteximg.com.br/arquivos/ids/777395-55-55/Meia-Masculina-Estampada-Snoopy.jpg?v=637829372260500000",
							"detailUrl": "/meia-masculina-estampada-snoopy-937176000000/p",
							"assemblyOptions": null,
							"sellerChain": [
								"1"
							],
							"tax": 0,
							"priceValidUntil": "2024-04-05T13:38:55Z",
							"price": 599,
							"listPrice": 599,
							"rewardValue": 0,
							"sellingPrice": 599,
							"offerings": [],
							"priceTags": [],
							"measurementUnit": "un",
							"unitMultiplier": 1,
							"parentItemIndex": null,
							"parentAssemblyBinding": null,
							"availability": "available",
							"catalogProvider": null,
							"priceDefinition": {
								"calculatedSellingPrice": 599,
								"total": 1198,
								"sellingPrices": [
									{
										"value": 599,
										"quantity": 2
									}
								]
							}
						}
					],
					"selectableGifts": [],
					"totalizers": [
						{
							"id": "Items",
							"name": "Total dos Itens",
							"value": 73183
						},
						{
							"id": "Shipping",
							"name": "Total do Frete",
							"value": 1800
						}
					],
					"shippingData": {
						"address": {
							"addressType": "residential",
							"receiverName": "Nome Sobre nome",
							"addressId": "4c57be8850d742178e8e14c685a21819",
							"isDisposable": true,
							"postalCode": "01301-100",
							"city": "São Paulo",
							"state": "SP",
							"country": "BRA",
							"street": "Rua da Consolação",
							"number": "8",
							"neighborhood": "Consolação",
							"complement": "Complemento",
							"reference": "",
							"geoCoordinates": [
								0,
								0
							]
						},
						"logisticsInfo": [
							{
								"itemIndex": 0,
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "81509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "288",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "4bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "2bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "7bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "5bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 1,
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109103",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "288",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "4bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 490,
										"listPrice": 490,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "2bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "7bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 976,
										"listPrice": 976,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "5bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 2,
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "70045",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "288",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "4bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "2bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "7bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "5bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 3,
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109062",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "288",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "4bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 979,
										"listPrice": 979,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "2bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "7bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1952,
										"listPrice": 1952,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "5bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 4,
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "109042",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "288",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "4bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 327,
										"listPrice": 327,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "2bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "7bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 651,
										"listPrice": 651,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "5bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 5,
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "2044",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "288",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "4bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "2bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 1,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "7bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 3,
										"listPrice": 3,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "5bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							},
							{
								"itemIndex": 6,
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"selectedSla": "Normal",
								"selectedDeliveryChannel": "delivery",
								"quantity": 0,
								"shipsTo": [
									"BRA"
								],
								"itemId": "98509",
								"slas": [
									{
										"id": "Normal",
										"deliveryChannel": "delivery",
										"name": "Normal",
										"deliveryIds": [
											{
												"courierId": "288",
												"warehouseId": "1",
												"dockId": "1",
												"courierName": "intelipost_intelipost_4_t0288",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "4bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 1,
										"listPrice": 1,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "2bd"
									},
									{
										"id": "Expresso",
										"deliveryChannel": "delivery",
										"name": "Expresso",
										"deliveryIds": [
											{
												"courierId": "1c59d1c",
												"warehouseId": "1",
												"dockId": "5",
												"courierName": "intelipost_intelipost_2_t0298",
												"quantity": 2,
												"kitItemDetails": []
											}
										],
										"shippingEstimate": "7bd",
										"shippingEstimateAux": null,
										"shippingEstimateDate": null,
										"lockTTL": null,
										"availableDeliveryWindows": [],
										"deliveryWindow": null,
										"price": 2,
										"listPrice": 2,
										"tax": 0,
										"pickupStoreInfo": {
											"isPickupStore": false,
											"friendlyName": null,
											"address": null,
											"additionalInfo": null,
											"dockId": null
										},
										"pickupPointId": null,
										"pickupDistance": 0,
										"polygonName": "",
										"transitTime": "5bd"
									}
								],
								"deliveryChannels": [
									{
										"id": "delivery"
									},
									{
										"id": "pickup-in-point"
									}
								]
							}
						],
						"selectedAddresses": [
							{
								"addressType": "residential",
								"receiverName": "Nome Sobre nome",
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "8",
								"neighborhood": "Consolação",
								"complement": "Complemento",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"availableAddresses": [
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-8402679367805",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4dbcb50474314e2a9a52a82097268d95",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111719468",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "b4d9d2642e9242029efc5bed541c5e86",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "ad683ad67b934476814b9cd294dfecfc",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "",
								"neighborhood": "Consolação",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361267416812",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "95e89e6d050d4bbea6dcbea420470639",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0794dcdc0a6e495e94cd8e298383dee8",
								"isDisposable": true,
								"postalCode": "01301100",
								"city": null,
								"state": null,
								"country": "BRA",
								"street": null,
								"number": null,
								"neighborhood": null,
								"complement": null,
								"reference": null,
								"geoCoordinates": []
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3df4b62d1168490686b93a113727e54d",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361289891102",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-1680532837668",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "8d0eaaf9094b456fb85d34f074105d8f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "1",
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "7ee227b6d8c6402b849acff44a874b71",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "72e9a7d5616b499aadd868a7e5f82d60",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2eb6e45c4423448f818abb5a60fe723a",
								"isDisposable": true,
								"postalCode": "41098-020",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Alameda Euvaldo Luz",
								"number": "92",
								"neighborhood": "Horto Bela Vista",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "80d04621d51046c6b594375dde5a24f9",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4f4d08966ae641ca997241b6e3f0d26f",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": null,
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "0ea529788811477a93a6a159e12155fe",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Casa 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-3361111977394",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.35043,
									-12.91109
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bc09dc106d924f26be844c61f01b036a",
								"isDisposable": false,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "8",
								"neighborhood": "Consolação",
								"complement": "casa 7",
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "-5041604556543",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua Da Consolação",
								"number": "2403",
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.6623,
									-23.5554
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "e9b8e28873074a6c8afbfcd17a903e2b",
								"isDisposable": true,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "8",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "cs 7",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "4e3e16202b184bc08b840a08401f6a22",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "2479138162d54d2fbd4d01c7082c7837",
								"isDisposable": true,
								"postalCode": "41730-101",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "Avenida Luís Viana Filho",
								"number": "8544",
								"neighborhood": "Alphaville",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "bb7c8a57fee34b819ccea319fcf0009b",
								"isDisposable": true,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "df8cdbd0d3994303a0682709b6160b15",
								"isDisposable": false,
								"postalCode": "42826740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": "Dunas de abrantes",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "28a8e7a3fa8f405dbc36835aa4293bfa",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3360191616670",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": null,
								"neighborhood": "Consolação",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-46.654625,
									-23.55044
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Joseandeson Jesus",
								"addressId": "5040287425005",
								"isDisposable": false,
								"postalCode": "42826-740",
								"city": "Camaçari",
								"state": "BA",
								"country": "BRA",
								"street": "2ª Travessa Guaraema",
								"number": "7",
								"neighborhood": "Nova Abrantes (Abrantes)",
								"complement": null,
								"reference": null,
								"geoCoordinates": [
									-38.265625,
									-12.8392
								]
							},
							{
								"addressType": "search",
								"receiverName": "Joseandeson Jesus",
								"addressId": "3b246a4e8a3a481cb05e105d61183370",
								"isDisposable": true,
								"postalCode": "41510-000",
								"city": "Salvador",
								"state": "BA",
								"country": "BRA",
								"street": "BA-526",
								"number": "305",
								"neighborhood": "São Cristóvão",
								"complement": "",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Nome Sobre nome",
								"addressId": "527c6051b37c49ef898c8801e8bb046c",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "8",
								"neighborhood": "Consolação",
								"complement": "Complemento",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							},
							{
								"addressType": "residential",
								"receiverName": "Nome Sobre nome",
								"addressId": "4c57be8850d742178e8e14c685a21819",
								"isDisposable": true,
								"postalCode": "01301-100",
								"city": "São Paulo",
								"state": "SP",
								"country": "BRA",
								"street": "Rua da Consolação",
								"number": "8",
								"neighborhood": "Consolação",
								"complement": "Complemento",
								"reference": "",
								"geoCoordinates": [
									0,
									0
								]
							}
						],
						"pickupPoints": []
					},
					"clientProfileData": {
						"email": "joseandesonjesus@gmail.com",
						"firstName": "Nome",
						"lastName": "Sobre nome",
						"document": "cpf",
						"documentType": "CPF",
						"phone": "telefone",
						"corporateName": null,
						"tradeName": null,
						"corporateDocument": null,
						"stateInscription": null,
						"corporatePhone": null,
						"isCorporate": false,
						"profileCompleteOnLoading": false,
						"profileErrorOnLoading": false,
						"customerClass": null
					},
					"paymentData": {
						"installmentOptions": [
							{
								"paymentSystem": "1",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "2",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "3",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "4",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "8",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "9",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "16",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "17",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "125",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "401",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							},
							{
								"paymentSystem": "402",
								"bin": null,
								"paymentName": null,
								"paymentGroupName": null,
								"value": 74983,
								"installments": [
									{
										"count": 1,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 74983,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 1,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 74983,
												"total": 74983
											}
										]
									},
									{
										"count": 2,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 37491,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 2,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 37491,
												"total": 74983
											}
										]
									},
									{
										"count": 3,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 24994,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 3,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 24994,
												"total": 74983
											}
										]
									},
									{
										"count": 4,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 18745,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 4,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 18745,
												"total": 74983
											}
										]
									},
									{
										"count": 5,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 14996,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 5,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 14996,
												"total": 74983
											}
										]
									},
									{
										"count": 6,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 12497,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 6,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 12497,
												"total": 74983
											}
										]
									},
									{
										"count": 7,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 10711,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 7,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 10711,
												"total": 74983
											}
										]
									},
									{
										"count": 8,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 9372,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 8,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 9372,
												"total": 74983
											}
										]
									},
									{
										"count": 9,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 8331,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 9,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 8331,
												"total": 74983
											}
										]
									},
									{
										"count": 10,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 7498,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 10,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 7498,
												"total": 74983
											}
										]
									},
									{
										"count": 11,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6816,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 11,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6816,
												"total": 74983
											}
										]
									},
									{
										"count": 12,
										"hasInterestRate": false,
										"interestRate": 0,
										"value": 6248,
										"total": 74983,
										"sellerMerchantInstallments": [
											{
												"id": "PERNAMBUCANASQA",
												"count": 12,
												"hasInterestRate": false,
												"interestRate": 0,
												"value": 6248,
												"total": 74983
											}
										]
									}
								]
							}
						],
						"paymentSystems": [
							{
								"id": 17,
								"name": "Promissory",
								"groupName": "promissoryPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "17",
								"template": "promissoryPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 16,
								"name": "Vale",
								"groupName": "giftCardPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "16",
								"template": "giftCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 125,
								"name": "Pix",
								"groupName": "instantPaymentPaymentGroup",
								"validator": {
									"regex": null,
									"mask": null,
									"cardCodeRegex": null,
									"cardCodeMask": null,
									"weights": null,
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": false,
									"useBillingAddress": false
								},
								"stringId": "125",
								"template": "instantPaymentPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 2,
								"name": "Visa",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^4[0-9]{15}$",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "2",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 1,
								"name": "American Express",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^3[47][0-9]{13}$",
									"mask": "9999 999999 99999",
									"cardCodeRegex": "^[0-9]{4}$",
									"cardCodeMask": "9999",
									"weights": [
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "1",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 3,
								"name": "Diners",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^3(0[0-5]|[68][0-9])[0-9]{11}$",
									"mask": "9999 999999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "3",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 4,
								"name": "Mastercard",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "4",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 8,
								"name": "Hipercard",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^606282|^3841(?:[0|4|6]{1})0",
									"mask": "9999999999999999999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										1,
										1,
										1
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "8",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 9,
								"name": "Elo",
								"groupName": "creditCardPaymentGroup",
								"validator": {
									"regex": "^(50(67(0[78]|1[5789]|2[012456789]|3[01234569]|4[0-7]|53|7[4-8])|9(0(0[0-9]|1[34]|2[0-7]|3[0359]|4[01235678]|5[01235789]|6[0-9]|7[01346789]|8[01234789]|9[123479])|1(0[34568]|4[6-9]|5[1-8]|8[356789])|2(2[0-2]|5[78]|6[1-9]|7[0-9]|8[01235678]|90)|357|4(0[7-9]|1[0-9]|2[0-2]|31|5[7-9]|6[0-6]|84)|55[01]|636|7(2[2-9]|6[5-9])))|4(0117[89]|3(1274|8935)|5(1416|7(393|63[12])))|6(27780|36368|5(0(0(3[12356789]|4[0-7]|7[78])|4(0[6-9]|1[0234]|2[2-9]|3[045789]|8[5-9]|9[0-9])|5(0[012346789]|1[0-9]|2[0-9]|3[0178]|5[2-9]|6[0-6]|7[7-9]|8[0-8]|9[1-8])|72[0-7]|9(0[1-9]|1[0-9]|2[0128]|3[89]|4[6-9]|5[0145]|6[235678]|71))|16(5[2-9]|6[0-9]|7[01456789])|50(0[0-9]|1[02345678]|36|5[1267]))))\\d{0,13}$",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2,
										1,
										2
									],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "9",
								"template": "creditCardPaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": false,
								"description": null,
								"requiresAuthentication": false,
								"dueDate": "2023-04-12T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 402,
								"name": "Cartão Pernambucanas Elo",
								"groupName": "customPrivate_402PaymentGroup",
								"validator": {
									"regex": "5(0(9(2(7(4)))))|6(5(0(5(1(6)))))|6(5(0(5(1(7)))))|6(5(0(5(9(7)))))|6(5(5(0(1(2)))))|6(5(0(5(2(4)))))",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "^[0-9]{3}$",
									"cardCodeMask": "999",
									"weights": [],
									"useCvv": true,
									"useExpirationDate": true,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "402",
								"template": "customPrivate_402PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas Elo",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:33:58.8236267Z",
								"availablePayments": null
							},
							{
								"id": 401,
								"name": "Cartão Pernambucanas",
								"groupName": "customPrivate_401PaymentGroup",
								"validator": {
									"regex": "6(0(8(6(1(9)))))",
									"mask": "9999 9999 9999 9999",
									"cardCodeRegex": "*",
									"cardCodeMask": "null",
									"weights": [],
									"useCvv": false,
									"useExpirationDate": false,
									"useCardHolderName": true,
									"useBillingAddress": true
								},
								"stringId": "401",
								"template": "customPrivate_401PaymentGroup-template",
								"requiresDocument": false,
								"displayDocument": false,
								"isCustom": true,
								"description": "Cartão Pernambucanas",
								"requiresAuthentication": false,
								"dueDate": "2023-04-15T13:33:58.8236267Z",
								"availablePayments": null
							}
						],
						"payments": [
							{
								"paymentSystem": "17",
								"bin": null,
								"accountId": null,
								"tokenId": null,
								"installments": 1,
								"referenceValue": 74983,
								"value": 74983,
								"merchantSellerPayments": [
									{
										"id": "PERNAMBUCANASQA",
										"installments": 1,
										"referenceValue": 74983,
										"value": 74983,
										"interestRate": 0,
										"installmentValue": 74983
									}
								]
							}
						],
						"giftCards": [],
						"giftCardMessages": [],
						"availableAccounts": [],
						"availableTokens": [],
						"availableAssociations": {}
					},
					"marketingData": null,
					"sellers": [
						{
							"id": "1",
							"name": "Pernambucanas",
							"logo": ""
						}
					],
					"clientPreferencesData": {
						"locale": "pt-BR",
						"optinNewsLetter": false
					},
					"commercialConditionData": null,
					"storePreferencesData": {
						"countryCode": "BRA",
						"saveUserData": true,
						"timeZone": "E. South America Standard Time",
						"currencyCode": "BRL",
						"currencyLocale": 1046,
						"currencySymbol": "R$",
						"currencyFormatInfo": {
							"currencyDecimalDigits": 2,
							"currencyDecimalSeparator": ",",
							"currencyGroupSeparator": ".",
							"currencyGroupSize": 3,
							"startsWithCurrencySymbol": true
						}
					},
					"giftRegistryData": null,
					"openTextField": null,
					"invoiceData": null,
					"customData": null,
					"hooksData": null,
					"ratesAndBenefitsData": {
						"rateAndBenefitsIdentifiers": [],
						"teaser": []
					},
					"subscriptionData": null,
					"merchantContextData": null,
					"itemsOrdination": null,
					"logisticsInfo": null
				}


				this.cart = resp
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

				

				this.shippingData = {
										clearAddressIfPostalCodeNotFound: false,
													   selectedAddresses: this.selectedAddresses,
														   logisticsInfo: this.logisticsInfo						
									}

									
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
