<template>
  <div>Child</div>
  <span>父组件传过来的： {{ counter }}</span>
  <el-button type="success" @click="upDateCounter">更新counter</el-button>
</template>
<script setup>
import { watch, ref, computed } from "vue"

const props = defineProps({
  counter: {
    type: Number,
    default: 0
  }
})
let incrementCounter = computed(() => props.counter + 1)

const emit = defineEmits(['update:counter'])

const upDateCounter = () => {
  emit('update:counter', incrementCounter.value)
}
</script>
<style scoped>

</style>