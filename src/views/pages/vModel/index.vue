<template>
  <Child v-model:counter="counter" />
  <!-- <el-button type="success" @click="upDateCounter">更新counter</el-button> -->
</template>
<script setup>
import { ref } from 'vue'
import Child from './Child.vue'
let counter = ref(0)

// const upDateCounter = () => {
//   counter.value++
// }
</script>
<style scoped>

</style>