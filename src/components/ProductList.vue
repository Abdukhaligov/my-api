<template>
  <div class="container row m-auto">
    <div v-for="product in products" :key="product.id" class="col-4 p-2">
      <div class="card">
        <div class="card-header">
          <strong>#{{product.id}} Name:</strong> {{product.name}}
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-5">
              <h5 class="card-title">Category: {{product.category}}</h5>
              <p class="card-text"><strong>Price: </strong>{{product.price}}</p>
            </div>
            <div class="col-7">
              <div class="input-group">
                <input :value="product.created_at" disabled type="text" aria-label="First name" class="form-control">
              </div>
              <hr>
              <div class="input-group">
                <input :value="product.updated_at" disabled type="text" aria-label="First name" class="form-control">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "ProductList",
    computed: mapState(['products']),
    methods: mapActions(['getProducts']),
    async mounted() {
      this.getProducts();
    }
  }
</script>

<style scoped>

</style>