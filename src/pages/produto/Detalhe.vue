<template>
  <div id="detalhe">
      <h2>Detalhe do Produto</h2>
      <!-- {{id}} é um parametro de identificação para a rota -->
      <span>Codigo do Produto: <strong> {{id}}</strong></span>
      <!-- Colocando o botão de "editar" com bind -->
      <!-- <router-link :to="`/produto/${id}/editar`">Editar produto {{id}}</router-link> -->

      <!-- Colocando nome para a rota -->
      <router-link :to="{name: 'editar', params: {id}, query: {nome: 'Camiseta Sujeito', qtd:12} }">
          Editar produto {{id}}
      </router-link>

  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Detalhe',
    props:['id'],
    // Usando o Guards no componente Detalhe, não tem acesso ao "this."
    beforeRouteEnter(to, from, next){
        console.log('ANTES DE ENTRAR NA ROTA DETALHE!')
        next()
    }
}
</script>

<style>

</style>