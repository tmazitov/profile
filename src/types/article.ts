import API from "@/api"

class Article {
	isLoaded:boolean = false
	isInProgress:boolean = false
	name:string
	content:string|null = null
	constructor(name:string, isInProgress=false) {
		this.name = name
		this.isInProgress = isInProgress
	}

	load() {
		if (this.isLoaded || this.isInProgress) {
			return 
		}
		return API.getArticle(this.name).then((response) => {
			if (response.status >= 400) {
				throw new Error('Failed to load article')
			}
			this.content = response.data
			return response
		})
		.finally(() => this.isLoaded = true)
	}
}

export default Article