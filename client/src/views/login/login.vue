<template>
  <div class="background">

    <div class="center-box">
      <div class="system-title">
        <div>Welcome</div>
        <div>后台管理系统</div>
      </div>
      <div class="login-box">
        <div v-show="isLogin" class="form">
          <el-form ref="loginFormRef" size="large" :model="loginForm" :rules="loginRules">
            <el-form-item label="" prop="account">
              <el-input
                v-model="loginForm.account"
                placeholder="请输入账号"
                clearable
                size="large"
                :prefix-icon="Avatar"
              />
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                v-model="loginForm.password"
                placeholder="请输入密码"
                type="password"
                clearable
                show-password
                size="large"
                :prefix-icon="Lock"
              />
            </el-form-item>
          </el-form>
          <div class="flex-between">
            <el-checkbox v-model="savePsw" label="记住密码" size="large" />
            <el-link type="primary" @click="isLogin=!isLogin">没有账号？去注册></el-link>
          </div>

          <div class="submit-btn">
            <el-button type="primary" round size="large" @click="login">登录</el-button>
          </div>
        </div>

        <div v-show="!isLogin" class="form">
          <el-form ref="registerFormRef" label-width="80px" size="large" :model="registerForm" :rules="registerRules">
            <el-form-item label="账号" prop="account">
              <el-input
                v-model="registerForm.account"
                placeholder="请输入账号"
                clearable
                size="large"
                :prefix-icon="Avatar"
              />
            </el-form-item>
            <el-form-item label="密码" prop="password" required>
              <el-input
                v-model="registerForm.password"
                placeholder="请输入密码"
                type="password"
                clearable
                show-password
                size="large"
                :prefix-icon="Lock"
              />
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" required>
              <el-input
                v-model="registerForm.checkPass"
                placeholder="请再次输入密码"
                type="password"
                clearable
                show-password
                size="large"
                :prefix-icon="Lock"
              />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input
                v-model="registerForm.email"
                placeholder="请输入邮箱"
                clearable
                size="large"
                :prefix-icon="Message"
              />
            </el-form-item>
          </el-form>
          <div class="flex-between">
            <div></div>
            <el-link type="primary" @click="isLogin=!isLogin">返回登录></el-link>
          </div>

          <div class="submit-btn">
            <el-button type="primary" round size="large" @click="register">注册</el-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { Avatar, Lock, Message } from '@element-plus/icons-vue'
import { register } from '@/api/user'

export default {
  setup(){
    const isLogin = ref(true)
    /* =============================登录============================= */
    const loginForm = reactive({
      account: '',
      password: ''
    })
    const loginFormRef = ref(null)

    const loginRules = reactive({
      account: [
        { required: true, message: '请输入账号', trigger: 'change' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'change' },
      ],
    })
    const savePsw = ref(true)
    const login = ()=>{
      loginFormRef.value.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
          console.log({ ...loginForm })
        }
      })
    }

    /* =============================注册============================= */
    const registerForm = reactive({
      account: '',
      password: '',
      checkPass: '',
      email: ''
    })
    const registerFormRef = ref(null)

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (registerForm.checkPass !== '') {
          if (!registerFormRef.value) return
          registerFormRef.value.validateField('checkPass', () => null)
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== registerForm.password) {
        callback(new Error('密码输入不一致'))
      } else {
        callback()
      }
    }
    const registerRules = reactive({
      account: [
        { required: true, message: '请输入账号', trigger: 'change' },
        { min: 5, max: 25, message: '请输入5到25个字符', trigger: 'change' },
      ],
      password: [
        { validator: validatePass, trigger: 'change' },
      ],
      checkPass: [
        { validator: validatePass2, trigger: 'blur' },
      ],
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
      ]
    })
    const register = ()=>{
      registerFormRef.value.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
          console.log({ ...registerForm })
          register({ ...registerForm }).then(res=>{
            alert('注册成功')
          })
        }
      })
    }

    return {
      isLogin,
      Avatar,
      Lock,
      Message,
      loginFormRef,
      login,
      loginForm,
      loginRules,
      savePsw,

      registerFormRef,
      register,
      registerRules,
      registerForm
    }
  }
}
</script>

<style lang="scss">
.background{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("../../assets/image/login/bgImg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.center-box{
  position: absolute;
  display: flex;
  width: 1000px;
  height: 500px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;

  .system-title{
    width: 50%;
    height: 100%;
    background-color: rgba($color: #fff, $alpha: 0.5);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5;
    font-size: 40px;
    color: rgb(243, 243, 243);
    text-shadow: 5px 5px 5px $main-color;
  }

  .login-box{
    flex: 1;
    padding: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .form{
      > *{
        margin-bottom: 20px;
      }

      .submit-btn{
        display: flex;
        justify-content: center;
        .el-button{
          width: 80%;
        }
      }
    }
  }
}

.flex-between{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
