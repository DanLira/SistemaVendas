import { Routes, RouterModule } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { PesquisaClienteComponent } from './pesquisa-cliente/pesquisa-cliente.component';
import { ModuleWithProviders } from '@angular/core';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import { CadastroFabricanteComponent } from './cadastro-fabricante/cadastro-fabricante.component';
import { PesquisaFabricanteComponent } from './pesquisa-fabricante/pesquisa-fabricante.component';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { PesquisaVendedorComponent } from './pesquisa-vendedor/pesquisa-vendedor.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { PesquisaPedidoComponent } from './pesquisa-pedido/pesquisa-pedido.component';



const ROUTES: Routes = [
    { path: 'cadastroCliente/:op/:id', component: CadastroClienteComponent },
    { path: 'pesquisaCliente', component: PesquisaClienteComponent },
    { path: 'cadastroFabricante/:op/:id', component: CadastroFabricanteComponent },
    { path: 'pesquisaFabricante', component: PesquisaFabricanteComponent },
    { path: 'cadastroVendedor', component: CadastroVendedorComponent },
    { path: 'pesquisaVendedor', component: PesquisaVendedorComponent },
    { path: 'cadastroProdutos', component: CadastroProdutosComponent },
    { path: 'pesquisaProdutos', component: PesquisaProdutoComponent },
    { path: 'cadastroPedido', component: CadastroPedidoComponent },
    { path: 'pesquisaPedido', component: PesquisaPedidoComponent }
    ];

    export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTES);