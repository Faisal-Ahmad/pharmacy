import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.min.css'
import IdleVue from 'idle-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const eventsHub = new Vue()
 
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 50000
})

Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
  if(to.matched.some(record => record.meta.requiresLogin)){
    if(!store.getters.loggedIn){
      next({name : 'login'})
    }
    else{
      next()
    }
  }
  else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
