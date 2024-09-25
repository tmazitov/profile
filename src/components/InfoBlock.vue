<template>
	<div class="info-block" :id="`info-block-${name}`" v-bind:class="{
		fullscreen: fullscreen,
		'fit-content': fitContent,
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
	name: {
		type: String,
		required: true,
	},
	title: String,
	fullscreen: Boolean,
	fitContent: Boolean,
})
</script>

<style scoped>
.info-block{
	width: 100%;
	min-height: calc(100vh - 56px - 24px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 24px;
}

.info-block.fullscreen{
	min-height: 100vh;
}

.info-block.fit-content{
	min-height: auto;
}

.info-block__title{
	font-size: 2.4em;
	font-weight: bold;
}
</style>