<template>

  <Child1 />
  <Child2 />
  <component :is="currentComp"></component>

  <el-button @click="compChange">切换组件</el-button>

</template>
<script setup>
  import { shallowRef, ref } from 'vue'
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'

  //这里用ref的话，vue给出警告Vue接收到一个组件，该组件被制成反应对象。这可能会导致不必要的性能开销，应该通过将组件标记为“markRaw”或使用“shallowRef”而不是“ref”来避免。
  // 如果使用 markRaw 那么currentComp将不永远不会再成为响应式对象。 所以得使用 shallowRef
  let currentComp = shallowRef(Child1)

  // 切换组件
  const compChange = () => {
    if(currentComp.value == Child1) {
      currentComp.value = Child2
    }else {
      currentComp.value = Child1
    }
  }

</script>
<style scoped>

</style>