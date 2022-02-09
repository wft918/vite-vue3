<template>
  <h1>首页</h1>
  <hr>
  <h3>{{ data }}</h3>
  <el-button type="primary" @click="editData">点击修改data</el-button>
</template>
<script setup>
import { reactive, watch, watchEffect, ref } from "vue";

const data = reactive({
  name:'小明',
  age: 19
})
const flag = ref(true)

const editData = () => {
  data.name += '小红'
}

watch(data,(newVal, oldVal) => {
  console.log(newVal,'修改后的值')
  console.log(oldVal,'修改前的值')
})

watchEffect(() => {
  console.log(data,'watchEffect----data')
  console.log(flag.value, 'watchEffect----flag')
})
</script>
<style scoped>
  
</style>
