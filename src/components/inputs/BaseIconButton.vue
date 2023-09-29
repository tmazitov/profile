<template>
	<div class="base-icon-button">
		<Icon :icon="icon" :color="color" height="18px" width="18px"/> 
	</div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { computed } from 'vue';

export default {
	name: "BaseIconButton",
	components: {
		Icon,
	},
	props: {
		icon: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: "#FFFFFF"
		}
	},
	setup(props){
		let icon = computed(() => props.icon)

		return {
			icon,
			color: props.color,
		}
	}
}
</script>

<style  scoped>
.base-icon-button{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 36px;
	width: 36px;

	background: #242424;
	border: 1px solid #2d2d2d;
	border-radius: 6px;

	cursor: pointer;
	transition: background .15s;
}

.base-icon-button:active{
	background: #2d2d2d;
}
</style>