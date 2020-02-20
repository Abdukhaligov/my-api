<template>
  <div id="app">

    <NavBar />

    <ProductList />

    <hr>




  </div>
</template>

<script>

  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min'
  import ProductList from "@/components/ProductList";
  import NavBar from "@/components/NavBar";
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {

    name: 'App',
    components: {
      ProductList,
      NavBar
    }
  }
</script>

<style>

</style>
