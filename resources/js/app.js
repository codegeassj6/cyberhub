require('./bootstrap');
window.Vue = require('vue').default;
import Vue from 'vue';
import { routes } from './routes'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import StoreData from './store'
import Adsense from 'vue-google-adsense/dist/Adsense.min.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


Vue.use(require('vue-script2'))
Vue.use(Adsense)
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.component('app-component', require('./components/AppComponent.vue').default);

Vue.mixin({
    methods: {
        capitalizeFirstLetter(val) {
            return val.charAt(0).toUpperCase() + val.slice(1);
        },

    }
});

const store = new Vuex.Store({
    modules: {
        StoreData
      },
    plugins: [],
});

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
    },
})

// check the token if not expired
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Check your token for validity, and if needed, refresh the token / force re-login etc.
    if(error.response.status == 401) {
        store.commit('logout');
        router.push('/login');
    }
    return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!store.getters.currentUser) {
          next({
            name: "Login",
            query: {redirect: to.fullPath}
          });
        } else {
          next();
        }
    } else {
        next();
    }

    if(to.matched.some(record => record.meta.disableIfLoggedIn)) {
        if(store.getters.currentUser) {
            next({
                name: "Home",
              });
        } else {
            next();
        }
    } else {
        next();
    }

})

const app = new Vue({
    el: '#app',
    router,
    store,
});

// window.Echo.channel('chat').listen('.message', (e) => {
//   console.log(e);
//   alert(e);
// })
