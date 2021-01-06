import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [
      {
      name: '',
      address: '',
      hendpone:'',
      program: '',
      isApproved: true
    },
    {
      name: '',
      address: '',
      hendpone:'',
      program: '',
      isApproved: false
    },
    {
      name: '',
      hendpone:'',
      address: '',
      program: '',
      isApproved: false
    },
    {
      name: '',
      hendpone:'',
      address: '',
      program: '',
      isApproved: true
    },
  ]
  },
  mutations:{
    addUser(state, payload){
      state.user.push(payload)
    },
  },
  actions:{
    // getUser(store, payload){
    //   store.commit('addUser', payload)
    // }
  },
  getters:{
  },
  modules: {
  }
})