import { Component, OnInit } from '@angular/core';
import { Cliente } from '../entidades/cliente';
import { ServicosService } from '../servicos.service';
import { ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  cliente:  Cliente;

  disabledbNome = false;
  disabledCpf = false;

  operacao = "Consultar";
  idcliente = 0;
  nome = "";
  cpf = "";

  constructor(
    private servico: ServicosService,
    private rota: ActivatedRoute,
    private location: Location
    ) { 

    this.operacao = rota.snapshot.params["op"];
    this.idcliente = rota.snapshot.params["id"];;

    this.configurar();
  }

  ngOnInit() {

  };

configurar() {
    if (this.operacao != "Incluir") {
      this.servico.consultarCliente(this.idcliente).subscribe((cliente: Cliente)=>{
        this.cliente = cliente;

        this.idcliente = this.cliente.idcliente;
        this.nome = this.cliente.nome;
        this.cpf = this.cliente.cpf;

      })

      this.disabledbNome = this.operacao == "Consultar";
      this.disabledCpf = this.operacao == "Consultar";
  
    }

  }

  onSalvar(frm) {

      this.cliente.idcliente = this.idcliente;
      this.cliente.nome = this.nome;
      this.cliente.cpf = this.cpf;

      if (this.operacao == "Incluir") {
        this.servico.incluirCliente(this.cliente).subscribe((cliente: Cliente)=>{
          this.cliente = cliente;
        })
      } else {
        this.servico.alterarCliente(this.cliente).subscribe((cliente: Cliente)=>{
          this.cliente = cliente;
        })
      }

  }

  onRetornar() {
    this.location.back();
  }

}
