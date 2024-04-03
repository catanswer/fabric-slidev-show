# 绘制 - 折线绘制
<div grid="~ cols-2 gap-4" m="t-2">

<div h-400px overflow-auto>

```javascript
const canvas = new fabric.Canvas('canvas', {
	selection: false,
})

let isDrawing =false

let pointerPoints
// 多点折线实例
let polyline = null
const polylineOption= {
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
canvas.on('mouse:down', o => {
	isDrawing = true

	if (polyline === null) {
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
})
canvas.on('mouse:move', o => { 
	if (!isDrawing) return

	const currentPoint = o.absolutePointer
	let points = polyline.points

	points[points.length - 1].x = currentPoint.x
	points[points.length - 1].y = currentPoint.y

	canvas.requestRenderAll()
})

canvas.on('mouse:dblclick', () => {
	const currentPoint = o.absolutePointer
	let points = polyline.points
	points[points.length - 1].x = currentPoint.x
	points[points.length - 1].y = currentPoint.y

	points.pop()
	points.pop()
	canvas.remove(polyline)

	if (points.length > 1) {
		canvas.add(new fabric.Polyline(points,polylineOption))
	}
	polyline = null
	isDrawing = false
})
```
</div>

<Polyline />
</div>
