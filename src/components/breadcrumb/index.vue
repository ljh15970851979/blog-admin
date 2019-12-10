<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">博客后台管理系统</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb"
};
</script>

<style lang="stylus" scoped>
.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 60px !important;
  margin-left: 8px !important ;
}
</style>
