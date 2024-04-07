<script lang='ts' setup>
import { fabric } from 'fabric'
import { ref, onMounted } from 'vue'

const canvas = ref()
const init = () => {
	canvas.value = new fabric.Canvas('trim-group')

	const clipPath = new fabric.Circle({
		radius: 40,
		left: -40,
		top: -40
	})

	const group = new fabric.Group([
		new fabric.Rect({ width: 100, height: 100, fill: '#6B8FF4' }),
		new fabric.Rect({ width: 100, height: 100, fill: '#55E9ED', left: 100 }),
		new fabric.Rect({ width: 100, height: 100, fill: '#FFD33C', top: 100 }),
		new fabric.Rect({
			width: 100,
			height: 100,
			fill: '#FB7800',
			left: 100,
			top: 100
		})
	])

	// 裁剪矩形
	group.clipPath = clipPath
	canvas.value.add(group)
	// canvas.value.setActiveObject(group);
	// canvas.value.renderAll();
}

onMounted(() => {
	init()
})
</script>

<template>
<canvas id="trim-group" width="400" height="400" />
</template>

<style scoped>
#trim-group {
	width: 400px;
	height: 400px;
	border: 1px dashed #999;
	border-radius: 4px;
}
</style>
