<template>
	<select
		class="b-1 b-gray-3 rounded-4 col-span-5 p-8"
		aria-label="Escolha uma opção"
		@change="emitSelect"
	>
		<option value="" disabled selected hidden>Escolha uma opção</option>
		<option
			v-for="(option, index) in options"
			:key="index"
			:value="option.value"
			:disabled="option.quantity === 0"
		>
			{{ option.name }}
		</option>
	</select>
</template>

<script setup>
	const props = defineProps({
		options: {
			type: Array,
			required: true,
		},
		defaultValue: {type: String, default: ''},
	})

	const emit = defineEmits(['select'])

	// const selectedValue = ref(props.defaultValue)

	function emitSelect(event) {
		// console.log('emit dropdown component => ', event.target.value)
		emit('select', event.target.value)
	}
</script>
