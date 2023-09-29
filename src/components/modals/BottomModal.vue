<template>
	<div class="modal-container" v-bind:class="{
		visible: show,
	}">
		<transition name="show_content">
			<div class="modal-bottom__container" v-if="show" ref="modalBottom">
				{{ position }}
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script lang="ts">
import { computed, ref, watch, toRaw } from 'vue';

export default {
	name: "BottomModal",
	props: {
		show: Boolean,
	},	
	setup(props){
		let show = computed(() => props.show)
		let modalBottom = ref(null)
		let position = computed(() => {
			if (!modalBottom)
				return
			let position = modalBottom.value
			console.log('position :>> ', position);
		})
		return {
			show,
			modalBottom,
			position,
		}
	}	
}
</script>

<style scoped>
.modal-container.visible{
	position: fixed;
	z-index: 10000;
	top: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
	margin: 0;
	background: #20202087;
}

.modal-bottom__container{
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 1;

	box-sizing: border-box;

	background: #1a1a1a;
	border-top: 1px solid #2d2d2d;
	border-radius: 6px 6px 0 0 ;

	height: 240px;
	width: 100%;
	padding: 16px;
}

.show_content-enter-active{
	animation: go-up .45s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.show_content-leave-active{
	animation: go-up .45s cubic-bezier(0.22, 0.61, 0.36, 1) reverse;
}

@keyframes go-up {
	from {
		bottom: -300px;
	}
	to {
		bottom: 0;
	}
}
</style>