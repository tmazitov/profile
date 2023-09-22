<template>
	<div class="menu__container">
		<div class="menu__button" @click="toggleOpen">
			<Icon v-if="!isOpen" icon="tabler:menu-2" width="32" height="32" />
			<Icon v-else icon="tabler:x" width="32" height="32" />
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
import { ref } from 'vue';

export default {
	name: "SideMenu",
	components: {
		Icon,
	},
	setup(){
		let isOpen = ref(false)
		const toggleOpen = () => {
			isOpen.value = !isOpen.value
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
	height: inherit;
}

.menu__content{
	width: 170px;
	height: calc(100vh - 57px - 20px);

	position: absolute;
	right: 0;
	top: 57px;
	background: #1a1a1a;
	border-left: 1px solid #2d2d2d;
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
