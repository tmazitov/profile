<template>
	<div class="contact-list-container">
		<div class="contact-list">
			
			<div class="contact-list__message">
				Contact with me!
			</div>
			
			<div class="contact-list__items">
				<div class="contact-item" 
				v-for="contact,index in contacts"
				:key="`contact-${index}`"
				@click="open(contact.link)">
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
</template>

<script setup lang="ts">
import contacts from '@/info/contacts';
import { Icon } from '@iconify/vue';
import BaseButton from '../inputs/BaseButton.vue';

const open = (link:string) => {
	if (!link)
		return
	window.open(link, '_blank')
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
</style>