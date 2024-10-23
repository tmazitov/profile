<template>

	<span class="mobile-contacts">
		<ModalTemplate v-model="isShowContacts">
			<div class="contacts-modal-container">
				<ContactList/>
			</div>
		</ModalTemplate>
	</span>

	<transition name="header">
		<div class="header" v-if="isShow">
			
			<!-- Logo -->

			<div class="header__item logo" @click="goToPage('home')">
				Timur Mazitov
			</div>

			<!-- Header center section -->

			<div class="header__section">
				<div class="header__item" 
				v-for="item, index in menuItems"
				:key="`menu-first-part__item-${index}`"
				@click="() => item.action()">
					{{ item.title }}
				</div>
			</div>

			<div class="desktop-contacts" v-if="isShowContacts">
				<ContactList/>
			</div>


			<!-- Menu for mobile -->

			<div class="header__menu">
				<SideMenu v-model="sideBarIsOpen">
					<div class="side-menu__content">
						<div class="side-menu__list">
							<div class="side-menu__item" 
							v-for="item, index in menuItems"
							:key="`side-menu__${index}`" 
							@click="() => item.action()">
								<div class="side-menu__item-icon">
									<Icon :icon="item.icon" width="22" height="22" />
								</div>
								<div class="side-menu__item-title">{{ item.title }}</div>
							</div>
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
	action: Function
}
const toggleContacts = () => {
	isShowContacts.value = !isShowContacts.value
}

const menuItems:Array<MenuItem> = [
	{title: "Home", icon: "tabler:home-2", action: () => {goToPage('home')}},
	{title: "Projects", icon: "tabler:briefcase", action: () => {goToPage('project-list')}},
	{title: "Contacts", icon: "tabler:message-2", action: toggleContacts},
	// {title: "Articles", icon: "tabler:article", pageName: undefined},
	// {title: "Library", icon: "tabler:archive", pageName: undefined},
]

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
    border: 1px solid;
    border-color: var(--border-color);
    background: var(--background-color);
    position: fixed;
    top: 16px;
	z-index: 3;

	width: calc(100% - max(169px, 15%) - max(169px, 15%));
	border-radius: var(--border-radius);
	box-sizing: border-box;

    display: flex;
    flex-direction: row;
    gap: 32px;
    padding: 0 24px;
	max-width: 960px;
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
	cursor: pointer;
}

.header__item.logo{
    font-size: 20px;
    font-weight: 700;
}

@media (max-width: 768px) {
	.header{
		padding: 0 var(--mobile-padding);
		width: 100%;
		left: 0;
		right: 0;
		top: 0;
		border-radius: 0;
		justify-content: space-between;
	}
	.header__section{
		display: none;
	}
    .header__component{
        width: calc(100% - 32px);
        padding: 0 16px;
    }
	.desktop-contacts{
		display: none;
	}

}
@media (min-width: 769px) {
	.header__menu{
		display: none;
	}
	.mobile-contacts{
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
	cursor: pointer;

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

.desktop-contacts{
	position: absolute;
	top: 36px;
	right: 50%;
	transform: translateX(50%);
}
</style>