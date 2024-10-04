import Article from './article.ts'
import ProjectCategory from './projectCategory.ts'

class Project {
	id: number
	name: string
	categories: Array<ProjectCategory>
	description: string
	image: string
	finishDate: Date
	article: Article

	constructor(info:any) {
		this.id = info.id		
		this.name = info.name		
		this.categories = info.categories
		this.description = info.description
		this.image = info.image	
		this.finishDate = info.finishDate
		this.article = info.article	
	}

	loadArticle() {
		if (!this.article)
			return undefined
		return this.article.load()
	}
}

export default Project