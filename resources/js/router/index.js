import Vue from 'vue'
import Router from 'vue-router'


import Simple from '../views/layouts/Simple'

import Dashboard from '../views/Home.vue'
import Home from "../views/Home";

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '',
            component: Simple,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import("../views/login"),
                },
            ]
        },
        {
            path: '/',
            redirect: '/home',
            name: 'home',
            component: Simple,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                // {
                //     path: 'users',
                //     name: 'Users',
                //     component: () => import("../views/Users")
                // }
            ]
        }
    ]
})
