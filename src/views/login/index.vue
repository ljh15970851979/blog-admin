<template>
  <div class="login">
    <div class="login_form">
      <div class="login_title">
        <p>后台管理系统</p>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.uesrname" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" show-password placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit_btn" @click="handleLogin('ruleForm')">登陆</el-button>
          <el-button type="primary" class="submit_btn" @click="handleRegister('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
	import {
		login,
		handleRegister
	} from '@/utils/api/api'
export default {
    name:"Login",
    data () {
      return {
        ruleForm: {
          uesrname: '',
          password: '',
        },
		  rules: {
			  uesrname: [
				  { required: true, message: '请输入用户名', trigger: 'blur' },
				  // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
			  ],
			  password: [
				  { required: true, message: '请输入密码', trigger: 'blur' }
			  ],
		  }
      }
    },
    mounted() {
	},
    methods:{
    	// 登录的操作
		handleLogin(formName){
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let params = {
                username: this.ruleForm.uesrname,
                password: this.ruleForm.password,
              }
              login(params, (data) => {
                if (data.errorCode === 0){
					localStorage.setItem("User_token",data.data.token)
					localStorage.setItem("User_name",data.data.username);
					this.$router.push({path: '/'})
                  this.$message({
                    message: data.msg,
                    type: 'success'
                  });
                } else {
                  this.$message({
                    message: data.msg,
                    type: 'error'
                  });
                }
              })
            } else {
              return false;
            }
          });
        },
      // 注册
      handleRegister(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let params = {
              username: this.ruleForm.uesrname,
              password: this.ruleForm.password,
            }
            handleRegister(params, (data) => {
              if (data.errorCode === 0){
				  localStorage.setItem("User_token",data.data.token)
				  localStorage.setItem("User_name",data.data.username);
				  this.$router.push({path: '/'})
                this.$message({
                  message: data.msg,
                  type: 'success'
                });
              } else {
                this.$message({
                  message: data.msg,
                  type: 'error'
                });
              }
            })
          } else {
            return false;
          }
        });
      }
    }
}
</script>

<style lang="stylus" scoped>
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-image: url('../../assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0;
}

.login_title {
  font-weight: bold;
}

.login_form {
  width: 320px;
  height: 210px;
  margin: auto;
  position: absolute;
  top: 50%;
  margin-top: -175px;
  left: 50%;
  margin-left: -185px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  padding: 25px;
  text-align: center;
}
</style>
