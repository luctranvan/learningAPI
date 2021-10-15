import router from './router/index'
import store from './store/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from './utils/auth'

NProgress.configure({ showSpinner: false })// NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
    if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
    if (!permissionRoles) return true
    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/auth-redirect']

router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    if (getToken()) { // determine if there has token
        /* has token*/
        if (to.path === '/login') {
            next({ name: 'home' })
            NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
        } else {
            next();
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})
