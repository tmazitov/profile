<template>
	<div class="base-input" v-bind:class="{
		focused: isFocused,
	}">
		<div class="left icon" 
		v-if="leftIcon && !leftIcon.isHidden" 
		v-bind:class="{
			'is-button' : leftIcon.onClick
		}">
			<Icon  
				:icon="leftIcon.name" 
				:width="leftIcon.width" 
				:height="leftIcon.height" 
				:color="leftIcon.color"
				@click="leftIcon.onClick"
			/>
		</div>

		<input 
			type="text" 
			:placeholder="placeholder"
			:value="value" @input="updateValue"
			@focus="isFocused = true"
			@blur="isFocused = false">

		<div class="right icon" 
		v-if="rightIcon"

		v-bind:class="{
			'is-button' : rightIcon.onClick
		}">
			<Icon v-show="!rightIcon.isHidden"
				:icon="rightIcon.name" 
				:width="rightIcon.width" 
				:height="rightIcon.height" 
				:color="rightIcon.color"
				@click="rightIcon.onClick"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import IconT from '../../types/icon';
import {Icon} from '@iconify/vue'

export default  {
	name: "BaseInput",
	components: {
		Icon,
	},
	emits: [
		'update:value',	
	],
	props: {
		value: {
			type: String || Number,
			required: true,
		},
		placeholder: String,
		rightIcon: 	Object as () => IconT,
		leftIcon: 	Object as () => IconT,
	},
	modal: {
		prop: 'value',
		emit: 'update:value', 
	},
	setup(props, ctx){
		let isFocused = ref(false)
		let	rightIcon = computed(() => props.rightIcon)
		let	leftIcon = computed(() => props.leftIcon)
		let computedValue = computed(() => props.value)
		let updateValue = (ev: any) => {
			ctx.emit('update:value', ev.target["value"])
		}

		return{
			isFocused,
			rightIcon,
			leftIcon,
			updateValue,
			placeholder: props.placeholder,
			value: computedValue,
		}
	}
}
</script>

<style scoped>
.base-input{
	display: flex;
	flex-direction: row;
	gap: 8px;

	background: var(--input-background-color);
	border: 1px solid var(--border-color);
	border-radius: 6px;
	box-sizing: border-box;
	transition: box-shadow .15s;
	font-size: 15px;
	padding: 7px 11px;
	height: 36px;
}

.icon{
	height: 21px;
	width: 21px;
}
.icon.is-button{
	cursor: pointer;
	user-select: none;
}

.base-input > * {
	display: flex;
	align-items: center;
}

.base-input.focused{
	border-color: #353535;
	box-shadow: 0 0 1px 1px var(--primary-color-hover);
}

input{
	border: none;
	background: none;
	padding: 0;
	width: 100%;
	line-height: 21px;
	font-size: 14px;
	height: 21px;
}

input:focus{
	outline: none;
}
</style>