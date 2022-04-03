<template>
  <template v-for="menuItem in menu">
    <el-sub-menu v-if="menuItem.children.length>0" :index="menuItem.path">
      <template #title>
        <icon :name="'icon-' + menuItem.meta.icon" />
        <span>{{menuItem.meta.title}}</span>
      </template>
      <SubMenu :menu="menuItem.children"/>
    </el-sub-menu>
    <el-menu-item v-else :index="menuItem.path">
      <icon :name="'icon-' + menuItem.meta.icon" />
      <span>{{menuItem.meta.title}}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
const props = defineProps({
  menu: Array
})

</script>