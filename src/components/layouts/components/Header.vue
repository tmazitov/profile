<template>

	<ModalTemplate v-model="isShowContacts">
		<div class="contacts-modal-container">
			<ContactList/>
		</div>
	</ModalTemplate>

	<transition name="header">
		<div class="header" v-if="isShow">
			
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
					<Icon :icon="item.icon" width="24" height="24" />
				</div>
			</div>

			<!-- Menu for mobile -->

			<div class="header__menu">
				<SideMenu v-model="sideBarIsOpen">
					<div class="side-menu__content">
						<div class="side-menu__list">
							<div class="side-menu__item" 
							v-for="item, index in menuFirstPart()"
							:key="`side-menu__${index}`" @click="goToPage(item.pageName)">
								<div class="side-menu__item-icon">
									<Icon :icon="item.icon" width="24" height="24" />
								</div>
								<div class="side-menu__item-title">{{ item.title }}</div>
							</div>
						</div>

						<div class="side-menu__contacts" @click="isShowContacts = true">
							Contacts
						</div>
					</div>
				</SideMenu>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import SideMenu from './menu/SideMenu.vue'
import { useRoute, useRouter } from 'vue-router';
import { onMounted, onUpdated, ref } from 'vue';
import { Icon } from '@iconify/vue';
import ModalTemplate from '@/components/modals/ModalTemplate.vue';
import ContactList from '@/components/contact/ContactList.vue';

const route = useRoute()
const router = useRouter()
const sideBarIsOpen = ref(false)
const isShow = ref(false)
const isShowContacts = ref(false)
const isHideEnabled = ref(false)

const props = defineProps({
	hideOnScroll: {
		type: Boolean,
		default: false,
	},
})

const scrollHandler = (event:any) => {
	if (!isShow.value && event.target.scrollTop > 240)
		isShow.value = true
	else if (isShow.value && event.target.scrollTop <= 240)
		isShow.value = false
}

const setupHideOnScroll = () => {
	const layout = document.querySelector(".main-layout")
	if (!layout)
		return
	isShow.value = layout.scrollTop > 240
	layout.addEventListener('scroll', scrollHandler)
	isHideEnabled.value = true
}

const removeHideOnScroll = () => {
	const layout = document.querySelector(".main-layout")
	if (!layout)
		return
	isShow.value = true
	layout.removeEventListener('scroll', scrollHandler)
	isHideEnabled.value = false
}

onMounted(() => {
	if (props.hideOnScroll) { 
		setupHideOnScroll()
	} else {
		isShow.value = true
	}
})

onUpdated(() => {
	if (props.hideOnScroll && !isHideEnabled.value) {
		setupHideOnScroll()
	}
	if (!props.hideOnScroll && isHideEnabled.value) {
		removeHideOnScroll()
	}
})

type MenuItem = {
	title: string
	icon: string
	pageName: string|undefined
}

const menuItems:Array<MenuItem> = [
	{title: "Home", icon: "tabler:home-2", pageName: "home"},
	{title: "Projects", icon: "tabler:briefcase", pageName: "project-list"},
	// {title: "Articles", icon: "tabler:article", pageName: undefined},
	// {title: "Library", icon: "tabler:archive", pageName: undefined},
	{title: "Github", icon: "tabler:brand-github", pageName: undefined},
	{title: "LinkedIn", icon: "tabler:brand-linkedin", pageName: undefined},
]

const menuFirstPart = () => menuItems.slice(0, 2)
const menuSecondPart = () => menuItems.slice(2, 4)

const goToPage = (pageName: string|undefined) => {
	if (!pageName)
		return 
	const mainLayout = document.querySelector(".main-layout")
	if (pageName == route.name) {
		if (mainLayout){
			mainLayout.scrollTo({left:0,top:0, behavior: 'smooth'})
		}
		return
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
    position: fixed;
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
		padding: 0 var(--mobile-padding);
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
	gap: 16px;
}

.side-menu__item {
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

.header-enter-active {
	animation: header 0.3s;
}

.header-leave-active {
	animation: header 0.3s reverse;
}

@keyframes header {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.side-menu__content{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	gap: 16px;
}

.side-menu__contacts{
	display: flex;
	flex-direction: row;
	gap: 16px;
	padding-top: 16px;
	border-top: 1px solid var(--border-color);
	text-decoration: underline;
}

.contacts-modal-container{
	position: absolute;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>