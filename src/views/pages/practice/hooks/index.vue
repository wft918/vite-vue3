<template>
  <div class="Hooks">自定义Hooks</div>
  <div>mouseX: {{ x }}</div>
  <div>mouseY: {{ y }}</div>
</template>
<script setup>
import { useMouseMove } from '@/hooks/mouse'


const { x, y } = useMouseMove()


// import { onMounted, onUnmounted, ref } from 'vue'

// let x = ref(0)
// let y = ref(0)

// onMounted(() => {
//   window.addEventListener('mousemove', update)
// })
// onUnmounted(() => {
//   window.removeEventListener('mousemove', update)
// })

// function update(event) {
//   event = event || window.event
//   x.value = event.clientX
//   y.value = event.clientY
// }

</script>
<style scoped>

</style>