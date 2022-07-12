<!-- 面包屑组件 -->
<template>
  <el-tabs v-model="tabsValue" @tab-click="tabClick" @tab-remove="tabRemove" type="card" class="demo-tabs">
    <el-tab-pane :label="'主页'" :name="'/index'"></el-tab-pane>
    <el-tab-pane
      closable
      v-for="mainTab in mainTabs"
      :key="mainTab.path"
      :label="mainTab.label"
      :name="mainTab.path"
    ></el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useIndexStore } from "@/store";
const route = useRoute();
const router = useRouter();
const indexStore = useIndexStore();

let tabsValue = ref("/index");

onMounted(() => {
  if(route.path !== '/index') {
    mainTabs.value = route.path
    tabsValue.value = route.path
  }
})

let mainTabs = computed({
  get() {
    return indexStore.mainTabs;
  },
  set(val) {
    indexStore.updateMainTabs(val);
  },
});

//  页面跳转监听
watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath !== "/index") {
      mainTabs.value = newPath
    }
    tabsValue.value = newPath
  },
  {
    deep: true
  }
);

// 点击tab标签对应跳转
const tabClick = (path) => {
  nextTick(() => { // 这很关键
    router.replace({
      path: tabsValue.value
    })
  })
}

// 移除标签
const tabRemove = (path) => {
  let mainPaths = mainTabs.value.map(item => item.path)
  let idx = mainPaths.indexOf(path)
  mainTabs.value = idx
  if(path === route.path) {  // 移除的是当前打开的页面  页面跳转问题
    if(!mainTabs.value.length) {
      router.replace('/index')
    }else if(idx === mainTabs.value.length) {
      router.replace(mainTabs.value[idx - 1].path)
    }else {
      router.replace(mainTabs.value[idx].path)
    }
  }
}


</script>
<style scoped>
</style>