<template>
	<div class="main__page">
		<div class="content">
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
				<div class="projects__title">My projects</div>
				<ProjectList/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import BaseButton from '../components/BaseButton.vue';
import ProjectList from '../components/project-list/ProjectList.vue';

export default {
	name: "MainPage",
	components: {
		BaseButton,
		ProjectList,
	}
}
</script>

<style>
.content{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
}

.content > * {
	width: 60%;
}

.greetings__container{
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

@media (max-width: 768px) {
	.content > *{
		padding: 16px;
		width: auto;
	}
}
@media (min-width: 768px) {
	.content > *{
		padding: 32px; 
		padding-bottom: 24px;
	}
}

.projects__container{
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.projects__title{
	font-size: 20px;
	font-weight: 400;
}
</style>