export const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "./components/Home.vue"),
    },

    {
        path: '/login',
        name: "Login",
        component: () => import(/* webpackChunkName: "Login" */ "./components/auth/Login.vue"),
        meta: {
            disableIfLoggedIn: true
        },
    },

    {
        path: '/reset/password/',
        name: "ResetPassword",
        component: () => import(/* webpackChunkName: "ResetPassword" */ "./components/auth/ResetPassword.vue"),
        meta: {
            disableIfLoggedIn: true
        },
    },

    {
        path: '/reset/password/request',
        name: "ResetPasswordRequest",
        component: () => import(/* webpackChunkName: "ResetPasswordRequest" */ "./components/auth/ResetPasswordRequest.vue"),
        meta: {
            disableIfLoggedIn: true
        },
    },

    {
        path: '/api/oauth/login/callback/:provider',
        name: "Callback_provider",
        component: () => import(/* webpackChunkName: "Oauth" */ "./components/auth/Oauth.vue"),
        meta: {
            disableIfLoggedIn: true
        },
    },

    {
        path: '/register',
        name: "Register",
        component: () => import(/* webpackChunkName: "Register" */ "./components/auth/Register.vue"),
        meta: {
            disableIfLoggedIn: true
        },
    },

    {
        path: '/games',
        name: "Game",
        component: () => import(/* webpackChunkName: "Game" */ "./components/Game.vue")
    },

    {
        path: '/store',
        name: "Store",
        component: () => import(/* webpackChunkName: "Store" */ "./components/Store.vue")
    },


    {
        path: "/account",
        name: "Account",
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "Account" */ "./components/Account.vue"),
    },

    {
        path: "/cart",
        name: "Cart",
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "Cart" */ "./components/Cart.vue"),
    },

    {
        path: "/account/update",
        name: "UpdateAccount",
        meta: { requiresAuth: true },
        component: () => import(/* webpackChunkName: "UpdateAccount" */ "./components/UpdateAccount.vue"),
    },

    {
        path: "/save",
        name: "Save",
        component: () => import(/* webpackChunkName: "Save" */ "./components/Save.vue"),
        meta: { requiresAuth: true }
    },

    {
        path: "/post/:id",
        name: "PostPage",
        component: () => import(/* webpackChunkName: "PostPage" */ "./components/PostPage.vue"),
        meta: { requiresAuth: true },
        props: true,
    },


    {
        path: "*",
        name: "PageNotFound",
        component: () => import(/* webpackChunkName: "NotFound" */ "./components/templates/PageNotFound.vue"),
    },

]
