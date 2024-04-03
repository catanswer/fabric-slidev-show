<script lang='ts' setup>
import { fabric } from 'fabric'
import { ref, onMounted } from 'vue'

const canvas = ref()
const init = () => {
	canvas.value = new fabric.Canvas('single')

	const clipPath = new fabric.Circle({
		radius: 40,
		left: -40,
		top: -40
	})

	const rect = new fabric.Rect({
		width: 200,
		height: 100,
		fill: '#09d49c',
		left: 100,
		top: 100,
		selectable: true,
	})

	// 裁剪矩形
	rect.clipPath = clipPath
	canvas.value.add(rect)
	canvas.value.setActiveObject(rect);
	canvas.value.renderAll();
}

onMounted(() => {
	init()
})
</script>

<template>
<canvas id="single" width="400" height="400" />
</template>

<style scoped>
#single {
	width: 400px;
	height: 400px;
	border: 1px dashed #999;
	border-radius: 4px;
}
</style>
