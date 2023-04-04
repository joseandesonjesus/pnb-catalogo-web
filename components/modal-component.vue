<template>
	<div class="modal-overlay" @click="$emit('close-modal')">
		<div class="modal" @click.stop>
			<slot name="body"> </slot>
		</div>
		<div class="close text-black" @click="$emit('close-modal')">X</div>
	</div>
</template>

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		background-color: #0000009c;
	}

	.modal {
		text-align: center;
		background-color: white;
		height: 400px;
		width: 300px;
		margin-top: 30vh;
		padding: 60px 0;
		border-radius: 20px;
	}
	.close {
		margin: 31vh 0 0 -25px;
		cursor: pointer;
	}

	.close-img {
		width: 25px;
	}

	.check {
		width: 150px;
	}

	h6 {
		font-weight: 500;
		font-size: 28px;
		margin: 0px 0;
	}

	p {
		font-size: 16px;
		margin: 20px 0;
	}

	button {
		background-color: #ac003e;
		width: 150px;
		height: 40px;
		color: white;
		font-size: 14px;
		border-radius: 16px;
		margin-top: 0px;
	}
</style>
