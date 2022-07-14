<template>

  <!-- 有子级 -->
  <el-sub-menu v-if="menu.children && menu.children.length" :index="menu.id">
    <template #title>
      <span>{{menu.label}}</span>
    </template>
    <SubMenu v-for="item in menu.children" :key="item.id" :menu="item" />
  </el-sub-menu>

  <!-- 无子级 -->
  <el-menu-item v-else @click="menuClick" :index="menu.id">
    <span>{{menu.label}}</span>
  </el-menu-item>

</template>
<script setup>
import SubMenu from './subMenu.vue'
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  menu: {
    type: Object,
    required: true
  }
})
const { menu } = toRefs(props)
// 菜单跳转
const menuClick = () => {
  router.replace({
    path: props.menu.path
    // path: menu.value.path   //or
  })
}
</script>
<style scoped>
</style>