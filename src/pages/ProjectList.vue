<template>
	<div class="project-list__header">
		My Projects
	</div>

	<div class="project-list__filters">
		<BaseInput
		class="filter-search"
		v-model:value="data.search" 
		placeholder="Search"
		:leftIcon="{
			name: 'tabler:search',
		}"
		:rightIcon="{ 
			name: 'tabler:x',
			isHidden: data.search.length == 0,
			onClick: () => data.search = ''
		}"/>		
	</div>

	<div class="project-list__content">
		<ProjectCard :project="project"
			v-for="project in projects"
			:key="`project_${project.id}`"
		/>
	</div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import ProjectCard from '../components/project/ProjectCard.vue';
import BaseInput from '../components/inputs/BaseInput.vue';

import Project from '../types/project';
import ProjectCategory from '../types/projectCategory';
export default {
	name: "ProjectList",
	components: {
		ProjectCard,
		BaseInput,
	},
	setup(){
		const data = reactive({
			search: "",
		})

		let projects:Array<Project> = []
		for (let i = 0; i < 6; i++)
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
			projects,
			data,
		}
	}	
}
</script>

<style scoped>

.project-list__header{
	font-size: 32px;
	font-weight: 600;
	margin-top: 32px;
	box-sizing: border-box;
}

.project-list__filters{
	box-sizing: border-box;
}

.project-list__content{
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
}



.filter-search{
	max-width: 170px;
}

@media (max-width: 480px) {
	.project-list__content{
		grid-template-columns: 1fr;
	}
	.project-list__header, 
	.project-list__filters{
		width: 100%;
		padding: 0 16px;
	}
}

@media (min-width: 480px) {
	.project-list__content > *{
		width: 100%;
	}
}

</style>