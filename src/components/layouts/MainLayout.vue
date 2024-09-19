<template>
    <div class="main-layout">
        <Header :hide-on-scroll="hideHeaderOnScroll"></Header>
        <div class="main-layout__content" v-bind:class="{
			'centralized-content': withCentralizedContent,
		}">
            <slot></slot>
        </div>
		<Footer/>
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
	width: 100dvw;
	overflow: auto;
}

.main-layout__content{
	width: 100%;
	box-sizing: border-box;
}

.main-layout__content.centralized-content{
	display: flex;
	justify-content: center;
	padding: 0 15%;
}

@media (max-width: 768px) {
	.main-layout__content{
		padding-left: 24px;
		padding-right: 24px;
	}
	.main-layout__content.centralized-content{
		padding-left: 24px;
		padding-right: 24px;	
	}
}
@media (min-width: 768px) {
	.main-layout__content {
		padding-left: max(169px, 15%);
		padding-right: max(169px, 15%);
	}
	.main-layout__content.centralized-content{
		padding-left: max(169px, 15%);
		padding-right: max(169px, 15%);
	}
}
</style>