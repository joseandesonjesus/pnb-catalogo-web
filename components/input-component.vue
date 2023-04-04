<template>
	<fieldset>
		<legend v-show="inputTitle" class="text-12 text-gray-6">{{ inputTitle }}</legend>
		<input
			v-model.lazy="inputValue"
			:class="[inputClass]"
			:type="inputType"
			:placeholder="inputPlaceholder"
			:v-mask="inputMask"
			@blur="onBlur"
		/>
	</fieldset>
</template>

<script setup>
// import VueTheMask from 'vue-the-mask'
import { cpf } from 'cpf-cnpj-validator'; 

	const props = defineProps({
		value: {
			type: [String, Number],
			required: true,
		},
		inputClass: {
			type: String,
			default: '',
		},
		inputType: {
			type: String,
			default: 'text',
		},
		inputTitle: {
			type: String,
			default: '',
		},
		inputPlaceholder: {
			type: String,
			default: '',
		},
		inputMask: {
			type: String,
			default: '',
		},
	})

	const emit = defineEmits(['update:value'])

	const inputValue = ref(props.value)

	watch(
		() => props.value,
		newValue => {
			inputValue.value = newValue
		},
	)

	async function  onBlur() {
	 	emit('update:value', inputValue.value)
	}
</script>
