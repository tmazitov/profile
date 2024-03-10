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
	height: 100vh;
	overflow: auto;
}

.content{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: auto;
	gap: 24px;
}

.content > * {
	width: 60%;
}

@media (max-width: 768px) {
	.content > *{
		padding: 0 16px;
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