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
        <div class="header__menu">
            <SideMenu>
                <div class="side-menu__list">
                    <div class="side-menu__item">
                        <div class="side-menu__item-icon">
                            <Icon icon="tabler:home-2" width="24" height="24" />
                        </div>
                        <div class="side-menu__item-title">Home</div>
                    </div>
                    <div class="side-menu__item">
                        <div class="side-menu__item-icon">
                            <Icon icon="tabler:article" width="24" height="24" />
                        </div>  
                        <div class="side-menu__item-title">Articles</div>
                    </div>
                    <div class="side-menu__item">
                        <div class="side-menu__item-icon">
                            <Icon icon="tabler:archive" width="24" height="24" />
                        </div>
                        <div class="side-menu__item-title">Library</div>
                    </div>
                    <div class="side-menu__item">
                        <div class="side-menu__item-icon">
                            <Icon icon="tabler:brand-github" width="24" height="24" />
                        </div>
                        <div class="side-menu__item-title">Github</div>
                    </div>
                    <div class="side-menu__item">
                        <div class="side-menu__item-icon">
                            <Icon icon="tabler:brand-linkedin" width="24" height="24" />
                        </div>
                        <div class="side-menu__item-title">LinkedIn</div>
                    </div>
                </div>
            </SideMenu>
        </div>
    </div>
</template>

<script lang="ts">
import SideMenu from './menu/SideMenu.vue'
import {Icon} from '@iconify/vue'

export default {
    name: "Header",
    components: {
        SideMenu,
        Icon,
    }
}
</script>

<style>
.header__component{
    height: 56px;
    width: calc(100% - 64px);
    border-bottom: 1px solid;
    border-color: #2d2d2d;
    position: sticky;
    background: #1a1a1a;
    top: 0;
        
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

@media (max-width: 768px) {
	.header__section{
		display: none;
	}
    .header__component{
        width: calc(100% - 32px);
        padding: 0 16px;
    }
}
@media (min-width: 769px) {
	.header__menu{
		display: none;
	}
}

.side-menu__list {
    display: flex;
    flex-direction: column;
}

.side-menu__item {
    padding: 10px 8px;
    font-size: 16px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    gap: 8px;
}

.side-menu__item > *{ 
    display: flex;
    justify-content: center;
}
</style>