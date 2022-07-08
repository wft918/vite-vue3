<template>
  <div class="index-test">
    <img :src="img2" alt="">
  </div>
</template>
<script setup>
const img1 = require('@/assets/login/login-bg.jpg')
let img2 = img1
</script>
<style scoped>
.index-test {
  width: 100%;
  height: 100%;
}
.index-test img {
  width: 100%;
  height: 100%;
}
</style>