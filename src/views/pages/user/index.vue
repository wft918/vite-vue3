<template>
  <h1>User</h1>
  <hr>
  <h3>{{ allData.userData }}</h3>
</template>
<script setup>
  import { reactive, onMounted } from 'vue'
  import { userData } from '@/api/user'

  const allData = reactive({
    userData: ''
  })

  onMounted(() => {
    getUserData()
  })


  const getUserData = () => {
    let params = {
      username: 'admin'
    }
    userData(params).then(data => {
      if(data && data.success) {
        allData.userData = data.data
      }else {
        allData.userData = data
      }
    })
  }
</script>
<style scoped>
</style>