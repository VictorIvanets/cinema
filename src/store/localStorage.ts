class LocalStorage {
	  loadState<T>(key: string): T | undefined {
		try {
			const jsonState = localStorage.getItem(key)
			if (!jsonState) {
				return undefined
			}
			return JSON.parse(jsonState)
		} catch (e) {
			console.error(e)
			return undefined
		}
	}
	  saveState<T>(state: T, key: string) {
		const stringState = JSON.stringify(state)
		localStorage.setItem(key, stringState)
	}
}

 const useLocalStorage = new LocalStorage()
 export default useLocalStorage






