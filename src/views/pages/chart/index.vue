<template>
  <div class="ChartConter">
    <div class="branch">
      <div class="part">
        <LtTop />
      </div>
      <div class="part">
        <LtCen />
      </div>
      <div class="part">
        <LtBot />
      </div>
    </div>
    <div class="branch">
      <div class="part">
        <CenTop />
      </div>
      <div class="part">
        <CenCen />
      </div>
      <div class="part">
        <CenBot />
      </div>
    </div>
    <div class="branch">
      <div class="part">
        <RtTop />
      </div>
      <div class="part">
        <RtCen />
      </div>
      <div class="part">
        <RtBot />
      </div>
    </div>
  </div>
</template>
<script setup>
  import LtTop from './branch/ltTop.vue'
  import LtCen from './branch/ltCen.vue'
  import LtBot from './branch/ltBot.vue'
  import CenTop from './branch/cenTop.vue'
  import CenCen from './branch/cenCen.vue'
  import CenBot from './branch/cenBot.vue'
  import RtTop from './branch/rtTop.vue'
  import RtCen from './branch/rtCen.vue'
  import RtBot from './branch/rtBot.vue'
</script>
<style scoped>
  .ChartConter {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .branch {
    width: 32.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .part {
    width: 100%;
    height: 32%;
    border: 1px solid pink;
    box-sizing: border-box;
  }
</style>