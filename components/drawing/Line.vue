<script setup lang="ts">
import { onMounted } from 'vue'
import { fabric } from 'fabric'
import initDrawLine from '../../fabric/initDrawLine'

const init = () => {
	const canvas = new fabric.Canvas('line', {
		selection: false,
	})

	initDrawLine(canvas)

	// let isDrawing = false;
	// let line;
	// let pointerPoints;
	// canvas.on('mouse:down', o => {
	// 	isDrawing = true;
	// 	// 绘制线段
	// 	const pointer = canvas.getPointer(o.e)
	// 	pointerPoints = [pointer.x, pointer.y, pointer.x, pointer.y]

	// 	line = new fabric.Line(pointerPoints, {
	// 		name: 'line',
	// 		strokeWidth: 2,
	// 		stroke: '#09d49c',
	// 		selectable: false,
	// 		evented: false,
	// 		strokeUniform: true,
	// 		includeDefaultValues: false,
	// 	})
	// 	canvas.add(line)
	// })
	// canvas.on('mouse:move', o => {
	// 	if (!isDrawing) return

	// 	const pointer = canvas.getPointer(o.e)

	// 	if (o.e.shiftKey) {
	// 		// calc angle
	// 		const startX = pointerPoints[0]
	// 		const startY = pointerPoints[1]
	// 		const x2 = pointer.x - startX
	// 		const y2 = pointer.y - startY
	// 		const r = Math.sqrt(x2 * x2 + y2 * y2)
	// 		let angle = (Math.atan2(y2, x2) / Math.PI) * 180
	// 		angle = parseInt(((angle + 7.5) % 360) / 15 as any) * 15

	// 		const cosx = r * Math.cos((angle * Math.PI) / 180)
	// 		const sinx = r * Math.sin((angle * Math.PI) / 180)

	// 		line.set({
	// 			x2: cosx + startX,
	// 			y2: sinx + startY,
	// 		})
	// 	} else {
	// 		line.set({
	// 			x2: pointer.x,
	// 			y2: pointer.y,
	// 		})
	// 	}
	// 	canvas.renderAll()
	// })

	// canvas.on('mouse:up', () => {
	// 	if (!isDrawing) return
	// 	line.setCoords()
	// 	line = null
	// 	isDrawing = false
	// })
}

onMounted(() => {
	init()
})

</script>

<template>
<canvas id="line" width="400" height="400" />
</template>

<style scoped>
#line {
	border: 1px dashed #999;
	border-radius: 4px;
}
</style>
