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

	<div class="skills__container">
		<SkillCard v-for="skill in skills" 
			:key="`skill_${skill.id}`"
			:skill="skill"
			:isOpen="openedSkill == skill.id"/>
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
import SkillCard from '../components/skill/SkillCard.vue'
import BaseButton from '../components/inputs/BaseButton.vue';
import ProjectList from '../components/project/ProjectList.vue';
import Skill from '../types/skill';
import { ref } from 'vue';

export default {
	name: "MainPage",
	components: {
		BaseButton,
		SkillCard,
		ProjectList,
	},
	setup(){
		const router = useRouter()
		const goToPage = (name: string) => router.push({name})
		const skills:Array<Skill> = [
			new Skill(1, "golang", "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"),
			new Skill(2, "javascript", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"),
			new Skill(3, "typescript", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/2048px-Typescript.svg.png"),
			new Skill(3, "vue", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png"),
		]
		const openedSkill = ref(0)

		return {
			goToPage,
			skills,
			openedSkill,
		}
	}
}
</script>

<style>

.skills__container{
	display: flex;
	flex-direction: row;
	gap: 16px;
}

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