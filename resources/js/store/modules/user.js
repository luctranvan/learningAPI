import { login, logout, getUserInfo } from '../../api/login'
import { getToken, setToken, removeToken } from '../../utils/auth'

const user = {
    state: {
        user: '',
        status: '',
        code: '',
        token: getToken(),
        name: '',
        avatar: '',
        introduction: '',
        roles: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {
        SET_CODE: (state, code) => {
            state.code = code
        },
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_INTRODUCTION: (state, introduction) => {
            state.introduction = introduction
        },
        SET_SETTING: (state, setting) => {
            state.setting = setting
        },
        SET_STATUS: (state, status) => {
            state.status = status
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    actions: {
        login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(response => {
                    const data = response.data.data;
                    if(data.errors){
                        reject(data.errors)
                    }
                    commit('SET_TOKEN', data.access_token)
                    commit('SET_NAME', data.user.name)
                    setToken(data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetUserInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(response => {
                    if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
                        reject('error')
                    }
                    const data = response.data

                    if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
                        commit('SET_ROLES', data.roles)
                    } else {
                        reject('getInfo: roles must be a non-null array !')
                    }

                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    commit('SET_INTRODUCTION', data.introduction)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        LogOut({ commit, state }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        },

        ChangeRoles({ commit, dispatch }, role) {
            return new Promise(resolve => {
                getUserInfo(role).then(response => {
                    const data = response.data
                    commit('SET_ROLES', data.roles)
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    commit('SET_INTRODUCTION', data.introduction)
                    dispatch('GenerateRoutes', data)
                    resolve()
                })
            })
        }
    }
}

export default user
