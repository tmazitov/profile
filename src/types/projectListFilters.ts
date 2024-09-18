import { LocationQueryRaw, LocationQueryValue } from "vue-router"
import SelectableItem from "./selectableItem"
import Project from "./project"
class ProjectListFiltersInst {
	selectedCategories:	Array<SelectableItem>
	categories:	Array<SelectableItem>
	search: 	string

	constructor() {
		this.search = ""
		this.categories = []	
		this.selectedCategories = []	
	}

	setupCategories(categories: Array<SelectableItem>){
		if (!categories)
			return
		this.categories = categories
	}

	setupSearch(search: string|null|undefined) {
		this.search = search ?? ""
	}

	setupSelectedCategories(categories: LocationQueryValue[]|LocationQueryValue|undefined) {
		if (!categories) {
			return
		}
		let selectedCategoriesIds:Array<number> = JSON.parse(`[${categories.toString()}]`)
		console.log('selectedCategoriesIds :>> ', selectedCategoriesIds);
		let selectedCategories = selectedCategoriesIds.map(id => {
			return this.categories.find(category => category.value == id)
		}).filter(category => category !== undefined) // Filter out undefined values

		this.selectedCategories = selectedCategories as SelectableItem[] // Type assertion
	}
	
	toQuery(): LocationQueryRaw {

		let query : LocationQueryRaw = {}

		if (this.search.length > 0) {
			query["s"] = this.search
		}

		if (this.selectedCategories.length > 0) {
			query["ct"] = this.selectedCategories.map(category => category.value).toString()
			// query["ct"] = this.selectedCategories.map(category => category.value).toString()
		}

		return query;
	}

	isEmpty(): boolean {
		return this.search.length == 0 && this.selectedCategories.length == 0
	}

	find(projectList:Array<Project>):Array<Project>{
		const search = this.search.toLowerCase()

		return projectList.filter(project => {
			
			const projectName = project.name.toLowerCase()
			const projectDescription = project.description.toLowerCase()

			if (search 
			&& !projectName.includes(search) 
			&& !projectDescription.includes(search)) {
				return false
			}

			if (this.selectedCategories.length > 0) {
				const projectCategoriesIDS = project.categories.map(category => category.id)
				const selectedCategories = this.selectedCategories.map(category => category.value)
				if (!selectedCategories.every(category => projectCategoriesIDS.includes(category))) {
					return false
				}
			}

			return true
		})
	}
}

export default ProjectListFiltersInst