<script setup lang="ts">
import { fabric } from 'fabric'
import { onMounted } from 'vue'

const init = () => {
  const canvas = new fabric.Canvas('free', {
    isDrawingMode: true, // 开启绘图模式
  })
  // 设置画笔颜色
  canvas.freeDrawingBrush.color = '#09d49c'

  // 设置画笔粗细
  canvas.freeDrawingBrush.width = 5

  // 画笔投影
  canvas.freeDrawingBrush.shadow = new fabric.Shadow({
    blur: 6,
    offsetX: 2,
    offsetY: 2,
    affectStroke: true,
    color: '#30e3ca',
  })
}

onMounted(() => {
  init()
})

</script>

<template>
<canvas id="free" width="400" height="400" />
</template>

<style scoped>
#free {
  width: 400px;
  height: 400px;
  border: 1px dashed #999;
  border-radius: 4px;
}
</style>
