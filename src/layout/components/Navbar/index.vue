<template>
  <div class="navbar">
    <breadcrumb class="breadcrumb-container"/>

    <div class="right-menu">
      <div class="name">{{username}}</div>
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <img src="@/assets/img/head.jpeg" class="user-avatar">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>

            <span style="display:block;" @click="Edit">编辑</span>
            </el-dropdown-item>
                      <el-dropdown-item>

            <span style="display:block;" @click="Repassword">修改密码</span>
            </el-dropdown-item>
          <el-dropdown-item divided>
            <span style="display:block;" @click="Logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/breadcrumb";

export default {
  name: "Navbar",
  data () {
    return{
      username:''
    }
  },
  components: {
    Breadcrumb
  },
  mounted(){
    this.username = localStorage.getItem("User_name")
  },
  methods: {
    Logout() {
      // 清除token
      localStorage.removeItem('User_token');
      localStorage.removeItem('User_name');
      this.$router.push({ path: "/login" });
    },
    Edit(){
      this.$router.push({ path: "/admin/edit" });

    },
        Repassword(){
      this.$router.push({ path: "/admin/repassword" });

    }
  }
};
</script>

<style lang="stylus" scoped>
.navbar {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  height: 60px;
}

.bread {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.breadcrumb-container {
  float: left;
}

.right-menu {
  float: right;
  height: 100%;
  line-height: 80px;
  display: flex;
  .name{
    font-size 20px;
    margin-right 20px;
  }

  .avatar-container {
    margin-right: 30px;

    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      height: 40px;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
    }
  }
}
</style>
