<template>
  <div class="Home">
    <div class="lt">
      <Left />
    </div>
    <div class="rt">
      <div class="rt-top">
        <Breadcrumb />
      </div>
      <div class="rt-bot">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Left from "./layout/left.vue";
import Breadcrumb from "./layout/Breadcrumb.vue";
</script>
<style scoped>
.Home {
  width: 100%;
  height: 100%;
  display: flex;
}

.lt {
  width: 12%;
  height: 100%;
  background-color: #ccc;
}

.rt {
  width: 88%;
  height: 100%;
}

.rt-top {
  width: 100%;
  height: 41px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

.rt-bot {
  width: 100%;
  height: calc(100% - 41px);
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
.rt-bot > div {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>