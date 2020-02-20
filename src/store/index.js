import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state:{
    details:[]
  },
  actions:{
    getDetails({commit}){
      axios
        .post("http://myApi/api/products")
        .then(r => commit('SET_DETAILS', r.data))
    }
  },
  mutations:{
    SET_DETAILS(state, details){
      state.details = details;
    }
  },
  getters:{

  }
})