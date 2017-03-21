/**
 * Created by Administrator on 2017/3/21.
 */
import * as types from '../mutation-types'

const state = {
  isLogin: false
}

// Getters 会暴露为 store.getters 对象：
const getters = {
  checkUserIsLogin: state => state.isLogin
}

const actions = {
  login({commit}, user){
    commit(types.USER_LOGIN, {user})
  },
  register({commit}, user) {
    commit(types.USER_REGISTER, {user})
  }
}

const mutations = {
  [types.USER_LOGIN] (user) {
    if (user == null) {
      // 用户为空
    } else if (user.username == 'scott' && user.password === 'tiger') {
      // 登录成功
    } else {
      //登录失败
    }
  },
  [types.USER_REGISTER] (user) {
    if (user == null) {
      // 用户为空
    } else if (user.username === 'scott') {
      // 用户已存在
    } else {
      // 用户注册成功
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
