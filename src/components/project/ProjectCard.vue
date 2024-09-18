<template>
<div class="project" v-if="project">
	<div class="project__image">
		<img :src="project.gif">
	</div>
	<div class="project__content">
		<div class="project__name">{{ project.name }}</div>
		<div class="project__categories">
			<Category :title="category.name" :color="category.color"
				v-for="category in project.categories" 
				:key="`category__${category.id}`"/>
		</div>
		<div class="project__details">
			<div class="project__description">
				{{ project.description }}
			</div>
			<div class="project__buttons">
				<div class="project__submit-date">
					{{ project.finishDate.toLocaleDateString() }}
				</div>
				<div class="project__button" @click="openProject">More</div>
			</div>
		</div>
	</div>
</div>
</template>

<script lang="ts">
import Category from '../inputs/Category.vue';

import Project from '../../types/project';
import { useRouter } from 'vue-router';

export default {
	name: "Project",
	props: {
		project: {
			type: Project,
			required: true,
		},
	},
	components: {
		Category,
	},
	setup(props){
		let router = useRouter()

		const openProject = () => {
			router.push({name: "project", params: {
				projectId: props.project.id,
			}})
		}

		return {
			openProject,
			project: props.project,
		}
	}
}
</script>

<style scoped>
.project{
	background: var(--card-background-color);
	border: 1px solid var(--border-color);
	border-radius: 6px;
	font-size: 14px;

	width: inherit;
	overflow: hidden;
	transition: background .3s;
}
.project__content{
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.project__image {
	width: 100%;
}

.project__image > img{
	width: inherit;
	user-select: none;
}

.project__name{
	font-size: 18px;
	font-weight: 500;
	width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.project__categories{
	display: flex;
	flex-direction: row;
	gap: 10px;
}

.project__details{
	display: flex;
	flex-direction: column;
	gap: 3px;
}
.project__buttons{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.project__submit-date{
	color: var(--text-color-light);
	cursor: pointer;
}

.project__button {
	text-decoration: underline;
	padding: 0 10px;
	cursor: pointer;
	color: var(--text-color-light);
	user-select: none;
	transition: color .3s;
}

.project__button:hover{
	color: var(--text-color-hover);
}

.project__image {
	width: 100%;
}

.project__image > img{
	width: inherit;
}

.project__description{
    line-height: 1.5em;
    height: 3em;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* number of lines to show */
			line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>