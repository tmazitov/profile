<template>
    <div class="header__component">
        <div class="header__item logo">My Dev Journey</div>
        <div class="header__section">
            <div class="header__item">Home</div>
            <div class="header__item">Articles</div>
            <div class="header__item">Library</div>
        </div>
        <div class="header__section">
            <div class="header__item">Github</div>
            <div class="header__item">LinkedIn</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Header",
}
</script>

<style>
.header__component{
    height: 56px;
    width: calc(100% - 64px);
    border-bottom: 1px solid;
    border-color: #2d2d2d;
    position: sticky;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 24px;
    padding: 0 32px;
}

.header__section{
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-weight: 500;
}

.header__item:hover{
    color: #5CB3FF;
    text-shadow: none;
}

.header__item{
    display: flex;
    font-size: 14px;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: color .25s;
}

.header__item.logo{
    font-size: 20px;
    font-weight: 700;
}
</style>