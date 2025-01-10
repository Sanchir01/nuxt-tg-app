import { defineStore } from 'pinia'
import {
	useWebApp,
	useWebAppCloudStorage,
	useWebAppPopup,
	useWebAppRequests
} from 'vue-tg'
export interface IDataUnsafe {
	auth_data: string
	chat_instance: string
	chat_type: string
	hash: string
	user: {
		allows_write_to_pm: boolean
		first_name: string
		id: number
		language_code: string
		username: string
	}
}
export interface IDefaultUserState {
	webApp: { version: string } | null
	dataUnsafe: IDataUnsafe | null
	contactInfo: RequestContactResponse | null
}

const defaultUserState: IDefaultUserState = {
	webApp: null,
	dataUnsafe: null,
	contactInfo: null
}
export const useTgWebAppStore = defineStore('tgWebAppStore', {
	state: () => defaultUserState,
	actions: {
		init() {
			this.webApp = useWebApp()

			if (this.webApp.version >= '6.0') {
				this.initDataUnsafe()
			}
		},
		async initDataUnsafe() {
			const data = await useWebAppCloudStorage()
				.getStorageItem('initDataUnsafe')
				.catch(e => console.log(e))
			if (typeof data === 'string' && data !== '') {
				console.log(data)
				this.dataUnsafe = useWebApp().initDataUnsafe
				useWebAppCloudStorage().setStorageItem(
					'initDataUnsafe',
					JSON.stringify(this.dataUnsafe)
				)
				return
			}
			this.dataUnsafe = JSON.parse(data)
		},
		async contactData() {
			const data = await useWebAppCloudStorage().getStorageItem('contactData')
			if (typeof data === 'string' && data !== '') {
				console.log(data)
				this.contactInfo = useWebAppRequests().requestContact(
					(ok, response) => {
						if (ok) {
							console.log(ok, JSON.stringify(response.responseUnsafe.contact))
							this.contactInfo = response.responseUnsafe.contact
							useWebAppCloudStorage().setStorageItem(
								'contactData',
								JSON.stringify(response.responseUnsafe.contact)
							)
							return
						}
						useWebAppPopup().showAlert('Телефон не получен')
					}
				)
				useWebAppCloudStorage().setStorageItem(
					'contactData',
					JSON.stringify(this.contactData)
				)
				return
			}
			this.dataUnsafe = JSON.parse(data)
		}
	}
})
