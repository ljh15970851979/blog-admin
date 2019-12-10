<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="旧密码">
        <el-input placeholder="请输入密码" v-model="input" show-password style="width:400px"></el-input>
      </el-form-item>
            <el-form-item label="新密码">
        <el-input placeholder="请输入密码" v-model="input" show-password style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="再次输入密码">
        <el-input placeholder="请输入密码" v-model="input" show-password style="width:400px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="goToDashboard">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "admin-repassword",
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style lang="stylus" scoped></style>

