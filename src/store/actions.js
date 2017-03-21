/**
 * Created by Administrator on 2017/3/21.
 */
import * as types from './mutation-types'

export const login = ({ commit }, user) => {
  if (user != null) {
    commit(types.USER_LOGIN, {
      username: user.username,
      password: user.password
    })
  }
}
