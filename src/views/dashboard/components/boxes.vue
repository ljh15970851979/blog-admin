<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="8" v-for="(box, index) in boxes" :key="index">
          <box :box="box"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Box from "@/components/box";

export default {
  name: "Boxes",
  components: {
    Box
  },
  data() {
    return {
      boxes: [
        {
          icon: "el-icon-document-copy",
          name: "文章总数",
          count: 10,
          color:'#00c0ef'
        },
        {
          icon: "el-icon-view",
          name: "总浏览量",
          count: 32,
          color:'#f39c12'
        },
        {
          icon: "el-icon-view",
          name: "日浏览量",
          count: 18,
          color:'#dd4b39'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>

.el-col {
  border-radius: 4px;
}

</style>
