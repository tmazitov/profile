<template>
	<div class="menu__container">
		<div class="menu__button" @click="toggleOpen">
			<Icon v-if="!isOpen" icon="tabler:menu-2" width="24" height="24" />
			<Icon v-else icon="tabler:x" width="20" height="20" />
		</div>
		<transition name="show">
			<div class="menu__content" v-if="isOpen">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';
import { computed } from 'vue';

export default {
	name: "SideMenu",
	props: {
		isOpen: {
			type: Boolean,
			required: true,
		}
	},
	model: {
		prop: "isOpen",
		event: "update:isOpen",
	},
	components: {
		Icon,
	},
	setup(props, ctx){
		let isOpen = computed(() => props.isOpen)
		const toggleOpen = () => {
			ctx.emit("update:isOpen", !props.isOpen)
		}
		return {
			isOpen,
			toggleOpen
		}		
	}
}
</script>

<style scoped>

.menu__container{
	height: 100%;
}

.menu__button{
	display: flex;
	align-items: center;
	justify-content: center;
	height: inherit;
	width: 24px;
}

.menu__content{
	width: 170px;
	height: calc(100vh - 56px);
	position: absolute;
	right: 0;
	top: 56px;
	background: var(--background-color);
	border-left: 1px solid var(--border-color);
	overflow-x: hidden;
}

.show-enter-active{
	animation: show .25s ease-in;
}
.show-leave-active{
	animation: show .25s ease-out reverse;
}

@keyframes show {
	from {
		max-width: 0;
	}

	to {
		max-width: 170px;
	}
}
</style>
