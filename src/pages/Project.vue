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

			<div class="project__info" v-if="!project.article.isInProgress"> 
				<vue-markdown ref="markdown"
					v-if="isLoaded && project.article.content" 
					:source="project.article.content"
				/>
			</div>
			<div class="project__info" v-else>
				<div class="is-in-progress-message">
					<Icon icon="tabler:clock" height="3em" width="3em"/>
					Article is in progress
				</div>
			</div>
		</div>
		<div class="page" v-else></div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import Category from '../components/inputs/Category.vue';
import { computed, ref } from 'vue';
import { projects } from '../info/projects';
import VueMarkdown from 'vue-markdown-render'
import GraphProvider from '@/types/graph';
import { Icon } from '@iconify/vue';

const isLoaded = ref(false)
const markdown = ref<any>(null)
const setupCharts = () => {
	if (!markdown.value)
		return
	const elem:HTMLElement = markdown.value.$el
	const preElements:Array<HTMLElement> = Array.from(elem.querySelectorAll('pre'))
	if (!preElements || preElements.length == 0)
		return
	const charts = preElements.filter(pre => !!pre.querySelector('code.language-mermaid'))
	if (!charts || charts.length == 0)
		return

	charts.forEach(pre => GraphProvider.convertGraph(pre))

	GraphProvider.draw()
}

const route = useRoute()
const projectId = computed(() => Number(route.params["projectId"]))
const project = computed(() => {
	if (typeof projectId.value != 'number')
		return
	const project = projects.find(proj => proj.id == projectId.value)
	if (!project)
		return

	const promise = project.loadArticle()
	if (promise) {
		promise.finally(() => {
			isLoaded.value = true
			setTimeout(setupCharts, 0)
		})
	} else {
		isLoaded.value = project.article?
			project.article.isLoaded : false
		setTimeout(setupCharts, 0)
	}

	return project
})

</script>

<style scoped>

.page{
	padding-top: 0;
}

.project__header{
	display: flex;
    justify-content: space-between;
	align-items: center;
	gap: 10px;
}

.is-in-progress-message{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
	padding: 10px;
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
	margin-top: 10px;
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

.project__description{
	padding: 10px 16px;
	border-radius: 10px;
	background: var(--card-background-color);
	margin-top: 8px;	
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