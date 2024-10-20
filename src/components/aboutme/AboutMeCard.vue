<template>
	<div class="about-me-card__container">
		<div class="about-me-card">
			<div class="card__photo">
				<img src="@/assets/images/profile_photo.jpg" alt="profile_photo">
			</div>
			<div class="card_description">
				<p>I'm full-stack developer proficient in Golang and JavaScript, with expertise in both backend and frontend development. 
					Currently I studying at School 42, where I'm deepening my knowledge of software engineering and preparing for a future in blockchain.</p> 
				My work includes development and deploying Vue.js websites and Golang APIs.
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
  
</script>

<style scoped>

.about-me-card__container{
	display: flex;
}

.about-me-card{
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 500px;
	padding: 10px;
	min-height: 134px;
	background: var(--card-background-color);
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
}

.card__photo{
	width: 112px;
	height: 112px;
	border: 1px solid var(--border-color);
	border-radius: 50%;
	box-shadow: 0 0 10px var(--primary-color-opacity);
	overflow: hidden;
	position: relative;
}

@media (max-width: 768px) {
	.about-me-card{
		flex-direction: column;
		width: 100%;
		max-width: 100%;
	}
	.card__photo{
		width: 168px;
		height: 168px;
	}
}	


.card__photo > img {
	position: absolute;
	left: 0;
	top: -20%;
	width: 100%;
	object-fit: cover;
}

.card_description{
	flex: 1;
}

</style>