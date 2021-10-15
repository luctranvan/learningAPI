/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from './App'
import router from './router'
import store from './store'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import './core/plugins/vee-validate'

import './permission' // permission control

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});
