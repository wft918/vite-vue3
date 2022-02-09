<template>
  <el-menu
    default-active="1-1"
    class="el-menu-vertical-demo"
  >
    <SubMenu v-for="menu in menus" :key="menu.id" :menu="menu" />
  </el-menu>
</template>
<script setup>
import SubMenu from './subMenu.vue'
import menuList from '@/utils/leftMenu'
import { computed } from 'vue'

const menus = computed(() => menuList)
</script>
<style scoped>
</style>