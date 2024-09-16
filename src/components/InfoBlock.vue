<template>
	<div class="info-block">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>
.info-block{
	width: 100%;
	height: calc(100dvh - 56px);
	display: flex;
}
</style>