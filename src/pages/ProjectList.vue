<template>
	<div class="project-list__header">
		Projects
	</div>

	<ProjectListFilter
		v-model:filters="filters"
	/>

	<div class="project-list__content">
		<ProjectCard :project="project"
			v-for="project in projects"
			:key="`project_${project.id}`"
		/>
	</div>
</template>

<script lang="ts">
import { reactive, watch } from 'vue';
import ProjectCard from '../components/project/ProjectCard.vue';
import BaseInput from '../components/inputs/BaseInput.vue';
import BaseSelect from '../components/inputs/BaseSelect.vue';
import ProjectListFilter from '../components/filters/ProjectListFilter.vue';

import Project from '../types/project';
import ProjectCategory from '../types/projectCategory';
import ProjectListFiltersInst from '../types/projectListFilters';
import { useRoute, useRouter } from 'vue-router';

export default {
	name: "ProjectList",
	components: {
		ProjectCard,
		BaseInput,
		BaseSelect,
		ProjectListFilter,
	},
	setup(){
		const route = useRoute()
		const router = useRouter()
		const filters = reactive(new ProjectListFiltersInst())
		filters.setupSearch(route.query.s?.toString())
		filters.setupCategories([
			new ProjectCategory(1, "TS", "#3178c6").toSelectableItem(),
			new ProjectCategory(2, "Vue", "#41B883").toSelectableItem(),
			new ProjectCategory(3, "Frontend", "#5CB3FF").toSelectableItem(),
			new ProjectCategory(4, "Math", "#A62F20").toSelectableItem(),
		])
		filters.setupSelectedCategories(route.query.ct)

		watch(() => filters.search, (_) => {
			router.replace({
				name: "ProjectList",
				query: filters.toQuery(),
			})
		}, {deep: true})

		watch(() => filters.selectedCategories, (_) => {
			router.replace({
				name: "ProjectList",
				query: filters.toQuery(),
			})
		}, {deep: true})	

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
			filters,
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


.project-list__content{
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	margin-bottom: 120px;
}

.filter-search{
	width: 170px;
}

@media (min-width: 1200px) {
	.project-list__content{
		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media (max-width: 768px){
	.project-list__header, 
	.project-list__filters{
		width: 100%;
		padding: 0 16px;
	}

	.project-list__content{
		grid-template-columns: 1fr 1fr;
	}
}

@media (max-width: 480px) {
	.project-list__content{
		grid-template-columns: 1fr;
	}

}

@media (min-width: 480px) {
	.project-list__content > *{
		width: 100%;
	}
}

</style>