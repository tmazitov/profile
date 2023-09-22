<template>
<div class="category" v-bind:style="{
	'border-color' : category.color,
	'background' : category.color + '12',
}">
	{{ category.name }}
</div>
</template>

<script lang="ts">
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
		return {
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
}
</style>