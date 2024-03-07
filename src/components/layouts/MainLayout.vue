<template>
    <div class="main__layout">
        <Header></Header>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';

export default {
    name: "MainLayout",
    components: {
        Header,
    }
}
</script>

<style>

.main__layout{
	min-height: 100vh;
	overflow: hidden;
}

.content{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	overflow-y: auto;
	gap: 24px;
}

.content > * {
	width: 60%;
}

@media (max-width: 768px) {
	.content > *{
		margin: 0 16px;
		width: auto;
		box-sizing: border-box;
	}
}
@media (min-width: 768px) {
	.content > *{
		margin: 0 32px; 
	}
}
</style>