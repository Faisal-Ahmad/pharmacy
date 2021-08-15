import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from './views/Posts'
import Login from './views/Login'
import Logout from './views/Logout'

//Next you need to call Vue.use(Router) to make sure that Router is added as a middleware to our Vue project.
Vue.use(VueRouter)

export default new VueRouter({
    //The default mode for Vue Router is hash mode. 
    //It uses a URL hash to simulate a full URL so that the page won’t be reloaded when the URL changes.  
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'posts',
        component: Posts,
        meta:{
            requiresLogin:true
        }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout,
        },
    ]
})