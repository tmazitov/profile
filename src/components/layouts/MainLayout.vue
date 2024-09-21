<template>
    <div class="main-layout">
        <Header :hide-on-scroll="hideHeaderOnScroll"></Header>
        <div class="main-layout__content" v-bind:class="{
			'centralized-content': withCentralizedContent,
		}">
            <slot></slot>
			<Footer/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
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
})

</script>

<style scoped>

.main-layout{
	position: relative;
	height: 100dvh;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.main-layout__content{
	min-height: 100dvh;
	box-sizing: border-box;
	flex: 1;
	margin-top: 56px;
	max-width: 960px
}

@media (max-width: 768px) {
	
	.main-layout__content{
		width: calc(100% - 24px - 24px);
		margin-left: 24px;
		margin-right: 24px;
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