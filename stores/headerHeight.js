import {defineStore} from 'pinia'

export const useHeaderHeight = defineStore('headerHeight', {
	state: () => ({
		headerHeight: 0,
	}),
	actions: {
		setHeaderHeight(height) {
			this.headerHeight = height
		},
	},
})
