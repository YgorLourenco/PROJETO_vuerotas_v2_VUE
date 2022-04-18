import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home.vue'
import Produto from './pages/produto/Produto.vue'

// Importando as rotas filhas para serem configuradas
import MeusProdutos from './pages/produto/MeusProdutos'
import Editar from './pages/produto/Editar'
import Detalhe from './pages/produto/Detalhe'

// Modelo de rota HASH - seusite.com/#/contato - Usa o front-end




// Modelo History - seusite.com/contato - usa o servidor(back-end)



// Vai gravar as rotas na instância do Vue
Vue.use(Router);

// Transformar router em variavel para os Guards
const router = new Router({
    mode: 'history', // history e para back-end
    routes:[
        {
            path: '/',
            component: Home
        },
        {

            path: '/produto', 
            component: Produto,
            props: true, 
            // Configurando o Guards na rota produto
            beforeEnter: (to, from, next) => {console.log('ANTES DA ROTA PRODUTO'); next();},
            // Vai colocar as rotas filhas do caminho produto
            children: [
                {path:'', component:MeusProdutos},
                {path:':id', component:Detalhe, props:true},
                {path:':id/editar', component:Editar, props:true, name:'editar',
                 // Configurando o Guards na rota filha de produto
                // beforeEnter: (to, from, next) => {console.log('ANTES DA ROTA EDITAR!!!'); next();},
                }
            ]
        },
        // Se não existir qualquer rota, ele vai redirecionar para "Home"
        {
            path:'*',
            redirect:'/'
        }
    ]
});


// beforeEach é uma função que configura a rota que vc esta, vai e a proxima
// router.beforeEach((to, from, next) => {
//     console.log('CHAMANDO ANTES DAS ROTAS')
//     next()
// })

export default router