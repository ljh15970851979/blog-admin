<template>
  <div>
    <!-- <el-row>
      <el-col :span="24"> -->
        <boxes />
      <!-- </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"> -->
<!--        <echarts />-->
      <!-- </el-col>
    </el-row> -->
  </div>
</template>

<script>
import Boxes from "./components/boxes";
// import Echarts from "./components/echarts";

export default {
  name: "Dashboard",
  components: {
    Boxes
  }
};
</script>

<style lang="stylus" scoped></style>
