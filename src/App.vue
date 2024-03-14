<template>
	<MainLayout v-if="!isPageWithoutLayout()">
		<router-view></router-view>
	</MainLayout>
	<router-view v-else></router-view>
</template>

<script lang="ts" setup>
	import { useRoute } from 'vue-router';
import MainLayout from './components/layouts/MainLayout.vue';

	let pagesWithoutLayout = [
		'Auth'
	]

	let route = useRoute()
	let isPageWithoutLayout = () => {
		return pagesWithoutLayout.includes(route.name as string)
	}

</script>

<style scoped>

</style>
