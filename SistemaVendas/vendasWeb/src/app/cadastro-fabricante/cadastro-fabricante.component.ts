import { Component, OnInit } from '@angular/core';
import { Fabricante } from '../entidades/fabricante';
import { ServicosService } from '../servicos.service';
import { ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-fabricante',
  templateUrl: './cadastro-fabricante.component.html',
  styleUrls: ['./cadastro-fabricante.component.css']
})
export class CadastroFabricanteComponent implements OnInit {

  fabricante:  Fabricante;

  disabledbRazaoSocial = false;
  disabledTelefone = false;

  operacao = "Consultar";
  idfabricante = 0;
  razaosocial = "";
  telefone = "";

  constructor(
    private servico: ServicosService,
    private rota: ActivatedRoute,
    private location: Location
    ) { 

    this.operacao = rota.snapshot.params["op"];
    this.idfabricante = rota.snapshot.params["id"];;

    this.configurar();
  }

  ngOnInit() {
  }

  configurar() {
    if (this.operacao != "Incluir") {
      this.servico.consultarFabricante(this.idfabricante).subscribe((fabricante: Fabricante)=>{
        this.fabricante = fabricante;

        this.idfabricante = this.fabricante.idfabricante;
        this.razaosocial = this.fabricante.razaosocial;
        this.telefone = this.fabricante.telefone;

      })

      this.disabledbRazaoSocial = this.operacao == "Consultar";
      this.disabledTelefone = this.operacao == "Consultar";
  
    }

  }

  onSalvar(frm) {

    this.fabricante.idfabricante = this.idfabricante;
    this.fabricante.razaosocial = this.razaosocial;
    this.fabricante.telefone = this.telefone;

    if (this.operacao == "Incluir") {
      this.servico.incluirFabricante(this.fabricante).subscribe((fabricante: Fabricante)=>{
        this.fabricante = fabricante;
      })
    } else {
      this.servico.alterarFabricante(this.fabricante).subscribe((fabricante: Fabricante)=>{
        this.fabricante = fabricante;
      })
    }

}

onRetornar() {
  this.location.back();
}

}
