import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { ServicosService } from './servicos.service';

import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { PesquisaClienteComponent } from './pesquisa-cliente/pesquisa-cliente.component';
import { routing } from './app.routing';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import { CadastroFabricanteComponent } from './cadastro-fabricante/cadastro-fabricante.component';
import { PesquisaFabricanteComponent } from './pesquisa-fabricante/pesquisa-fabricante.component';
import { CadastroVendedorComponent } from './cadastro-vendedor/cadastro-vendedor.component';
import { PesquisaVendedorComponent } from './pesquisa-vendedor/pesquisa-vendedor.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { PesquisaPedidoComponent } from './pesquisa-pedido/pesquisa-pedido.component';
import { CadastroPagamentoComponent } from './cadastro-pagamento/cadastro-pagamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroClienteComponent,
    PesquisaClienteComponent,
    CadastroProdutosComponent,
    PesquisaProdutoComponent,
    CadastroFabricanteComponent,
    PesquisaFabricanteComponent,
    CadastroVendedorComponent,
    PesquisaVendedorComponent,
    CadastroPedidoComponent,
    PesquisaPedidoComponent,
    CadastroPagamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    ServicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
