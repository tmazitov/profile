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
	background: #2f2f2f;
	padding: 8px 18px;
	border-radius: 8px;
	cursor: pointer;
	user-select: none;
	transition: background .3s;
	font-weight: 500;
}

.base__button:hover{
	background: #3a3a3a;
}

.base__button.primary{
	background: #509bdc;
}

.base__button.primary:hover{
	background: #57A8F0;
}
</style>