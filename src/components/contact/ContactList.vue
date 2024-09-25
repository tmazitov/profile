<template>
	<div class="contact-list">
		<div class="contact-item" 
		v-for="contact,index in contacts"
		:key="`contact-${index}`"
		@click="open(contact.link)">
			<Icon :icon="contact.icon" height="20px" width="20px"/>
			<div class="contact-item__name">
				{{contact.name}}
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
.contact-list{
	display: flex;
	flex-direction: column;
	gap: 16px;	
}

.contact-item {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap:  16px;
	cursor: pointer;
}

.contact-item > * {
	user-select: none;
	cursor: pointer;
}
</style>