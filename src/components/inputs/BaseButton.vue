<template>
	<div class="base__button" v-bind:class="{
		primary: primary 
	}">
		{{ title }}
	</div>
</template>

<script lang="ts">
export default {
	name: "BaseButton",
	props: {
		title: String,
		primary: Boolean,
	},
	setup(props:any) {
		return {
			title: props.title,
			primary: props.primary,
		}
	},
}
</script>

<style scoped>
.base__button{
	background: var(--button-background);
	padding: 8px 18px;
	border-radius: 8px;
	cursor: pointer;
	user-select: none;
	transition: background .3s;
	font-weight: 500;
}

.base__button:hover{
	background: var(--button-background-hover);
}

.base__button.primary{
	background: var(--primary-color);
}

.base__button.primary:hover{
	background: var(--primary-color-hover);
}
</style>