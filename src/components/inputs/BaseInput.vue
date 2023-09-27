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
		v-if="rightIcon && !rightIcon.isHidden" 
		v-bind:class="{
			'is-button' : rightIcon.onClick
		}">
			<Icon
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

	background: #242424;
	border: 1px solid #2d2d2d;
	border-radius: 6px;
	height: fit-content;
	padding: 0 8px;
	transition: box-shadow .15s;
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
	box-shadow: 0 0 1px 1px #5CB3FF9f;
}

input{
	border: none;
	background: none;
	padding: 8px 0;
	width: 100%;
}

input:focus{
	outline: none;
}
</style>