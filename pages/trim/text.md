# 裁剪
#### 文字裁剪

<div grid="~ cols-2 gap-4" m="t-2">

<div h-400px overflow-auto>

```javascript
	const canvas = new fabric.Canvas('single')

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
	])

	// 裁剪矩形
	group.clipPath = clipPath
	canvas.add(group)
```
</div>
<TrimText />
</div>
