/**
 * Created by Administrator on 2017/3/21.
 */
import * as types from '../mutation-types'

const state = {
  isLogin: false,
  isRegister: false,
  user: {}
}

// Getters 会暴露为 store.getters 对象：
const getters = {
  checkUserIsLogin: state => state.isLogin,
  currentUser: state => state.user
}

const actions = {
  login({commit}, userObj){
    Bmob.User.logIn(userObj.username, userObj.password, {
      success: (user) => {
        // 登录成功
        // console.log("name:" + user.get('username') + ", password:" + user.get('password'));
        commit(types.USER_LOGIN, true);
      },
      error: (user, error) => {
        // 登录失败
        state.isLogin = false;
        console.log('登录失败：' + error.message);
        commit(types.USER_LOGIN, false);
      }
    });
  },
  register({commit}, user) {
    var userObj = new Bmob.User();
    userObj.set("username", user.username);
    userObj.set("password", user.password);
    userObj.set("email", user.email);
    userObj.set("phone", user.phone);

    userObj.signUp(null, {
      success: (user) => {
        // 注册成功
        commit(types.USER_REGISTER, true);
      },
      error: (user, error) => {
        // 注册错误
        console.log("Error: " + error.code + " " + error.message);
        commit(types.USER_REGISTER, false);
      }
    });
  }
}

const mutations = {
  // 用户登录
  [types.USER_LOGIN] (state, data) {
    if (data.isSuccess) {
      state.isLogin = true;
      state.user = data.user;
    } else {
      state.isLogin = false;
      state.user = {};
    }
  },
  [types.USER_LOGOUT] (state) {
    // 退出登录
    Bmob.User.logOut();
    state.isLogin = false;
    state.user = {};
  },
  // 用户注册
  [types.USER_REGISTER] (state, isSuccess) {
    console.log(isSuccess);
    if (isSuccess) {
      state.isRegister = true;
    } else {
      state.isRegister = false;
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
