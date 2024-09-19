import Project from "../types/project";
import { getProjectCategoryByName } from "./projectsCategories";

const projects:Array<Project> = [
	new Project({
		id: 1,
		name: "Minishell",
		categories: [
			getProjectCategoryByName("42 Abu Dhabi"),
			getProjectCategoryByName("Shell"),
			getProjectCategoryByName("C"),
		],
		gif: "https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",
		finishDate: new Date("2024.07.05"),
		description: "Try your self to replicate mini version of bash"
	}),
	new Project({
		id: 2,
		name: "Cub 3D",
		categories: [
			getProjectCategoryByName("42 Abu Dhabi"),
			getProjectCategoryByName("Math"),
			getProjectCategoryByName("C"),
		],
		gif: "https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",
		finishDate: new Date("2024.09.01"),
		description: "Raycasting, basic 3D graphics, a lot of maths and first own game from scratch"
	}),
	new Project({
		id: 3,
		name: "ExampleProject",
		categories: [
			getProjectCategoryByName("TS"),
			getProjectCategoryByName("Vue"),
			getProjectCategoryByName("Frontend"),
		],
		gif: "https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",
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