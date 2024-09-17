<template>
    <div class="header">
        
		<!-- Logo -->

		<div class="header__item logo" @click="goToPage('home')">
			Timur Mazitov
		</div>

		<!-- Header center section -->

        <div class="header__section">
            <div class="header__item" 
			v-for="item, index in menuFirstPart()"
			:key="`menu-first-part__item-${index}`"
			@click="goToPage(item.pageName)">
				{{ item.title }}
			</div>
        </div>

		<!-- Header end section -->

        <div class="header__section">
            <div class="header__item" 
			v-for="item, index in menuSecondPart()"
			:key="`menu-second-part__item-${index}`"
			@click="goToPage(item.pageName)">
				{{ item.title }}
			</div>
        </div>

		<!-- Menu for mobile -->

        <div class="header__menu">
            <SideMenu v-model:is-open="sideBarIsOpen">
                <div class="side-menu__list">
                    <div class="side-menu__item" 
					v-for="item, index in menuItems"
					:key="`side-menu__${index}`" @click="goToPage(item.pageName)">
                        <div class="side-menu__item-icon">
                            <Icon :icon="item.icon" width="24" height="24" />
                        </div>
                        <div class="side-menu__item-title">{{ item.title }}</div>
                    </div>
                </div>
            </SideMenu>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SideMenu from './menu/SideMenu.vue'
import {Icon} from '@iconify/vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const sideBarIsOpen = ref(false)

type MenuItem = {
	title: string
	icon: string
	pageName: string|undefined
}

const menuItems:Array<MenuItem> = [
	{title: "Home", icon: "tabler:home-2", pageName: "home"},
	{title: "Projects", icon: "tabler:briefcase", pageName: "project-list"},
	{title: "Articles", icon: "tabler:article", pageName: undefined},
	{title: "Library", icon: "tabler:archive", pageName: undefined},
	{title: "Github", icon: "tabler:brand-github", pageName: undefined},
	{title: "LinkedIn", icon: "tabler:brand-linkedin", pageName: undefined},
]

const menuFirstPart = () => menuItems.slice(0, 4)
const menuSecondPart = () => menuItems.slice(4, 6)


const goToPage = (pageName: string|undefined) => {
	if (!pageName)
		return 
	const mainLayout = document.querySelector(".main__layout")
	if (mainLayout){
		mainLayout.scrollTo({left:0,top:0})
	} 
	router.push({name: pageName})
	sideBarIsOpen.value = false
}
</script>

<style>
@import url("../../../assets/theme.css");

.header{
    height: 56px;
    border-bottom: 1px solid;
    border-color: var(--border-color);
    background: var(--background-color);
    position: sticky;
    top: 0;
	left: 0;
	right: 0;
	z-index: 3;

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
    color: var(--primary-color-hover);
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
	.header{
		padding: 0 24px;
	}
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