import axios from 'axios'
import store from '../store/index'
import {getToken, removeToken} from '../utils/auth'

// create an axios instance
const ADMIN_API = '/api/';

const service = axios.create({
    baseURL: ADMIN_API,
    timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        if (store.getters.token) {
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error)
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status === 401) {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken();
        }
        console.log('err' + error) // for debug
        alert(error.message)
        return Promise.reject(error)
    }
)

export default service
