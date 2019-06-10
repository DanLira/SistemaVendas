import { Component, OnInit } from '@angular/core';
import { Fabricante } from '../entidades/fabricante';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-pesquisa-fabricante',
  templateUrl: './pesquisa-fabricante.component.html',
  styleUrls: ['./pesquisa-fabricante.component.css']
})
export class PesquisaFabricanteComponent implements OnInit {
  fabricantes:Array<Fabricante> = new Array<Fabricante>();

  nomePesq = "";

  constructor(private servico: ServicosService) { 

    this.servico.listaFabricante(this.nomePesq).subscribe((listEntidade: Fabricante[])=>{
      this.fabricantes = listEntidade;
    })

  }

  ngOnInit() {0
  }

}
