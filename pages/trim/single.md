# 裁剪 - 单一图形裁剪

<div grid="~ cols-2 gap-4" m="t-2">

```javascript
	const canvas = new fabric.Canvas('single')

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
	})

	// 裁剪矩形
	rect.clipPath = clipPath
	nextTick(() => {
		canvas.add(rect)
	})
```

<Single />
</div>
