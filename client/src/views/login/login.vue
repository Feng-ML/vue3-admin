<template>
  <div class="background">

    <div class="center-box">
      <div class="system-title">
        <div>Welcome</div>
        <div>后台管理系统</div>
      </div>
      <div class="login-box">
        <div class="form">
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
            <el-link type="primary">没有账号？去注册></el-link>
          </div>

          <div class="login-btn">
            <el-button type="primary" round size="large" @click="login">登录</el-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { reactive, ref } from "vue"
import { Avatar, Lock } from '@element-plus/icons-vue'

export default {
  setup(){
    /*=============================登录=============================*/
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
          console.log({...loginForm});
        }
      })
    }

    /*=============================注册=============================*/
    const registerForm = reactive({
      account: '',
      password: ''
    })
    const registerFormRef = ref(null)
 
    const registerRules = reactive({
      account: [
        { required: true, message: '请输入账号', trigger: 'change' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'change' },
      ],
    })
    const register = ()=>{
      registerFormRef.value.validate((valid, fields) => {
        if (valid) {
          console.log('submit!')
          console.log({...registerForm});
        }
      })
    }

    return {
      loginForm,
      loginFormRef,
      Avatar,
      Lock,
      savePsw,
      login,
      loginRules
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
  
      .login-btn{
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