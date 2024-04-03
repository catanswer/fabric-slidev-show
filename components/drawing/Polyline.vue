<script lang='ts' setup>
import { onMounted } from 'vue'
import { fabric } from 'fabric'
import initDrawLine from '../../fabric/initDrawLine'

const init = () => {
	const canvas = new fabric.Canvas('polyline', {
		selection: false,
	})
	initDrawLine(canvas, 'polyline')
}
onMounted(() => {
	init()
})

</script>

<template>
<canvas id="polyline" width="400" height="400" />
</template>

<style scoped>
#polyline {
	border: 1px dashed #999;
	border-radius: 4px;
}
</style>

