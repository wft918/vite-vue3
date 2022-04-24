<template>
  <div>
    <img :src="imgSrc" alt="">
  </div>
</template>
<script setup>
const imgSrc = require('@/assets/login/login-bg.jpg')
console.log(imgSrc, 'imgSrc----->>>')
console.log(require, 'require----->>>')
</script>
<style scoped>

</style>