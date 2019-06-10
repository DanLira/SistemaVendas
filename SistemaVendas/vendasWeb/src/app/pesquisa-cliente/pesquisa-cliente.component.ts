import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entidades/cliente';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-pesquisa-cliente',
  templateUrl: './pesquisa-cliente.component.html',
  styleUrls: ['./pesquisa-cliente.component.css']
})
export class PesquisaClienteComponent implements OnInit {

  clientes:Array<Cliente> = new Array<Cliente>();

  nomePesq = "";

  constructor(private servico: ServicosService) { 

    this.servico.listaCliente(this.nomePesq).subscribe((clientes: Cliente[])=>{
      this.clientes = clientes;
    })



  }

  ngOnInit() {0
  }

}
