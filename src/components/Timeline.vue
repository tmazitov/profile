<template>
	<div class="timeline" ref="timeline">
		<div class="timeline__item" v-for="item, index in items"
		:key="`timeline__item-${index}`"  
		v-bind:class="{opened: index == open}"
		v-bind:style="{
			'grid-template-columns': `${width} 48px 1fr`,
		}">
			<div class="timeline__item-key" v-bind:style="{	maxWidth: `${width}`}">
				<div>{{ item.periodStart() }}</div>
				<div style="padding: 0 8px">{{ '-' }}</div>
				<div>{{ item.periodEnd() }}</div>
			</div>
			<div class="timeline__item-separator">
				<div class="separator-point">
					<div class="inner-circle"></div>
				</div>
				<div class="separator-line"></div>
			</div>
			<div class="timeline__item-value">
				<div class="value-header" @click="toggle(index)">
					<div class="value-header__title">
						{{ item.title }}
					</div>
					<div class="value-header__button" >
						<Icon v-show="index != open" icon="tabler:plus" height="20px" width="20px"/>
						<Icon v-show="index == open" icon="tabler:minus" height="20px" width="20px"/>
					</div>
				</div>
				<div class="value-content" v-bind:class="{opened: index == open}">
					{{ item.comment }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { JourneyItem } from '../info/journey';
import { computed, defineProps, onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue/dist/iconify.js';

const open = ref<number|null>(null)
const timeline = ref<HTMLElement|null>(null)

const toggle = (index: number) => {
	if (open.value == null || open.value != index) {
		open.value = index
	} else {
		open.value = null
	}
}
const props = defineProps({
  	items: {
		type: Array<JourneyItem>,
		required: true,
		default: () => [],
	},
})

const width = ref<string>('fit-content')

onMounted(() => {
	if (!timeline.value) 
		return 0
	const timeLineItemsWidths = Array.from(timeline.value.querySelectorAll('.timeline__item-key')) 
		.map((item:Element) => {
			return item.getBoundingClientRect().width
		})
	width.value = `${Math.max(...timeLineItemsWidths)}px`
})

</script>

<style scoped>



.timeline__item{
	display: grid;
	grid-template-columns: 1fr 48px 2fr;
	width: 100%;
	height: 100%;
	transition: max-height .3s;
}

.timeline__item.opened{
	overflow: auto;
}



.timeline__item > .timeline__item-key{
	font-size: 1.2em;
	user-select: none;
	width: 100%;
	line-height: 1.3;
	padding-bottom: 16px;
}

@media (min-width: 768px) {
	.timeline__item > .timeline__item-key > div{
		display: inline-block;
	}
}

.timeline__item-key > div{
	height: fit-content;
	line-height: 1.3;
}

.timeline__item > .timeline__item-separator{
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
}

.timeline__item > .timeline__item-value{
	width: 100%;
	font-size: 1.2em;
	font-weight: 300;
	line-height: 1.3;
	position: relative;
	/* flex: 1; */
	display: flex;
	gap: 8px;
	flex-direction: column;
	padding-bottom: 16px;
}

.separator-point{
	position: absolute;
	top: 5px;
	height: 16px;
	width: 16px;
	left: 16px;
	border-radius: 50%;
	border: 1.5px solid white;
	background: black;
	z-index: 2;
	
	display: flex;
	justify-content: center;
	align-items: center;
	transition: box-shadow .3s;
}

.separator-point > .inner-circle{
	transition: background .3s;
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background: black;
}

.timeline__item.opened .separator-point{
	box-shadow: 0 0 8px var(--primary-color);
}

.timeline__item.opened .separator-point > .inner-circle {
	background: var(--primary-color);
}

.value-header{
	display: flex;
	gap: 16px;
	align-items: flex-start;
	cursor: pointer;
}

.value-header__title{
	width: fit-content;
	user-select: none;
}

.separator-line{
	height: 100%;
	width: 1px;
	content: "";
	background-color: white;
}

.separator-line::before{
	height: 1.2em;
	width: 1.2em;
	border: 1.5px solid white;
	border-radius: 50%;
}

.value-header__button{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 25px;
	cursor: pointer;
}

.value-content{
	font-size: 0.8em;
	color: grey;
	max-height: 0;
	transition: max-height .3s;
	overflow: auto;
}

.value-content.opened{
	max-height: 400px;
}

</style>