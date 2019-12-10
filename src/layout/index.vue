<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <sidebar/>
      </el-aside>
      <el-container>
        <el-header>
          <navbar/>
        </el-header>
        <el-main>
          <appmain/>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Appmain from "./components/Appmain";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    Appmain
  }
};
</script>

<style>
.el-header {
  color: #333;
  padding: unset !important;
}

</style>
