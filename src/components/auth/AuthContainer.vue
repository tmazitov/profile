<template>
	<div class="auth-container">
		<div class="auth-title">Authorization</div>

		<!-- Base auth -->

		<div class="auth-form">
			<BaseInput v-model:value="data.email" label="Email"/>
			<BaseButton title="Login" primary centered/>
			<div class="create-account-message">
				If you don't have an account you can create them <a href="#">here</a>
			</div>
			<div class="separator"></div>
			<div class="icons">
				<BaseIconButton icon="tabler:brand-github"/>
				<BaseIconButton icon="tabler:brand-google"/>
			</div>
		</div>


	</div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import BaseInput from '../inputs/BaseInput.vue';
import BaseButton from '../inputs/BaseButton.vue';
import BaseIconButton from '../inputs/BaseIconButton.vue';

export default {
	name: "AuthContainer",
	components: {
		BaseInput,
		BaseButton,
		BaseIconButton,
	},
	setup() {

		const data = reactive({
			email: '',		
		})

		return {
			data,
		};	
	},
};
</script>

<style scoped>
.auth-container {
	border-radius: 12px;
	border: 1px solid var(--border-color);
	background: var(--card-background-color);
	height: fit-content;
	width: 300px;
	padding: 16px;
	box-sizing: border-box;
}

.auth-title{
	font-size: 24px;
	font-weight: 500;
	color: var(--text-color);
}

.auth-form{
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.separator{
	width: 100%;
	height: 1px;
	background-color: var(--border-color);
}

.create-account-message{
	color: var(--text-color-light);
	font-size: 13px;
}

.icons{
	display: flex;
	flex-direction: row;
	gap: 16px;
}

@media (max-width: 480px) {
	.auth-container{
		width: 100%;
		margin: 0 20px;
	}
}
</style>