<template>
	<MainLayout 
	:hide-header-on-scroll="isHideHeaderOnScroll"
	:disable-mobile-padding="isDisableMobilePadding">
		<router-view></router-view>
	</MainLayout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import MainLayout from './components/layouts/MainLayout.vue';
import { computed } from 'vue';

const route = useRoute()
const isHideHeaderOnScroll = computed(() => route.name == 'home')
const isDisableMobilePadding = computed(() => route.name == 'project')

</script>

<style scoped>

</style>
