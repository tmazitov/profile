<template>
    <div class="main__layout">
        <Header></Header>
        <slot></slot>
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

</style>