<template>
  <div class="bg">
    <el-col :xs="24" :sm="18" :md="16" :lg="12">
      <div class="login-panel">
        <h3 class="text-center">后台管理系统</h3>
        <el-row type="flex" justify="center" align="middle">
          <el-col :xs="24" :sm="16" :md="14" :lg="10">
            <el-form :model="user"
                     ref="user"
                     label-width="0px"
                     class="demo-dynamic">
              <el-form-item prop="username">
                <el-input placeholder="请输入名称" v-model="user.username" size="large">
                  <template slot="prepend">
                    <el-col :span="2"><i class="icon fa fa-user"></i></el-col>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input placeholder="请输入密码" type="password" v-model="user.password" size="large">
                  <template slot="prepend">
                    <el-col :span="2"><i class="icon fa fa-lock"></i></el-col>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('user')">立即登录</el-button>
                <el-button @click="resetForm('user')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </div>
</template>
<style>
  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("../assets/img/login_bg.jpg") center no-repeat;
  }

  .login-panel {
    background-color: white;
    border-radius: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .icon {
    width: 20px;
    height: 28px;
    font-size: 25px;
  }
</style>
<script>
  export default {
    data() {
      return {
        isLogin: false,
        user: {
          username: 'scott',
          password: 'tiger'
        },
        rules: {
          username: [
            {required: true, message: '请输入名称', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      };
    },
    watch: {
      isLogin(val) {
        this.isLogin = this.$store.state.isLogin;
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            Bmob.User.logIn(this.user.username, this.user.password, {
              success: (user) => {
                // 登录成功
                this.$message('欢迎' + user.get('username') + '进入管理系统！');
                this.$store.commit('USER_LOGIN', {
                  isSuccess: true, user: {
                    objectId: user.objectId,
                    username: user.get('username'),
                    mobilePhoneNumber: user.get('mobilePhoneNumber'),
                    avatar: user.get('avatar'),
                    email: user.get('email')
                  }
                });
                this.$router.push({name: 'CompanyCreate'});
              },
              error: (user, error) => {
                // 登录失败
                this.$message('登录失败，错误原因：' + error.message);
                this.$store.commit('USER_LOGIN', {isSuccess: false});
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
