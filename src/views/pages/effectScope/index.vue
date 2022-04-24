<template>
  <h3>{{ data }}</h3>
  <el-button type="primary">点击修改data</el-button>
  <hr>
  {{data.incrementCounter}}
</template>
<script setup>
  import { reactive, watch, watchEffect, computed, effectScope, onUnmounted } from "vue";

  const scope = effectScope()

  const data = reactive({
    counter: 0,
    incrementCounter: ''
  })
  let timer = null

  timer = setInterval(() => {
    data.counter++
    console.log('interval----------->>>')
  }, 1000)

  scope.run(() => {
    data.incrementCounter = computed(() => data.counter * 2)
    watch(
      () => data.counter,
      (newVal, oldVal) => {
        console.log(`新值${newVal}---旧值${oldVal}`)
      }
    )

    watchEffect(() => {
      console.log(data.counter, 'watchEffect')
    })
  })

  setTimeout(() => {
    scope.stop()
  }, 8000)


  // 组件离开
  onUnmounted(() => {
    if(timer) clearInterval(timer)
  })
  
</script>
<style scoped>

</style>