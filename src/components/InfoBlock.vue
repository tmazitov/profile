<template>
	<div class="info-block" v-bind:class="{
		fullscreen: fullscreen,
	}">
		<div class="info-block__title" v-if="title && !$slots['title']">
			{{ title }}
		</div>
		<div class="info-block__title" v-if="$slots['title']">
			<slot name="title"></slot>
		</div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: String,
	fullscreen: Boolean,
})
</script>

<style scoped>
.info-block{
	width: 100%;
	min-height: calc(100dvh - 56px - 24px);
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.info-block.fullscreen{
	min-height: 100dvh;
}

.info-block__title{
	font-size: 2.4em;
	font-weight: bold;
}
</style>