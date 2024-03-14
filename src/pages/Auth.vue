<template>
	<div class="auth-page">
		<AuthContainer/>
	</div>
</template>

<script lang="ts">;
import AuthContainer from '../components/auth/AuthContainer.vue';

export default {
	name: "AuthPage",
	components: {
		AuthContainer,
	},
	setup() {
		
	}
}
</script>

<style lang="css" scoped>
.auth-page {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100dvh;
	width: 100dvw;
}
</style>