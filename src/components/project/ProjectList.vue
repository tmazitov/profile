<template>
	<div class="project__list">
		<ProjectCard v-for="project in lastProjects"
			:project="project"  
			:key="`project__${project.id}`"/>
	</div>
</template>

<script lang="ts" setup>
import ProjectCard from './ProjectCard.vue';
import { sortedLastProjects } from '../../info/projects';

const lastProjectsCount = 3
const lastProjects = sortedLastProjects()
	.slice(0, lastProjectsCount)

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