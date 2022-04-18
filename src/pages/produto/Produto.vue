<template>
  <div id="produto">
    <h1>Tela Produto</h1>
    <br/>
    <!-- Rotas filhas aqui nesse router-view!!! -->
    <router-view />
    <!-- Botão pra criar um evento de voltar pra home -->
    <button @click="irHome">Ir para Home</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Produto',
//  Parametro da rota configurado aqui
  props: ['id'],
  methods:{
      irHome(){
        //  Acessar a rota e enviar para o caminho da home
          this.$router.push('/')
      }
  }
}
</script>

<style scoped>

</style>