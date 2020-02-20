<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">

        <a
          class="nav-item nav-link"
          v-b-modal.modal-1
          v-if="account.status !== 'ok' && !getCookie('token')">Login</a>

        <b-modal ref="modal-1" id="modal-1" title="Login" hide-footer>

          <form >
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email"
                     class="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     v-model="email"
                     placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
                placeholder="Password">
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              @click="getResult">Login</button>

          </form>


        </b-modal>

        <a class="nav-item nav-link" v-b-modal.modal-2 v-show="account.status === 'ok' || getCookie('token')">Details</a>
        <a class="nav-item nav-link" v-show="account.status === 'ok' || getCookie('token')" @click="logout">Logout</a>


        <b-modal id="modal-2" title="Details" hide-footer>

          <form>

            <div class="row">

              <div class="col-12" v-if="account">

                  {{account.token}}

              </div>


            </div>
          </form>


        </b-modal>

      </div>
    </div>
  </nav>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import {setCookie, getCookie, removeCookie} from 'tiny-cookie'


  export default {
    name: "NavBar",
    data(){
      return {
        email: 'hikmat@a.a',
        password: '123123'
      }
    },
    computed: mapState(['account']),
    methods: {
      ...mapActions(['getAccount','removeAccount']),
      getResult() {
        this.getAccount([this.email,this.password]);
      },
      getCookie,
      logout(){
        removeCookie('token');
        this.removeAccount();
      }
    },
    watch: {
      account: function () {
        if(this.account.status === "ok"){
          this.$refs['modal-1'].hide();
          setCookie('token', this.account.token);
        }else{
          removeCookie('token');
        }
      }
    }
  }
</script>

<style scoped>

</style>