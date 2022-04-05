<template>
  <div class="TeleportVideo">

    <!-- 要播放的大视频窗口 -->
    <div id="bigBox">
      <Teleport to="#smallBox" :disabled="isTeleport" v-if="isShow">
        <XgPlayer :id="'xgPlayerId'" />
      </Teleport>
    </div>

    <!-- 要传送的小视频窗口 -->
    <div id="smallBox"></div>

    <!-- 模拟滚动 -->
    <div style="height: 2000px;"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import XgPlayer from '@/components/xgPlayer/xgPlayer.vue'
import { useIntersectionObserver } from '@vueuse/core'


let isTeleport = ref(true)  //  控制什么时候传送
let isShow = ref(false)  // 控制 Teleport内置组件的挂载时机（要延迟一下）

onMounted(() => {
  intersectionObserver()
  //  为了确保传送的目标dom挂载时机在Teleport组件之间  所以这里延迟挂载Teleport内置组件
  setTimeout(() => {  // 这里不用setTimeOut也是可以的，咱们就是想让Teleport内置组件在最后的时候挂载，onMounted执行的时候，dom元素已经挂载完成了
    isShow.value = true
  })
})


// 监听 指定的dom元素是否在 可视区域内
const intersectionObserver = () => {
  const { stop } = useIntersectionObserver(document.getElementById('bigBox'), ([{ isIntersecting }]) => {
    // isIntersecting  一个布尔值， true -> 代表在可视区域； false -> 表示不再可是区域
    isTeleport.value = isIntersecting
  })

  // setTimeout(() => {
  //   stop()  // 不需要监听的时候 调用stop
  // },10000)
}
</script>
<style scoped>
.TeleportVideo {
  width: 100%;
  height: 100%;
  overflow: auto;
}

#bigBox {
  width: 640px;
  height: 360px;
  /* border: 10px solid red; */
  z-index: 99;
}
#smallBox {
  position: fixed;
  bottom: 20px;
  right: 60px;
  width: 320px;
  height: 180px;
  /* border: 1px solid red; */
}
</style>