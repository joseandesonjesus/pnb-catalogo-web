import {defineStore} from 'pinia'

export const useCart = defineStore('cart', {
	state() {
		return {
			cartTotalItems: 0,
		}
	},
	actions: {
		incrementCartTotalItems() {
			this.cartTotalItems++
		},
	},
})
