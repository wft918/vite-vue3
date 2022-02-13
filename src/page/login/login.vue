<template>
  <div class="login">
    <div class="login-content">
      <el-card class="box-card" style="width: 100%;height: 100%;">
        <el-form :label-position="'right'" label-width="100px" ref="inputFormRef" :model="inputForm">
          <el-row>
            <el-col :span="24">
              <el-form-item prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
                <el-input v-model="inputForm.username" placeholder="请输入用户名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
                <el-input type="password" v-model="inputForm.password" placeholder="请输入密码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="18">
              <el-form-item prop="code" :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' },{ validator: validateCode, trigger: 'blur' }]">
                <el-input v-model="inputForm.code" placeholder="请输入验证码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <div style="width: 100%;height: 100%;cursor: pointer;" @click="changeCode">
                <Sidentify :identifyCode="identifyCode" :contentWidth="90" />
              </div>
            </el-col>
            <el-col :span="24">
              <el-button style="width: 100%;" :loading="loading" type="success" @click="doSubmit()">登录</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script setup>
  import '@/utils/flexible'
  import { reactive, ref, onMounted } from 'vue'
  import Sidentify from '@/component/sidentify/sidentify.vue'
  import { login } from '@/api/user'
  import { useRouter } from 'vue-router'

  const router = useRouter()


  const inputForm = reactive({
    username: '',
    password: '',
    code: ''
  })
  const inputFormRef = ref(null)
  const loading = ref(false)
  // 是随机生成的验证码
  const identifyCode = ref('m6a8')
  // 验证码的随机取值范围
  const identifyCodes = ref('123456789abcdefghjkmnpqrstuvwxyz')

  // 点击验证码触发
  const changeCode = () => {
    identifyCode.value = ''
    makeCode(identifyCodes.value, 4)
  }
  // 随机生成验证码字符串
  const makeCode = (data, len) => {
    for (let i = 0; i < len; i++) {
      identifyCode.value += data[randomNum(0, data.length - 1)]
    }
  }
  // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
  const randomNum = (min, max) => {
    max = max + 1
    return Math.floor(Math.random() * (max - min) + min)
  }


  // 验证码校验
  const validateCode  = (rule, value, callback) => {
    if (identifyCode.value !== value) {
      inputForm.code = ''  //校验不通过将
      changeCode()
      callback(new Error('请输入正确的验证码'))
    } else {
      callback()
    }
  }

    // 监听键盘按键
  const enterDown = () => {
    document.onkeydown = (event) => {
      const keyCode = event.keyCode || window.event.keyCode
      if(keyCode === 13) {
        doSubmit()
      }
    }
  }

  // 登录
  const doSubmit = () => {
    inputFormRef.value.validate((valid) => {
      if (valid) {
        loading.value = true
        login(inputForm).then(data => {
          if(data && data.success) {
            const { token } = data
            localStorage.setItem('token', token)
            setTimeout(() => {
              loading.value = false
              router.replace('/')
            },800)
          }
        })
      }
    })
  }

  onMounted(() => {
    changeCode()
    enterDown()
  })

</script>
<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/login/login-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-content {
    width: 2.0833rem;
    height: 1.5625rem;
    /* border: .0052rem solid #fff; */
    padding-top: .1563rem;
    box-sizing: border-box;
  }

  .box-card {
    background-color: transparent !important;
    border: none!important;
  }

  /deep/ .el-form-item__content {
    margin-left: 0 !important;
    background-color: #a9b8a8 !important;
  }
</style>