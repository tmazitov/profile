<template>

	<div class="project__image topic">
		<img :src="project.gif">
	</div>

	<div class="project__short-info topic">
		<div class="project__header">
			<div class="project__name">{{ project.name }}</div>
			<div class="project__submit-date">{{ project.finishDate.toLocaleDateString() }}</div>
		</div>

		<div class="project__categories">
			<Category 
			:title="category.name" :color="category.color"
			v-for="category in project.categories" 
			:key="`category__${category.id}`"/>
		</div>

		<div class="project__description">
			{{ project.description }}
		</div>
	</div>

	<div class="project__subheader topic" >
	Explanation
	</div>
</template>

<script lang="ts">
import Category from '../components/inputs/Category.vue'

import Project from '../types/project';
import ProjectCategory from '../types/projectCategory';
export default {
	name: "ProjectPage",
	components: {
		Category,
	},
	setup(){
		let project = new Project({
			id: 1,
			name: "ExampleProject",
			categories: [
				new ProjectCategory(1, "TS", "#3178c6"),
				new ProjectCategory(2, "Vue", "#41B883"),
				new ProjectCategory(3, "Frontend", "#5CB3FF"),
			],
			gif: "https://i.pinimg.com/originals/9d/ea/64/9dea6422afee150cbe2f65b5317285eb.gif",
			finishDate: new Date(),
			description: "This is the example of the description for the test project"
		})

		return {
			project,
		}
	}
}
</script>

<style scoped>
.topic{
	max-width: 650px;
}
.project__header{
	display: flex;
    justify-content: space-between;
	align-items: center;
	gap: 10px;
}

.project__name{
	font-size: 24px;
	font-weight: 700;

	width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.project__short-info{
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.project__categories{
	display: flex;
	flex-direction: row;
	gap: 10px;
}

@media (min-width: 480px) {
	.project__image{
		margin-top: 24px;
	}
}

.project__image {
	width: 100%;
	overflow: hidden;
}

.project__image > img{
	width: inherit;
}

.project__subheader{
	font-size: 20px;
	font-weight: 600;
	width: calc(100% - 32px);		
}

.project__submit-date{
	color: #868686;
	cursor: pointer;
	font-size: 14px;
}
</style>