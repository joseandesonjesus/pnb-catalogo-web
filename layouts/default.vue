<template>
	<div class="flex h-screen flex-col">
		<header-component />
		<div
			v-show="headerHeight !== 0"
			class="flex-grow py-8 md:py-16"
			:style="{'margin-top': `${headerHeight}px`}"
		>
			<slot />
		</div>
		<footer-component />
	</div>
</template>

<script setup>
	const headerHeightStore = useHeaderHeight()

	const headerHeight = computed(() => {
		return headerHeightStore.headerHeight
	})
</script>
