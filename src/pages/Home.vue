<template>
	<!-- About Me -->

	<InfoBlock fullscreen name="main">
		<div class="about-container">
			<div class="about">
			<div class="about__name">
				Timur Mazitov
			</div>
			<div class="about__comment">
				Fullstack developer and physics fancier.<br/>
				<hr>
				Here you can find some information about me and my projects.<br/>
			</div>
			<div class="tools">
				<BaseButton v-for="button,index in buttons"
					:key="`button-${index}`"
					:title="button.title"
					:icon="button.icon"
					:outlined="button.outlined"
					@click="scrollTo(button.infoBlockName)"/>
			</div>
		</div>
		</div>
	</InfoBlock>

	<!-- Journey -->

	<InfoBlock title="Journey" name="journey">	
		<Timeline :items="journeyEvents"/>
	</InfoBlock>

	<!-- Projects -->

	<InfoBlock title="Projects" name="projects">
		<template v-slot:button>
			<div class="project__button" @click="goToPage('project-list')">
				See all
			</div>
		</template>
		<ProjectList/>
	</InfoBlock>

	<!-- Contacts -->
	<InfoBlock title="Contacts" name="contacts" fit-content>
		<ContactList/>
	</InfoBlock>
	
</template>

<script lang="ts" setup>
import Timeline from '../components/Timeline.vue';
import BaseButton from '../components/inputs/BaseButton.vue';
import ProjectList from '../components/project/ProjectList.vue';
import InfoBlock from '../components/InfoBlock.vue';
import { journeyEvents } from '../info/journey';
import ContactList from '@/components/contact/ContactList.vue';
import { useRouter } from 'vue-router';

const buttons = [
	{title: "Journey", icon: "tabler:map", infoBlockName: "journey"},
	{title: "Projects", icon: "tabler:briefcase", infoBlockName: "projects"},
	{title: "Contacts", icon: "tabler:message-2", infoBlockName: "contacts", outlined: true},
]

const router = useRouter()

const goToPage = (pageName: string) => {
	router.push({name: pageName})
}

const scrollTo = (infoBlockName: string|undefined) => {
	if (!infoBlockName)
		return
	const element = document.querySelector('.main-layout')
	if (!element)
		return
	const elementRect = element.getBoundingClientRect()
	const infoBlock = element.querySelector(`#info-block-${infoBlockName}`)
	if(!infoBlock)
		return 
	const infoBlockRect = infoBlock.getBoundingClientRect()
	const scrollTarget = element.scrollTop + infoBlockRect.top - elementRect.top - 56
	element.scrollTo({top: scrollTarget, behavior: 'smooth'})
}

</script>

<style scoped>

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

.project__button {
	text-decoration: underline;
	padding: 10px;
	cursor: pointer;
	color: var(--text-color-light);
	user-select: none;
	transition: color .3s;
}

</style>