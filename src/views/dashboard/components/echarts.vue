<template>
  <div>
    <el-row>
      <el-col :span="12">
        <chart-line></chart-line>
      </el-col>
      <el-col :span="12">
        <chart-map></chart-map>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChartMap from "@/components/echarts/chart-map";
import ChartLine from "@/components/echarts/chart-line";

export default {
  name: "Echarts",
  components: {
    ChartMap,
    ChartLine
  }
};
</script>

<style lang="stylus" scoped></style>
