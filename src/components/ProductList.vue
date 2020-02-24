<template>
  <div v-if="credential.status === 'ok' || getCookie('token')">
    <hr>
    <div class="container row m-auto">
      <div class="p-2 col-12">
        <button class="btn btn-primary" v-b-modal.modal-3>Create Product</button>
        <b-modal id="modal-3" title="Create Product" hide-footer>

          <form >
            <div class="form-group">
              <label for="productName">Name</label>
              <input type="text"
                     class="form-control"
                     v-model="newProduct['name']"
                     id="productName">
            </div>
            <div class="form-group">
              <label for="productCategory">Category</label>
              <input
                type="text"
                class="form-control"
                v-model="newProduct['category']"
                id="productCategory">
            </div>
            <div class="form-group">
              <label for="productPrice">Price</label>
              <input
                type="number"
                class="form-control"
                v-model="newProduct['price']"
                id="productPrice">
            </div>
            {{newProduct}}
            <hr>
            <button
              type="submit"
              class="btn btn-primary"
              @click="createNewProduct({product: newProduct, token: getCookie('token')})">
              Create</button>

          </form>


        </b-modal>
      </div>
    </div>
    <hr>
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
          <div class="card-header">
            <button class="btn btn-secondary float-left">Edit</button>
            <button class="btn btn-danger float-right" @click="deleteProduct({'id': product.id, 'token': getCookie('token')})">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState, mapActions} from 'vuex'
  import {getCookie} from 'tiny-cookie'

  export default {
    name: "ProductList",
    data(){
      return{
        newProduct: {
          name: 'test',
          category: 'test',
          price: 100
        }
      }
    },
    computed: mapState(['products','credential']),
    methods: {...mapActions(['setNewProduct','setProducts','deleteProduct']),

      getCookie,
      createNewProduct(data){
        this.setNewProduct(data);
      }
    },
    mounted() {
      this.setProducts();


    }
  }
</script>

<style scoped>

</style>