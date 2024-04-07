# 裁剪
#### 组合裁剪

<div grid="~ cols-2 gap-4" m="t-2">

<div h-400px overflow-auto>

```javascript
	const canvas = new fabric.Canvas('single')

	const clipPath = new fabric.Circle({
		radius: 40,
		left: -40,
		top: -40
	})

	const group = new fabric.Group([
		new fabric.Rect({ width: 100, height: 100, fill: 'red' }),
		new fabric.Rect({ width: 100, height: 100, fill: 'yellow', left: 100 }),
		new fabric.Rect({ width: 100, height: 100, fill: 'blue', top: 100 }),
		new fabric.Rect({
			width: 100,
			height: 100,
			fill: 'green',
			left: 100,
			top: 100
		})
	])

	// 裁剪矩形
	group.clipPath = clipPath
	canvas.add(group)
```
</div>
<Group />
</div>
