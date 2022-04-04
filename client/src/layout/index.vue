<template>
  <div id="layout">   
    <div class="layout-menu" :class="{ foldWidth: !isCollapse }">
      <el-menu
        :default-active="toRaw(route).path.value"
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        :collapse="isCollapse"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <SubMenu :menu="menu"/>
      </el-menu>
    </div>

    <div class="layout-right">
      <div class="layout-top flex">
        <div class="layout-top-left flex">
          <Icon class="menu-icon" :name="menuIconName" :size="20" @click="foldMenu"/>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="breadcrumbItem in route.matched" :to="{ path: breadcrumbItem.path }">{{breadcrumbItem.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="layout-top-right flex">
          <Icon name="icon-full-screen" :size="20" @click="toggleFullScreen"/>
          <!-- 头像 -->
          <el-dropdown trigger="click">
            <span class="avatar-link flex">
              <img src="../assets/image/home/avatar.gif">
              <Icon name="icon-arrow-down" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>项目地址</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>

      <div class="layout-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRaw, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SubMenu from './components/SubMenu'
import menu from '../router/menu'

const route = useRoute()
const router = useRouter()



const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

/* ==================== 头部 ==================== */
const isCollapse = ref(false)
const menuIconName = ref('icon-fold')

function foldMenu(){
  if(isCollapse.value){
    menuIconName.value = 'icon-fold'
  }else{
    menuIconName.value = 'icon-expand'
  }
  isCollapse.value = !isCollapse.value
}

//全屏
function toggleFullScreen() {
  // alternative standard method
  if (!document.fullscreenElement &&
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      }
  }
}
</script>

<style lang="scss">
#layout{
  display: flex;
}

.layout-menu{
  width: auto;
  height: 100vh;
  background-color: #545c64;

  .el-menu{
    height: 100%;
    border-right: none;
  }
}
@keyframes widthTrans{
  0% { width: 64px; }
  100% { width: 200px; }
}
.foldWidth{
  animation: widthTrans .5s forwards;
}

.layout-right{
  flex-grow: 1;
}

.layout-top{
  height: 50px;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .menu-icon{
    cursor: pointer;
    margin-right: 10px;
  }

}
.layout-top-right{
  cursor: pointer;
  > *{
    margin-left: 10px;
  }
  .avatar-link{

    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>