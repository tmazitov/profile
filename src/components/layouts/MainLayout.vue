<template>
    <div class="main-layout">
        <Header></Header>
        <div class="main-layout__content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue';

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
	height: 100%;
	box-sizing: border-box;
}

@media (max-width: 768px) {
	.main-layout__content{
		padding-left: 24px;
		padding-right: 24px;
	}
}
@media (min-width: 768px) {
	.main-layout__content {
		padding-left: 32px;
		padding-right: 32px;
	}
}
</style>