<script lang='ts' setup>
import { fabric } from 'fabric'
import { ref, onMounted } from 'vue'

const canvas = ref()
const init = () => {
	canvas.value = new fabric.Canvas('trim-text')

	const clipPath = new fabric.Text('春眠不觉晓\n处处闻啼鸟\n夜来风雨声\n花落知多少',  { top: -100, left: -100 })

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
	], {
		left: 100,
		top: 100,
	})

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
<canvas id="trim-text" width="400" height="400" />
</template>

<style scoped>
#trim-text {
	width: 400px;
	height: 400px;
	border: 1px dashed #999;
	border-radius: 4px;
}
</style>
