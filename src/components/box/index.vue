<template>
  <div>
    <el-card class="box-card" :style="{backgroundColor:box.color}">
      <el-row>
        <el-col :span="12">
          <i class="icon" :class="box.icon"></i>
        </el-col>
        <el-col :span="12">
          <div class="text count">{{box.count}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="text name">{{box.name}}</div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "box",
  props: {
    box: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="stylus" scoped>
.icon {
  font-size: 5em;
  color #fff
}

.count {
  font-size: 3.5em;
  color #fff
}

.name {
  text-align: center;
  line-height: 20px;
  color #fff
  font-weight bold
}
</style>
