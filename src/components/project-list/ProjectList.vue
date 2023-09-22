<template>
	<div class="project__list">
		<ProjectVue v-for="project in projects"
			:project="project"  
			:key="`project__${project.id}`"/>
	</div>
</template>

<script lang="ts">
import Project from '../../types/project';
import ProjectVue from './Project.vue';
import ProjectCategory from '../../types/projectCategory';

export default {
	name: "ProjectList",
	components: {
		Project,
		ProjectVue
	},
	setup(){
		let projects:Array<Project> = []
		for (let i = 0; i < 6; i++)
		{
			projects.push(new Project({
				id: 1,
				name: "ExampleProject",
				categories: [
					new ProjectCategory(1, "TS", "#3178c6"),
					new ProjectCategory(2, "Vue", "#41B883"),
					new ProjectCategory(3, "Frontend", "#5CB3FF"),
				],
				gif: "https://media.tenor.com/VOdWjm2zbEAAAAAC/gandalf-sax-guy.gif",
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

@media (max-width: 768px) {
	.project__list{
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (max-width: 480px) {
	.project__list{
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>