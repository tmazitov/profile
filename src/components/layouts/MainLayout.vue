<template>
    <div class="main-layout">
        <Header :hide-on-scroll="hideHeaderOnScroll"></Header>
        <div class="main-layout__content" v-bind:class="{
			'is-hide-header': hideHeaderOnScroll,
			'is-disable-mobile-padding': disableMobilePadding,
		}">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
import { defineProps } from 'vue';

defineProps({
	hideHeaderOnScroll: {
		type: Boolean,
		default: false,
	},
	withCentralizedContent: {
		type: Boolean,
		default: false,
	},
	disableMobilePadding: {
		type: Boolean,
		default: false,
	},
})


</script>

<style scoped>

.main-layout{
	position: relative;
	height: calc(100dvh - 56px);
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 56px;
}

.main-layout__content{
	min-height: 100vh;
	box-sizing: border-box;
	flex: 1;
	max-width: 960px;
}

.main-layout__content.is-hide-header{
	margin-top: 0;
}

@media (max-width: 768px) {
	
	.main-layout__content{
		width: calc(100% - var(--mobile-padding) - var(--mobile-padding));
		margin-left: var(--mobile-padding);
		margin-right: var(--mobile-padding);
	}
	.main-layout__content.is-disable-mobile-padding{
		width: 100%;
		margin-left: 0;
		margin-right: 0;
	}
}
@media (min-width: 768px) {
	.main-layout__content {
		width: calc(100% - max(169px, 15%) - max(169px, 15%));
		margin-left: max(169px, 15%);
		margin-right: max(169px, 15%);
	}
}
</style>