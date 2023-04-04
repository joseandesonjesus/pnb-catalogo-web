<template>
	<div v-if="loading" class="spinner" :class="[inputClass]"></div>
</template>
<script>
	export default {
		props: {
			loading: {
			type: Boolean,
			required: true,
		},
		inputClass: {
			type: String,
			default: '',
		},
		},
	}
</script>
<style>
	.splash-screen {
		background: #f2f0ee;
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 50;
	}
	.spinner-wrapper {
		position: absolute;
		left: 50%;
		top: 50%;

		transform: translate(-50%, -50%);
	}
	.spinner {
		/* width: 40px;
		height: 40px;
		margin: auto;
		background-color: rgb(7, 7, 112);

		border-radius: 100%;
		-webkit-animation: sk-scaleout 1s infinite ease-in-out;
		animation: sk-scaleout 1s infinite ease-in-out; */

		margin: auto;

		border: 3px solid #f3f3f3; /* Light grey */
		border-top: 3px solid #3498db; /* Blue */
		border-radius: 50%;
		width: 30px;
		height: 30px;
		animation: spin 2s linear infinite;
	}

	@-webkit-keyframes sk-scaleout {
		0% {
			-webkit-transform: scale(0);
		}
		100% {
			-webkit-transform: scale(1);
			opacity: 0;
		}
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	@keyframes sk-scaleout {
		0% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			opacity: 0;
		}
	}
</style>
