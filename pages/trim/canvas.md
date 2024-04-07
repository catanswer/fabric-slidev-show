# 裁剪
#### 画布裁剪

<div grid="~ cols-2 gap-4" m="t-2">

<div h-400px overflow-auto>

```javascript{all|19-20}
	const canvas = new fabric.Canvas('trim-canvas', { backgroundColor: "#999" })

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

	// 裁剪区之外控件可见
	canvas.controlsAboveOverlay = true

	const clipPath = new fabric.Circle({ radius: 100, top: 0, left: 50 })
	canvas.clipPath = clipPath
	canvas.add(group)
```
</div>
<TrimCanvas />
</div>
