<template>
	<div class="greetings__container">
		<div class="greetings">
			My Dev<span class="simple">elopment</span>
			Journey
		</div>
		<div class="comment">
			Hi! My name is Tim. Im a backend + frontend developer.<br/>
			This Site about my journey in the world of a programming languages and mathematics.<br/>
			Here you can find some information about me and my projects.<br/>
		</div>
		<div class="tools">
			<BaseButton title="Explore" primary/>
			<BaseButton title="Get started"/>
		</div>
	</div>

	<div class="projects__container">
		<div class="projects__header">
			<div class="projects__title">Last projects</div>
			<div class="projects__button" 
			@click="goToPage('ProjectList')">
			See all
			</div>
		</div>
		<ProjectList/>
	</div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import BaseButton from '../components/inputs/BaseButton.vue';
import ProjectList from '../components/project/ProjectList.vue';

export default {
	name: "MainPage",
	components: {
		BaseButton,
		ProjectList,
	},
	setup(){
		const router = useRouter()
		const goToPage = (name: string) => router.push({name})
		return {
			goToPage,
		}
	}
}
</script>

<style>
.greetings__container{
	margin-top: 32px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 16px;
}

.simple{
	font-weight: 300;	
}
.greetings{
	font-size: 7vh;
	user-select: none;
	line-height: 64px;
	font-weight: 600;
	text-align: left;
}

.comment{
	font-size: 2.3vh;
}

.tools {
	margin-top: 8px;
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
}


.projects__container{
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.projects__header{
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
}

.projects__title{
	font-size: 20px;
	font-weight: 500;
}

.projects__button{
	text-decoration: underline;
	font-size: 16px;
	cursor: pointer;
	color: #868686;
	user-select: none;
}
.projects__button:hover{
	color: #aaaaaa;
}

</style>