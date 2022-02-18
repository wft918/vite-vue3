<template>
  <el-dialog v-model="dialogVisible" :title="title" width="45%">
    <el-form ref="inputFormRef" v-loading="loading" :model="inputForm" :disabled="method === 'view'" label-width="120px" class="demo-form-inline">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item prop="date" label="date" :rules="[{ required: true, message: 'Please enter date', trigger: 'blur' }]">
            <el-input
              v-model="inputForm.date"
              placeholder="date"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="name" label="name" :rules="[{ required: true, message: 'Please enter name', trigger: 'blur' }]">
            <el-input
              v-model="inputForm.name"
              placeholder="name"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="state" label="state" :rules="[{ required: true, message: 'Please enter state', trigger: 'blur' }]">
            <el-input
              v-model="inputForm.state"
              placeholder="state"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="city" label="city" :rules="[{ required: true, message: 'Please enter city', trigger: 'blur' }]">
            <el-input
              v-model="inputForm.city"
              placeholder="city"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="address" label="address" :rules="[{ required: true, message: 'Please enter address', trigger: 'blur' }]">
            <el-input
              v-model="inputForm.address"
              placeholder="address"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="zip" label="zip" :rules="[{ required: true, message: 'Please enter zip', trigger: 'blur' }]">
            <el-input
              v-model="inputForm.zip"
              placeholder="zip"
              size="small"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="doSubmit()"
          >Submit</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { reactive, ref, nextTick } from "vue";
let title = ref("");
let dialogVisible = ref(false);
let loading = ref(false)
let method = ref('')
let inputForm = reactive({
  id: '',
  date: '',
  name: '',
  state: '',
  city: '',
  address: '',
  zip: ''
})
const inputFormRef = ref(null)

const init = (type, id, item) => {
  method.value = type
  inputForm.id = id
  if(type == 'add') {
    title.value = '新增数据'
  }else if(type == 'edit') {
    title.value = '修改数据'
  }else if(type == 'view') {
    title.value = '查看数据'
  }
  loading.value = false
  dialogVisible.value = true
  nextTick(() => {
    inputFormRef.value.resetFields()
    if(type == 'edit' || type == 'view') {  // 修改查看
      loading.value = true
      setTimeout(() => {
        inputForm = Object.assign(inputForm, item)
        loading.value = false
      },1000)
    }
  })
}

// 提交表单
const doSubmit = () => {
  inputFormRef.value.validate(valid => {
    if(valid) {
      console.log('doSubmit')
    }
  })
}


defineExpose({
  init
})
</script>
<style scoped>
</style>