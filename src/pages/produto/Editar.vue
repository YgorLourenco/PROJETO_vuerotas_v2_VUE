<template>
  <div id="editar">
      <!-- Titulo pra mostrar o id -->
      <h2>Editando produto {{id}}</h2>
      <!-- {{id}} é um parametro de identificação para a rota -->
      <span>Codigo do Produto: <strong> {{id}}</strong></span>
      <br/>

      <!-- Pegando o nome dos parametros do query params -->
      <span>
       Nome do produto:  {{$route.query.nome}}
      </span>
      <br/>
       <span>
       Quantidade disponivel:  {{$route.query.qtd}}
      </span>

  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Editar',
    props: ['id'],
    // Guard para se caso o usuário tentar sair a página, se ele clicar em sim e redirecionando se não fica na pagina
    beforeRouteLeave(to, from, next){
        const resposta = window.confirm('Você realmente deseja sair da pagina?')
        if(resposta){
            next()
        } else {
            next(false)
        }
    }
}
</script>

<style>

</style>