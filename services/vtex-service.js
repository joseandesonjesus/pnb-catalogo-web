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
				let resp = await apiUse.get(`api/${route.VtexListCategory}`)
				let collectionCategory = []
				let objResp = Object.assign(resp.data)
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
