<template>
	<div class="skill_card">
		<div class="image_cont">
			<img :src="skill.imagePath">
		</div>
	</div>
</template>

<script lang="ts">
import Skill from '../../types/skill';
import { computed } from 'vue';
export default {
	name : "SkillCard",
	props: {
		skill: {
			type: Skill,
			required: true,
		},
		isOpen: {
			type: Boolean,
			default: false,
		}
	},
	setup(props) {
		let skill = computed(() => props.skill)
		let isOpen = computed(() => props.isOpen)
		return {
			skill,
			isOpen,
		}
	}
}
</script>

<style scoped>
.skill_card{
	height: 46px;
	width: 46px;
	border: 1px solid var(--border-color);
	border-radius: 8px;
	overflow: hidden;
}
.image_cont{
	height: 100%;
	display: flex;
	justify-content: center;
}

.image_cont > img{
	max-height: 46px;
	max-width: 46px;
}
</style>