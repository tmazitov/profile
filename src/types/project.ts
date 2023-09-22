import ProjectCategory from './projectCategory.ts'

class Project {
	id: number
	name: string
	categories: Array<ProjectCategory>
	description: string
	gif: string
	finishDate: Date

	constructor(info:any) {
		this.id = info.id		
		this.name = info.name		
		this.categories = info.categories
		this.description = info.description
		this.gif = info.gif	
		this.finishDate = info.finishDate	
	}
}

export default Project