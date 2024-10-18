<template>
	<div class="skill-list-container">
		<div class="skill-list" 
		v-bind:class="{
			active: activeSkill,
		}">
			<table>
				<tbody>
					<tr v-for="skillRow, index in convertedSkills()" :key="`skill-row-${index}`">
						<th v-for="skill in skillRow" 
						:key="`skill-${skill.id}`"
						@click="() => activateSkill(skill.id)"
						v-bind:style="{
							color: activeSkill && activeSkill.id == skill.id ? 
								skill.color : 'var(--text-color)',
						}"
						v-bind:class="{
							active: activeSkill && activeSkill.id == skill.id,
						}">
							<div class="skill-card">
								<Icon :icon="skill.icon" height="56px" width="56px" class="skill-item"/>
							</div>
						</th>
					</tr>	
				</tbody>
			</table>

			<transition name="about">
				<div class="about-skill" v-if="activeSkill">
					<div class="about-skill__name">
						{{ activeSkill.name }}<span class="years">{{ activeSkill.durationString()}}</span>
					</div>
					<div class="about-skill__description">
						{{activeSkill.description}}
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { ref } from 'vue';
import { skills } from '@/info/skills';
import Skill from '@/types/skill';

const skillsRowLength = skills.length % 2 == 0 ? 
	skills.length / 2 : skills.length / 2 + 1

const convertedSkills = () => {
	let array = []
	let result = []
	for (let i = 0; i < skills.length; i++) {
		array.push(skills[i])
		if (array.length == skillsRowLength) {
			result.push(array)
			array = []
		}
	}
	return result
} 

const activeSkill = ref<Skill|null>(null)
const activateSkill = (id:number) => {
	const newActiveSkill = skills.find(skill => skill.id == id) ?? null
	if (activeSkill.value && newActiveSkill && newActiveSkill.id === activeSkill.value.id)
		activeSkill.value = null
	else
		activeSkill.value = newActiveSkill
}

</script>

<style scoped>
.skill-list-container{
	display: flex;
	flex-direction: row;
	margin: 4em 0;
}

.skill-list{
	background: var(--card-background-color);
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
	padding: 10px;
	display: flex;
	gap: 10px;
	overflow: hidden;
	transition: all .3s;
	max-height: 850px;
}

@media (max-width: 768px) {
	.skill-list {
		flex-direction: column;
		width: 100%;
	}

	.skill-list table {
		width: 100%;
	}

	.skill-list .skill-card {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	
	@keyframes about {
		from {
			opacity: 0;
			max-height: 0;
		}
		to {
			opacity: 1;
			max-height: 112px;
		}
	}
}

@media (min-width: 768px) {
	.skill-list table {
		width: fit-content;
	}

	@keyframes about {
	from {
		opacity: 0;
		max-width: 0;
	}
	to {
		opacity: 1;
		max-width: 850px;
	}
}
}

.skill-list.active {
	max-width: 100%;
}

.skill-list th {
	padding: 0;
	transition: all .15s;
}

.skill-list table {
	box-shadow: none;
}

.skill-list th.active {
	background: var(--primary-color-opacity);
	color: var(--primary-color);
}

.skill-item {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: .3s color;
	padding: 10px;
}


.skill-item > * {
	user-select: none;
	cursor: pointer;
}


.about-skill{
	display: flex;
	flex-direction: column;
	gap: 4px;
	max-height: 112px;
	max-width: 850px;
	overflow: hidden;
}

.about-skill__name {
	font-size: 1.4em;
	font-weight: 700;
}

.about-skill__name .years {
	padding-left: 10px;
	font-size: 0.7em;
	font-weight: 300;
}

.about-skill__description {
	font-size: 1.1em;
	line-height: 1.4;
	width: 100%;
	overflow-y: auto;
}

.about-enter-active {
	animation-delay: 0.3s;
	animation: about 0.3s;
}

.about-leave-active {
	animation: about 0.3s reverse;
}


</style>