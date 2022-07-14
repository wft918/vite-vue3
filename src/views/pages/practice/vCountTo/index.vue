<template>
  <div class="vue-count-to">
    <div class="count-to">
      <!-- {{ startVal }} -- {{ endVal }} -->
      <div>
        <CountTo :startVal='0' :endVal='200' :duration='1000' />
      </div>
      <div>
        <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' />
      </div>
      <div>
        <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' />
      </div>
      <div>
        <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' />
      </div>
      <div>
        <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' />
      </div>
      <div>
        <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' />
      </div>
      <div>
        <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' />
      </div>
      <div>
        <CountTo :startVal='startVal' :endVal='endVal' :duration='duration' />
      </div>
    </div>
  </div>
</template>
<script setup>
import { CountTo } from 'vue3-count-to'
import { onMounted, onUnmounted, ref } from 'vue'

let startVal = ref(0)
let endVal = ref(100)
let duration = ref(3000)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    endVal.value = endVal.value * 2
  }, 4000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
<style scoped>
.vue-count-to {
  width: 100%;
  height: 100%;
  padding: 100px 0 0 100px;
  box-sizing: border-box;
}
.count-to {
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
.count-to span {
  font-size: 30px;
  font-weight: 700;
}
.count-to > div:nth-of-type(1) > span {
  color: red;
}
.count-to > div:nth-of-type(2) > span {
  color: blue;
}
.count-to > div:nth-of-type(3) > span {
  color: pink;
}
.count-to > div:nth-of-type(4) > span {
  color: yellow;
}
.count-to > div:nth-of-type(5) > span {
  color: green;
}
.count-to > div:nth-of-type(6) > span {
  color: orange;
}
.count-to > div:nth-of-type(7) > span {
  color: cyan;
}
.count-to > div:nth-of-type(8) > span {
  color: purple;
}
</style>