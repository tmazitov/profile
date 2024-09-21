<template>
	<div class="project__list">
		<ProjectCard v-for="project in lastProjects"
			:project="project"
			:image="getImage(project.id)"
			:key="`project__${project.id}`"/>
	</div>
</template>

<script lang="ts" setup>
import ProjectCard from './ProjectCard.vue';
import { sortedLastProjects } from '../../info/projects';

const lastProjectsCount = 3
const lastProjects = sortedLastProjects()
	.slice(0, lastProjectsCount)

const glob = import.meta.glob<Record<string, string>>('@/assets/images/projects/*', { eager: true })

const getImage = (projectId:number) => {
	const image = images.find(image => image.index === projectId)
	if (!image)
		return ''
	return image.value
}

const images = Object.keys(glob).map(key => {
	const filePath = key
	const filePathParts = key.split('/')
	const fileName = filePathParts[filePathParts.length - 1].split('.')[0]
	const fileIndex = parseInt(fileName.split('_')[1])
	return {
		index: fileIndex,
		path: filePath,
		value: glob[key].default
	}
})

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