import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from './axios-api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    //  accessToken: localStorage.getItem('access-token') || null,
     accessToken: null,
     refreshToken: null,
     APIData: ''
  },
  mutations: {
    updateStorage (state, { access, refresh }) {
      state.accessToken = access
      state.refreshToken = refresh
    },
    destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  getters: {
    loggedIn (state) {
      return state.accessToken != null
    }
  },
  actions: {
    userLogout (context) {
      if (context.getters.loggedIn) {
          context.commit('destroyToken')
            // localStorage.removeItem('access-token')
      }
    },
    userLogin (context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI.post('/api-token/', {
          username: usercredentials.username,
          password: usercredentials.password
        })
          .then(response => {
            context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh }) 
            // localStorage.setItem('access-token',response.data.access)
            resolve()
          })
          .catch(err => {
            // localStorage.removeItem('access-token')
            reject(err)
          })
      })
    }
  }
})