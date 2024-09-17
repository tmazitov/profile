<template>

	<!-- About Me -->

	<InfoBlock>
		<div class="about-container">
			<div class="about">
			<div class="about__name">
				Timur Mazitov
			</div>
			<div class="about__comment">
				I'm a fullstack developer.<br/>
				<hr>
				Here you can find some information about me and my projects.<br/>
			</div>
			<div class="tools">
				<BaseButton title="Journey" icon="tabler:map"/>
				<BaseButton title="Projects" icon="tabler:briefcase"/>
				<BaseButton title="Articles" icon="tabler:article" outlined/>
				<BaseButton title="Contacts" icon="tabler:message-2" outlined/>
			</div>
		</div>
		</div>
	</InfoBlock>

	<!-- Journey -->

	<InfoBlock title="Journey">	
		<Timeline :items="journeyEvents"/>

		<!-- <Timeline :value="journeyEvents">
			<template #opposite="slotProps">
				<small class="text-surface-500 dark:text-surface-400">
					{{slotProps.item.periodDateString()}}
				</small>
			</template>
			<template #content="slotProps">
				<Card>
					<template #title>
						{{slotProps.item.title}}
					</template>
					<template #content>
						{{slotProps.item.comment}}
					</template>
				</Card>
			</template>
		</Timeline> -->
	</InfoBlock>
		
	<!-- <div class="skills__container">
		<SkillCard v-for="skill in skills" 
			:key="`skill_${skill.id}`"
			:skill="skill"
			:isOpen="openedSkill == skill.id"/>
	</div> -->

	<div class="projects__container">
		<div class="projects__header">
			<div class="projects__title">
				Last projects
			</div>
			<div class="projects__button" @click="goToPage('ProjectList')">
				See all
			</div>
		</div>
		<ProjectList/>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Timeline from '../components/Timeline.vue';
import BaseButton from '../components/inputs/BaseButton.vue';
import ProjectList from '../components/project/ProjectList.vue';
import InfoBlock from '../components/InfoBlock.vue';
import { journeyEvents, JourneyItem } from '../info/journey';
import Card from 'primevue/card';
const router = useRouter()
const goToPage = (name: string) => router.push({name})
// const skills:Array<Skill> = [
// 	new Skill(1, "golang", "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"),
// 	new Skill(2, "javascript", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902"),
// 	new Skill(3, "typescript", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/2048px-Typescript.svg.png"),
// 	new Skill(3, "vue", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png"),
// ]
// const openedSkill = ref(0)
</script>

<style>

.skills__container{
	display: flex;
	flex-direction: row;
	gap: 16px;
}

.about{
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.about-container{
	display: flex;
	align-items: center;
	flex: 1;
}

.simple{
	font-weight: 300;	
}
.about__name{
	font-size: 4em;
	user-select: none;
	line-height: 64px;
	font-weight: 600;
	text-align: left;
}

.about__comment{
	font-size: 1.1em;
	line-height: 1.4;
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
	color: var(--text-color-light);
	user-select: none;
	transition: color .3s;
}
.projects__button:hover{
	color: var(--text-color-hover);
}

.p-timeline-left .p-timeline-event-opposite{
	text-align: unset;
}

</style>