<template>
		<div class="page" v-if="project">
			
			<div class="project__image topic">
				<img :src="project.image">
			</div>

			<div class="project__short-info topic project__info">
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

		</div>
		<div class="page" v-else></div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Category from '../components/inputs/Category.vue';
import { computed } from 'vue';
import { projects } from '../info/projects';

const route = useRoute()
const projectId = computed(() => Number(route.params["projectId"]))
const project = computed(() => {
	if (typeof projectId.value != 'number')
		return
	return projects.find(proj => proj.id == projectId.value)
})

</script>

<style scoped>

.page{
	display: flex;
	flex-direction: column;
	gap: 20px;
	min-height: 100vh;
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
	gap: 0.7em;
}
.project__categories{
	display: flex;
	flex-direction: row;
	gap: 10px;
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
	color: var(--text-color-light);
	cursor: pointer;
	font-size: 14px;
}

@media (max-width: 768px) {
	.project__info{
		padding: 0 var(--mobile-padding);
	}
}
</style>