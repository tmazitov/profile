<template>
<div class="project" v-if="project">
	<div class="project__image">
		<img :src="project.gif">
	</div>
	<div class="project__content">
		<div class="project__name">{{ project.name }}</div>
		<div class="project__categories">
			<Category :category="category"
				v-for="category in project.categories" 
				:key="`category__${category.id}`"/>
		</div>
		<div class="project__description">
			{{ project.description }}
		</div>
	</div>
</div>
</template>

<script lang="ts">
import Category from '../Category.vue';

import Project from '../../types/project';

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
		return {
			project: props.project,
		}
	}
}
</script>

<style scoped>
.project{
	background: #242424;
	border: 1px solid #2d2d2d;
	border-radius: 16px;
	font-size: 14px;

	width: inherit;
	overflow: hidden;
	transition: background .3s;
}

.project:hover{
	background: #3a3a3a;
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
}

.project__name{
	font-size: 18px;
	font-weight: 500;
}

.project__categories{
	display: flex;
	flex-direction: row;
	gap: 10px;
}

</style>