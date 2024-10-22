<template>
	<div class="contact-list-container">

		<div class="contact-list-wrapper">
			<transition name="copied">
				<div class="contact-list__message-copied" @click="isCopied = false" v-if="isCopied">
					Successfully copped!
				</div>
			</transition>

			<div class="contact-list">
				<div class="contact-list__message">
					Contact with me!
				</div>
				
				<div class="contact-list__items">
					<div class="contact-item" 
					v-for="contact,index in contacts"
					:key="`contact-${index}`"
					@click="contactAction(contact.name, contact.link)">
						<Icon :icon="contact.icon" height="20px" width="20px"/>
					</div>
				</div>

				<div class="contact-list__message with-separate-line">
					<div class="line"></div>
					<span>Or</span>
					<div class="line"></div>
				</div>

				<BaseButton title="Download my CV"/>
			</div>
		
		</div>
	</div>
</template>

<script setup lang="ts">
import contacts from '@/info/contacts';
import { Icon } from '@iconify/vue';
import BaseButton from '../inputs/BaseButton.vue';
import Copier from '@/types/copier';
import { ref } from 'vue';

const isCopied = ref(false)

const contactAction = (action: string, link:string) => {
	if (action == 'email') {
		Copier.copy(link)
		isCopied.value = true
		setTimeout(() => {
			isCopied.value = false
		}, 3000)
	} else if (link){
		window.open(link, '_blank')
	}
}

</script>

<style scoped>
.contact-list-container{
	width: 100%;

	display: flex;
	flex-direction: row;
	gap:16px;
	justify-content: center;
	align-items: center;
	margin: 60px 0;
	position: relative;
}

.contact-list-wrapper{
	width: fit-content;
	max-width: 400px;
	position: relative;
}

.contact-list{
	display: flex;
	height: 100%;
	flex-direction: column;
	gap: 10px;
	background: var(--card-background-color);
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
	padding: 10px;
	align-items: center;
}

.contact-list__items {
	display: flex;
	flex-direction: row;
	width: 100%;
}

.contact-item {
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: .3s color;
}

.contact-item:hover {
	color: var(--primary-color);
}
.contact-item:active {
	color: var(--primary-color-opacity);
}


.contact-item + .contact-item {
	border-left: 1px solid var(--border-color);
}

.contact-item > * {
	user-select: none;
	cursor: pointer;
}

.contact-list__message{
	width: 100%;
	font-size: 16px;
	text-align: center;
	font-weight: 600;
}

.with-separate-line {
	font-size: 0.9em;
	display: flex;
	align-items: center;
}

.with-separate-line .line {
	flex-grow: 1;
	height: 1px;
	background-color: var(--border-color);
}

.with-separate-line span {
  	margin: 0 10px;
}

.contact-list__message-copied{
	position: absolute;
	top: -50px;
	left: 0;
	width: 100%;
	height: 40px;
	background: var(--primary-color-opacity);
	border: 1px solid var(--primary-color);
	border-radius: var(--border-radius);
	padding: 8px;
	text-align: center;
	font-weight: 600;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 3px var(--primary-color);
}

.copied-enter-active {
	animation: copied .2s;
}

.copied-leave-active {
	animation: copied .2s reverse;
}

@keyframes copied {
	from {
		opacity: 0;
		top: -20px;
	}
	to {
		opacity: 1;
		top: -50px;
	}
}
</style>