<template>
	<div class="flex h-screen items-center justify-center">
		<div init class="relative w-full max-w-xl">
			<div>
				<input
					type="range"
					:step="steps"
					:min="min"
					:max="max"
					@input="changeValues('minValue')"
					v-model="minValue"
					class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
				/>

				<input
					type="range"
					:step="steps"
					:min="min"
					:max="max"
					@input="changeValues('maxValue')"
					v-model="maxValue"
					class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
				/>

				<div class="relative z-10 h-2">
					<div
						class="absolute left-0 right-0 bottom-0 top-0 z-10 rounded-md bg-gray-200"
					></div>

					<div
						class="absolute top-0 bottom-0 z-20 rounded-md bg-blue-500"
						:style="
							'right:' + maxThumb + '%; left:' + minThumb + '%'
						"
					></div>

					<div
						class="absolute top-0 left-0 z-30 -mt-2 -ml-1 h-6 w-6 rounded-full bg-blue-500"
						:style="
							'right:' + maxThumb + '%; left:' + minThumb + '%'
						"
					>
						<span
							class="absolute bottom-8 right-1/2 z-10 w-max translate-x-1/2 rounded bg-white px-1 text-center"
							>{{ labels[0] }}</span
						>
					</div>

					<div
						class="absolute top-0 right-0 z-30 -mt-2 -mr-3 h-6 w-6 rounded-full bg-blue-500"
						:style="'right: ' + maxThumb + '%'"
					>
						<span
							class="absolute bottom-8 right-1/2 z-10 w-max translate-x-1/2 rounded bg-white px-1 text-center"
							>{{ labels[1] }}</span
						>
					</div>
				</div>
			</div>

			<div class="flex items-center justify-between py-5">
				<div>
					<input
						@input="changeValues('minValue')"
						v-model="minValue"
						type="number"
						:step="steps"
						:min="min"
						:max="max"
						class="w-24 rounded border border-gray-200 px-3 py-2 text-center"
					/>
				</div>
				<div>
					<input
						@input="changeValues('maxValue')"
						v-model="maxValue"
						type="number"
						:step="steps"
						:min="min"
						:max="max"
						class="w-24 rounded border border-gray-200 px-3 py-2 text-center"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// import { ref, toRefs, type Ref } from "vue";
	import RangeSlider from "@/components/RangeSlider.vue";

	const props = defineProps({
	    min: Number,
	    max: Number,
	    modelValue: Array,
	    steps: Number,
	    labels: Array,
	});
	const emits = defineEmits(["update:modelValue", "changeValue"]);

	const { min, max, modelValue, steps, labels } = toRefs(props) as {
	    min: Ref<number>;
	    max: Ref<number>;
	    modelValue: Ref<[number, number]>;
	    steps: Ref<number>;
	    labels: Ref<string[]>;
	};

	const minValue = ref(modelValue.value[0]);
	const maxValue = ref(modelValue.value[1]);
	const minThumb = ref(0);
	const maxThumb = ref(0);

	const changeValues = (input: "initial" | "minValue" | "maxValue") => {
	    if (input === "initial") {
	        updateMinValue();
	        updateMaxValue();
	    } else if (input === "minValue") {
	        updateMinValue();
	    } else if (input === "maxValue") {
	        updateMaxValue();
	    }
	    if (input !== "initial") {
	        emits("update:modelValue", [minValue.value, maxValue.value]);
	        emits("changeValue", [minValue.value, maxValue.value]);
	    }
	};

	const updateMinValue = () => {
	    if (minValue.value < min.value) {
	        minValue.value = min.value;
	    } else {
	        minValue.value = Math.min(minValue.value, maxValue.value - steps.value);
	    }
	    minThumb.value = ((minValue.value - min.value) / (max.value - min.value)) * 100;
	};
	const updateMaxValue = () => {
	    if (maxValue.value > max.value) {
	        maxValue.value = max.value;
	    } else {
	        maxValue.value = Math.max(maxValue.value, minValue.value + steps.value);
	    }
	    maxThumb.value = 100 - ((maxValue.value - min.value) / (max.value - min.value)) * 100;
	};
	changeValues("initial");
</script>
<style></style>
