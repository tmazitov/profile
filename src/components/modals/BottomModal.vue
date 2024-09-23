<template>
	<div class="modal-container">
		
		<!-- Modal window background -->

		<transition name="show_background">
			<div class="modal-background" v-if="show" @click="closeHandler"></div>
		</transition>

		<!-- Modal window content -->

		<transition name="show_content">
			<div class="modal-bottom__container" v-if="show">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const show = defineModel<boolean>()

const closeHandler = () => {
	show.value = false;
}
</script>

<style scoped>

.modal-background{
	position: fixed;
	z-index: 10000;
	top: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	margin: 0;
	background: #202020;
	opacity: 0.45;
}

.show_background-enter-active{
	animation: show-background .45s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.show_background-leave-active{
	animation: show-background .35s cubic-bezier(0.22, 0.61, 0.36, 1) reverse;
}

@keyframes show-background {
	from {
		opacity: 0;
	}
	to {
		opacity: 0.45;
	}
}

.modal-bottom__container{
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 10001;

	box-sizing: border-box;

	background: var(--background-color);
	border-top: 1px solid var(--border-color);
	border-radius: 6px 6px 0 0 ;

	height: 400px;
	width: 100%;
	padding: 16px;
}

.show_content-enter-active{
	animation: go-up .45s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.show_content-leave-active{
	animation: go-up .35s cubic-bezier(0.22, 0.61, 0.36, 1) reverse;
}

@keyframes go-up {
	from {
		bottom: -100%;
		/* bottom: auto; */
	}
	to {
		bottom: 0;
		/* top:asuto; */
	}
}
</style>