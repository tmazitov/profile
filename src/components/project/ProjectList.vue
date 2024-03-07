<template>
	<div class="project__list">
		<ProjectCard v-for="project in projects"
			:project="project"  
			:key="`project__${project.id}`"/>
	</div>
</template>

<script lang="ts">
import Project from '../../types/project';
import ProjectCard from './ProjectCard.vue';
import ProjectCategory from '../../types/projectCategory';

export default {
	name: "ProjectList",
	components: {
		ProjectCard
	},
	setup(){
		let projects:Array<Project> = []
		for (let i = 0; i < 3; i++)
		{
			projects.push(new Project({
				id: i,
				name: "ExampleProject",
				categories: [
					new ProjectCategory(1, "TS", "#3178c6"),
					new ProjectCategory(2, "Vue", "#41B883"),
					new ProjectCategory(3, "Frontend", "#5CB3FF"),
				],
				gif: "https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",
				finishDate: new Date(),
				description: "This is the example of the description for the test project"
			}))
		}

		return {
			projects
		}
	}
}

</script>
<style scoped>
.project__list{
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 16px;
	grid-row-gap: 16px;

}

@media (max-width: 1024px) {
	.project__list{
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (max-width: 480px) {
	.project__list{
		grid-template-columns: none;
		grid-template-rows: repeat(1, 1fr);
	}
}
</style>