/* eslint-disable radix */
/* eslint-disable no-mixed-operators */
/*
 * @Description: 线条绘制
 */
import { fabric } from 'fabric'

const lineOption = {
	name: 'line',
	strokeWidth: 2,
	stroke: '#09d49c',
	selectable: false,
	evented: false,
	strokeUniform: true,
	includeDefaultValues: false,
}
const polylineOption = {
	name: '折线',
	fill: 'transparent',
	stroke: '#09d49c',
	strokeWidth: 2,
	objectCaching: false,
	strokeUniform: true,
	selectable: false,
	evented: false,
	includeDefaultValues: false,
}

function initDrawLine(canvas, drawingMode="line") {
	let isDrawing = false
	// 单个线段：line  多点折线：polyline
	// let drawingMode = ''

	// 单个线段实例
	let line
	let pointerPoints

	// 多点折线实例
	let polyline
	canvas.on('mouse:down', o => {
		if (!drawingMode) return

		isDrawing = true
		if (drawingMode === 'line') {
			// 绘制线段
			const pointer = canvas.getPointer(o.e)
			pointerPoints = [pointer.x, pointer.y, pointer.x, pointer.y]

			line = new fabric.Line(pointerPoints, {
				...lineOption,
			})

			canvas.add(line)
		} else if (drawingMode === 'polyline') {
			if (!polyline) {
				// 绘制折线
				const currentPoint = o.absolutePointer
				polyline = new fabric.Polyline(
					[
						{ x: currentPoint.x, y: currentPoint.y },
						{ x: currentPoint.x, y: currentPoint.y },
					],
					polylineOption,
				)
				canvas.add(polyline)
			} else {
				const { x, y } = o.absolutePointer

				let points = polyline.points

				points.push({
					x,
					y,
				})
				canvas.requestRenderAll()
			}
		}
	})

	canvas.on('mouse:move', o => {
		if (!isDrawing) return

		const pointer = canvas.getPointer(o.e)

		if (drawingMode === 'line') {
			if (o.e.shiftKey) {
				// calc angle
				const startX = pointerPoints[0]
				const startY = pointerPoints[1]
				const x2 = pointer.x - startX
				const y2 = pointer.y - startY
				const r = Math.sqrt(x2 * x2 + y2 * y2)
				let angle = (Math.atan2(y2, x2) / Math.PI) * 180
				angle = parseInt(((angle + 7.5) % 360) / 15 as any) * 15

				const cosx = r * Math.cos((angle * Math.PI) / 180)
				const sinx = r * Math.sin((angle * Math.PI) / 180)

				line.set({
					x2: cosx + startX,
					y2: sinx + startY,
				})
			} else {
				line.set({
					x2: pointer.x,
					y2: pointer.y,
				})
			}
			canvas.renderAll()
		} else if (drawingMode === 'polyline' && polyline) {
			const currentPoint = o.absolutePointer
			let points = polyline.points

			points[points.length - 1].x = currentPoint.x
			points[points.length - 1].y = currentPoint.y

			canvas.requestRenderAll()
		}
	})

	canvas.on('mouse:up', () => {
		if (!isDrawing) return

		if (drawingMode === 'line') {
			line.setCoords()
			line = null
			isDrawing = false
		}
	})

	// 绘制多点线段时 双击结束绘制
	canvas.on('mouse:dblclick', o => {
		if (!isDrawing) return

		if (drawingMode === 'polyline') {
			const currentPoint = o.absolutePointer
			let points = polyline.points
			points[points.length - 1].x = currentPoint.x
			points[points.length - 1].y = currentPoint.y

			points.pop()
			points.pop()
			canvas.remove(polyline)

			if (points.length > 1) {
				const polylineTemp = new fabric.Polyline(points, polylineOption)

				canvas.add(polylineTemp)
			}
			polyline = null
			isDrawing = false
		}
	})

	return {
		setMode(params) {
			drawingMode = params
		},
	}
}

export default initDrawLine
