import Project from "../types/project";
import { getProjectCategoryByName } from "./projectsCategories";

function loadProjectsImages(){
	const glob = import.meta.glob<Record<string, string>>('@/assets/images/projects/*', { eager: true });
	const images = Object.keys(glob).map(key => {
		const filePathParts = key.split('/')
		const fileName = filePathParts[filePathParts.length - 1]
		return {
			name: fileName,
			path: glob[key].default
		}
	})
	return (fileName:string) => {
		const image =  images.find(file => file.name == fileName)
		if (!image)
			return ''
		return image.path
	}
}

const imageGet = loadProjectsImages()

const projects:Array<Project> = [
	new Project({
		id: 1,
		name: "Minishell",
		categories: [
			getProjectCategoryByName("42 Abu Dhabi"),
			getProjectCategoryByName("Shell"),
			getProjectCategoryByName("C"),
		],
		image: imageGet('winter.gif'),
		finishDate: new Date("2024.07.05"),
		description: "Try your hand - create your own mini shell and don't turn gray from bugs and memory leaks!"
	}),
	new Project({
		id: 2,
		name: "Cub 3D",
		categories: [
			getProjectCategoryByName("42 Abu Dhabi"),
			getProjectCategoryByName("Math"),
			getProjectCategoryByName("C"),
		],
		image: "https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",
		finishDate: new Date("2024.09.01"),
		description: "Raycasting, basic 3D graphics, a lot of math and first own game from scratch."
	}),
	new Project({
		id: 3,
		name: "ExampleProject",
		categories: [
			getProjectCategoryByName("TS"),
			getProjectCategoryByName("Vue"),
			getProjectCategoryByName("Frontend"),
		],
		image: "https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",
		finishDate: new Date("2024.08.28"),
		description: "This is the example of the description for the test project"
	}),
]

function sortedLastProjects():Array<Project> {
	return projects.sort((a, b) => b.finishDate.getTime() - a.finishDate.getTime())
}

export {
	projects,
	sortedLastProjects,
}