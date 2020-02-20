<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Features</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
        </div>
      </div>
    </nav>

    <div class="container row m-auto">

      <div v-for="detail in details" :key="detail.id" class="col-4 p-2">
        <div class="card">
          <div class="card-header">
            <strong>#{{detail.id}} Name:</strong> {{detail.name}}
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <h5 class="card-title"><strong>Category: </strong>{{detail.category}}</h5>
                <p class="card-text"><strong>Price: </strong>{{detail.price}}</p>
              </div>
              <div class="col-6">
                <div class="input-group">
                  <input :value="detail.created_at" disabled type="text" aria-label="First name" class="form-control">
                </div>
                <hr>
                <div class="input-group">
                  <input :value="detail.updated_at" disabled type="text" aria-label="First name" class="form-control">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>


  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min'

  export default {

    name: 'App',
    computed: mapState(['details']),
    methods: mapActions(['getDetails']),
    async mounted() {
      this.getDetails();
    },
    components: {}
  }
</script>

<style>

</style>
