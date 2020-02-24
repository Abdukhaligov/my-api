import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios);

export default new Vuex.Store({
  state:{
    products:[],
    credential:[],
    userDetails:[]
  },
  actions:{
    setProducts({commit}){
      axios
        .post("http://myApi/api/products")
        .then(r => commit('SET_PRODUCTS', r.data));
    },
    getCredential({commit}, data){
      axios
        .post("http://myApi/api/login?email=" + data[0] + "&password=" + data[1])
        .then(r => commit('SET_CREDENTIAL', r.data));
    },
    removeCredential({commit}){
      commit('DELETE_CREDENTIAL');
    },
    getUserDetails({commit}, token){
      let config = {headers: { Authorization: `Bearer ${token}` }};
      axios
        .post("http://myApi/api/details",'',config)
        .then(r => commit('SET_USER_DETAILS', r.data));
    },
    async setNewProduct({commit}, args){
      let config = {headers: { Authorization: `Bearer ${args.token}` }};

      await axios.post("http://myApi/api/products/create", args.product, config);

      axios.post("http://myApi/api/products").then(r => commit('SET_PRODUCTS', r.data))
    },
   async  deleteProduct({commit},args){
      let config = {headers: { Authorization: `Bearer ${args.token}` }};

      await  axios.put("http://myApi/api/products/delete/" + args.id, '', config);

      axios.post("http://myApi/api/products").then(r => commit('SET_PRODUCTS', r.data))


    }
  },
  mutations:{
    SET_PRODUCTS(state, products){
      state.products = products;
    },
    SET_CREDENTIAL(state, credential){
      state.credential = credential;
    },
    DELETE_CREDENTIAL(state){
      state.credential = {"status": "credential error"};
    },
    SET_USER_DETAILS(state, userDetails){
      state.userDetails = userDetails;
    }
  },
  getters:{
    GET_PRODUCTS(state){
      return state.products;
    }
  }
})