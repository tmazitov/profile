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
		</div>
	</div>
</template>

<script setup lang="ts">
import contacts from '@/info/contacts';
import { Icon } from '@iconify/vue';

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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 60px 0;
}

.contact-list{
	display: flex;
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
}

.contact-item {
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	padding: 0 10px;
	transition: .3s color;
}

.contact-item:hover {
	color: var(--primary-color);
}
.contact-item:active {
	color: var(--primary-color-opacity);
}

.contact-item:last-child{
	padding-right: 0;
}

.contact-item:first-child{
	padding-left: 0;
}

.contact-item + .contact-item {
	border-left: 1px solid var(--border-color);
}

.contact-item > * {
	user-select: none;
	cursor: pointer;
}
</style>