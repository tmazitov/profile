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

.content{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
}

.content > * {
	width: 60%;
}

@media (max-width: 768px) {
	.content > *{
		margin: 0 16px;
		width: auto;
	}
}
@media (min-width: 768px) {
	.content > *{
		margin: 0 32px; 
	}
}
</style>