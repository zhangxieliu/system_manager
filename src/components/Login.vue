<template>
  <div class="root">
    <div class="login-box">
      <div class="am-panel">
        <div class="login-logo"></div>
        <form class="am-form">
          <div class="am-form-group am-input-group">
                    <span class="am-input-group-label">
                        <i class="am-icon-user am-icon-fw"></i>
                    </span>
            <input type="text" class="am-form-field" placeholder="请输入账号">
          </div>
          <div class="am-form-group am-input-group">
                    <span class="am-input-group-label">
                        <i class="am-icon-lock am-icon-fw"></i>
                    </span>
            <input type="password" class="am-form-field" placeholder="请输入密码">
          </div>
          <div class="am-form-group">
            <input id="rem-pass" type="checkbox">
            <label for="rem-pass" style="cursor: pointer">记住密码</label>
            <label class="am-align-right">
              <a href="#">忘记密码？</a>
            </label>
          </div>
          <div class="am-form-group">
            <button type="button" class="am-btn am-btn-primary am-btn-block">登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  .root {
    width: 100%;
    height: 100%;
    background: url("../assets/img/login_bg.jpg") center no-repeat;
  }

  .am-panel-secondary {
    transition: all 0.4s ease-in-out;
    position: fixed;
    z-index: 1300;
    top: 50px;
    right: -150px;
  }

  .theme-black {
    background-color: #282d2f;
  }

  .theme-white {
    background-color: #e9ecf3;
  }

  .theme-color {
    float: left;
    width: 25px;
    height: 25px;
    margin-right: 10px;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .color-white {
    background-color: white;
    border: 2px solid #eeeeee;
  }

  .color-black {
    background-color: black;
    border: 2px solid #222222;
  }

  .active-theme {
    right: 0px;
  }

  .login-box {
    width: 500px;
    margin: 12% auto 0px;
    background-color: white;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    padding: 60px;
  }

  .login-logo {
    max-width: 160px;
    height: 206px;
    margin: 0px auto;
    margin-bottom: 20px;
    background: url("../assets/img/avatar.png") center no-repeat;
  }
</style>
<script>
  export default{
    data(){
      return {}
    },
    components: {}
  }
</script>
