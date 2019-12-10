<template>
  <div class="sidebar">
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#282b33"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/article" :route="{name: 'article'}" >
        <i class="el-icon-document"></i>
       <span slot="title"> 文章管理 </span>
      </el-menu-item>
      <el-menu-item index="/chatroom" :route="{name: 'chatroom'}" >
        <i class="el-icon-chat-line-round"></i>
       <span slot="title"> 聊天室 </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="stylus" scoped>
.sidebar .el-menu {
  width: 200px;
  bottom: 0px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
