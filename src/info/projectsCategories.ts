import ProjectCategory from "../types/projectCategory";

const projectCategories:Array<ProjectCategory> = [
	new ProjectCategory(1, "TS", "#3178c6"),
	new ProjectCategory(2, "Vue", "#41B883"),
	new ProjectCategory(3, "Frontend", "#5CB3FF"),
	new ProjectCategory(4, "Math", "#A62F20"),
	new ProjectCategory(5, "42 Abu Dhabi", "#00e5fc")
]

function getProjectCategoryByName(name:string):ProjectCategory|undefined {
	return projectCategories.find((category) => category.name === name);
}

export {
	projectCategories,
	getProjectCategoryByName
}