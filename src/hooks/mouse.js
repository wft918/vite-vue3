
import { onMounted, onUnmounted, ref } from 'vue'

export function useMouseMove() {
  let x = ref(0)
  let y = ref(0)

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  function update(event) {
    event = event || window.event
    x.value = event.clientX
    y.value = event.clientY
  }

  return { x, y }
}