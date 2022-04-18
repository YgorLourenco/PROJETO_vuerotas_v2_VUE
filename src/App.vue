<template>
  <div id="app">
    <!-- <h1>Aprendendo Rotas</h1> -->
    <Header />
    <hr/>
    <!-- Colocar aqui o router como componente -->
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style scoped>

</style>