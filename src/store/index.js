import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state:{
    products:[],
    account:[]
  },
  actions:{
    getProducts({commit}){
      axios
        .post("http://myApi/api/products")
        .then(r => commit('SET_PRODUCTS', r.data))
    },
    getAccount({commit}, data){
      axios
        .post("http://myApi/api/login?email=" + data[0] + "&password=" + data[1])
        .then(r => commit('SET_ACCOUNT', r.data))
    },
    removeAccount({commit}){
      commit('DELETE_ACCOUNT');
    }
  },
  mutations:{
    SET_PRODUCTS(state, products){
      state.products = products;
    },
    SET_ACCOUNT(state, account){
      state.account = account;
    },
    DELETE_ACCOUNT(state){
      state.account = {"status": "credential error"};
    }
  },
  getters:{

  }
})