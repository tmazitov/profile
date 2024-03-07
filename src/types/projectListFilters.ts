import { LocationQueryRaw, LocationQueryValue } from "vue-router"
import SelectableItem from "./selectableItem"

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
}

export default ProjectListFiltersInst