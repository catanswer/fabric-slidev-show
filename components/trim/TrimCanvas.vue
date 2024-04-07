<script lang='ts' setup>
import { fabric } from 'fabric'
import { ref, onMounted } from 'vue'
import { ElButton } from 'element-plus'

const canvas = ref()
const init = () => {
	canvas.value = new fabric.Canvas('trim-canvas', {
		backgroundColor: "#999"
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
	], {
		left: 100,
		top: 100,
	})

	const clipPath = new fabric.Circle({ radius: 140, top: 70, left: 70 })
	canvas.value.clipPath = clipPath
	canvas.value.add(group)
	// canvas.value.setActiveObject(group)
	// canvas.value.renderAll()
}

let flag = false
const handleToggle = () => {
	flag = !flag
	canvas.value.controlsAboveOverlay = flag
	canvas.value.renderAll()
}

onMounted(() => {
	init()
})
</script>

<template>
<div>
	<el-button type="primary" size="small" @click="handleToggle">切换</el-button>
	<canvas id="trim-canvas" width="400" height="360" />
</div>
</template>

<style scoped>
#trim-canvas {
	width: 400px;
	border: 1px dashed #999;
	border-radius: 4px;
	margin-top: 14px;
}
</style>
