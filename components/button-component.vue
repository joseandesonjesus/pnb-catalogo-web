<template>
	<button
		:class="[
			'duration-400 ease-in-out',
			btnClass,
			(btnDisabled || displayLoading) &&
				'pointer-events-none cursor-not-allowed',
		]"
		:type="btnType"
		:disabled="btnDisabled || displayLoading"
		:title="btnTitle"
		@click="onClick"
	>
		<div v-if="!displayLoading" class="display-contents cursor-pointer">
			<slot />
		</div>
		<div v-else>
			<Icon name="line-md:loading-twotone-loop" class="wh-24" />
		</div>
	</button>
</template>

<script>
	export default {
		props: {
			onClick: {
				type: Function,
				default: () => {},
			},
			btnClass: {
				type: [String, Array],
				default: '',
			},
			btnType: {
				type: String,
				default: 'button',
			},
			btnTitle: {
				type: String,
				default: '',
			},
			btnDisabled: Boolean,
			displayLoading: Boolean,
		},
	}
</script>
