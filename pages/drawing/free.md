# 绘制 - 自由绘制

在创建画布时，设置`isDrawingMode: true`，就可以开启自由绘画模式

<div grid="~ cols-2 gap-4" m="t-2">

```javascript {2 5-15}
  const canvas = new fabric.Canvas('canvas', {
    isDrawingMode: true, // 开启绘图模式
  })
   // 设置画笔颜色
  canvas.freeDrawingBrush.color = '#11999e'
   // 设置画笔粗细
  canvas.freeDrawingBrush.width = 10
  // 画笔投影
  canvas.freeDrawingBrush.shadow = new fabric.Shadow({
    blur: 10,
    offsetX: 10,
    offsetY: 10,
    affectStroke: true,
    color: '#30e3ca',
  })
```
<Free />
</div>
