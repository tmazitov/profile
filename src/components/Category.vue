<template>
	<div class="category" 
	@mouseover="isHovered = true" 
	@mouseleave="isHovered = false"
	v-bind:style="{
		'border-color' : category.color,
		'background' : category.color + (isHovered ? '2a' : '12'),
	}">
		{{ category.name }}
	</div>
</template>

<script lang="ts">
import { ref } from 'vue';
import ProjectCategory from '../types/projectCategory';
export default {
	name: "Category",
	props: {
		category: {
			type: ProjectCategory,
			required: true,
		},
	},
	setup(props) {
		let isHovered = ref(false)

		return {
			isHovered,
			category: props.category
		}
	},
}
</script>

<style scoped>
.category{
	padding: 3px 9px;
	border: 1px solid #2d2d2d;
	border-radius: 6px;
	width: fit-content;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;

	user-select: none;
}
</style>