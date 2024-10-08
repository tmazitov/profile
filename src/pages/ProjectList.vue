<template>
	<div class="page">
		<div class="project-list__header">
			Projects
		</div>

		<ProjectListFilter v-model="filters"/>
		
		<div class="project-list__content">
			<ProjectCard 
				v-for="project in filteredProjects"
				:key="`project_${project.id}`"
				:image="project.image"
				:project="project"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import ProjectCard from '../components/project/ProjectCard.vue';
import ProjectListFilter from '../components/filters/ProjectListFilter.vue';
import ProjectListFiltersInst from '../types/projectListFilters';
import { useRoute, useRouter } from 'vue-router';
import { computed, reactive, watch } from 'vue';

import { sortedLastProjects } from '../info/projects';
import { projectCategories } from '../info/projectsCategories';


const route = useRoute()
const router = useRouter()
const filters = reactive(new ProjectListFiltersInst())

filters.setupSearch(route.query.s?.toString())
filters.setupCategories(projectCategories.map(c => c.toSelectableItem()))
filters.setupSelectedCategories(route.query.ct)

const filteredProjects = computed(() => {
	if (filters.isEmpty())
		return sortedLastProjects()
	return filters.find(sortedLastProjects())
})

watch(() => filters, (_) => {
	router.replace({
		name: "project-list",
		query: filters.toQuery(),
	})
}, {deep: true})

</script>

<style scoped>

.page{
	padding-top: 24px;
	display: flex;
	flex-direction: column;
	gap: 18px;
	width: 100%;
	min-height: 100vh;
}

.project-list__header{
	font-size: 32px;
	font-weight: 600;
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