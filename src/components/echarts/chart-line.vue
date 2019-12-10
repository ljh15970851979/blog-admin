<template>
  <div id="chart-line"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let ChartMap = this.$echarts.init(document.getElementById("chart-line"));
      // 绘制图表
      ChartMap.setOption({
        title: { text: "最近一周浏览量" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
#chart-line {
  margin-top: 50px;
  width: 100%;
  height: 550px;
}
</style>
