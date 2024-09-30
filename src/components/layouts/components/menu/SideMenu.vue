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

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

const isOpen = defineModel()
const toggleOpen = () => {
	isOpen.value = !isOpen.value
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
	width: 100%;
	height: 156px;
	position: absolute;
	left: 0;
	right: 0;
	top: 56px;
	background: var(--background-color);
	border-left: 1px solid var(--border-color);
	overflow-x: hidden;
	padding: 0 32px;
}

@media (max-width: 768px) {
	.menu__content{
		padding: var(--mobile-padding);
    }
}

.show-enter-active{
	animation: show .25s ease-in;
}
.show-leave-active{
	animation: show .25s ease-out reverse;
}

@keyframes show {
	from {
		max-height: 0;
	}
	
	to {
		max-height: 156px;
	}
}
</style>
