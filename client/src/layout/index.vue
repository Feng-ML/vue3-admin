<template>
  <div id="layout">   
    <div class="layout-menu" :class="{ foldWidth: !isCollapse }">
      <el-menu
        default-active="/"
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
      <div class="layout-top">
        <Icon class="menu-icon" :name="menuIconName" :size="20" @click="foldMenu"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SubMenu from './components/SubMenu'
import menu from './menu'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

/* ==================== 头部 ==================== */
const isCollapse = ref(false)
const menuIconName = ref('icon-fold')
const foldMenu = ()=>{
  if(isCollapse.value){
    menuIconName.value = 'icon-fold'
  }else{
    menuIconName.value = 'icon-expand'
  }
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss">
#layout{
  display: flex;

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
    background-color: aquamarine;
    display: flex;
    align-items: center;
    padding: 0 15px;

    .menu-icon{
      cursor: pointer;
    }
  }
}
</style>