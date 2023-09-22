<template>
	<div class="main__page">
		<div class="content">
			<div class="greetings__container">
				<div class="greetings">
					My Dev<span class="simple">elopment</span>
					Journey
				</div>
				<div class="comment">
					Hi! My name is Tim. Im a backend + frontend developer.<br/>
					This Site about my journey in the world of a programming languages and mathematics.<br/>
					Here you can find some information about me and my projects.<br/>
				</div>
				<div class="tools">
					<BaseButton title="Explore" primary/>
					<BaseButton title="Get started"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import BaseButton from '../components/BaseButton.vue';

export default {
	name: "MainPage",
	components: {
		BaseButton,
	}
}
</script>

<style>
.content{
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
}

.greetings__container{
	padding: 96px 64px;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 16px;
}

.simple{
	font-weight: 300;	
}
.greetings{
	font-size: 3.5em;
	line-height: 64px;
	font-weight: 600;
	text-align: left;
}

.comment{
	font-size: 14px;
}

.tools {
	margin-top: 8px;
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
}

@media (max-width: 768px) {
	.greetings__container{
		padding: 32px;
	}
}
</style>