<template>
	<div class="footer">
		Comming soon
	</div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>
.footer{
	width: 100%;
	height: 120px;
	padding: 12px 0;
	margin-top: 24px;
	background: var(--card-background-color);
}

@media (max-width: 768px) {
	.footer{
		padding-left: 24px;
		padding-right: 24px;
	}
}
@media (min-width: 768px) {
	.footer {
		padding-left: max(169px, 15%);
		padding-right: max(169px, 15%);
	}
}
</style>