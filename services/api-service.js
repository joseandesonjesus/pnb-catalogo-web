import {defineStore} from 'pinia'

const route = useDictionary()
const toast = useToast()
const apiUse = useApi()

export const useApiStore = defineStore('api', {
	state() {
		return {
			user: null,
			categories: null,
		}
	},
	actions: {
		async doPostUser(value) {
			try {
				this.user = await apiUse.post(
					`manager/${route.ManagerLoginV2}`,
					value,
				)

				toast.success(`usuário logado com sucesso!`)
			} catch (error) {
				this.user = null

				toast.error(`Usuário ou senha inválidos!`)

				console.error('doPostUser => ', error)
			}
		},
	},
	getters: {
		getUser() {
			return this.user
		},
	},
})
