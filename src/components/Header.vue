<template>
    <nav id="header">
        <h1>Sujeito Programador</h1>      
        <ul>
            <!-- propriedade 'li' transforma o router-link em <li> -->
            <!-- active-class deixa ativo um botão -->
            <!-- exact serve apenas para especificar -->
            <router-link to="/" tag="li" active-class="ativo" exact>
                <a>Home</a>
            </router-link>
            <!-- Parametro enviado de maneira fixa -->
            <router-link to="/produto" tag="li" active-class="ativo" exact>
                <a>Produto</a>
            </router-link>

        </ul>
    </nav>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Header'
}
</script>

<style scoped>
    #header{
        display: flex;
        justify-content: space-around;
    }
    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        list-style: none;
        padding: 0;
    }
    ul li{
        background: brown;
        margin: 3px;
        padding: 3px 10px;
        border-radius: 5px;
    }
    a{
        color: #FFF;
        text-decoration: none;
        margin-left: 5px;
        font-size: 25px;
    }
    .ativo{
        background-color: #000;
    }
</style>