import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from  './entidades/cliente';
import { Fabricante } from  './entidades/fabricante';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  PHP_API_SERVER = "http://localhost/index.php?class=TFacade&method=";

  constructor(private http: HttpClient) { }

    // CLIENTE
    listaCliente(nomePesq): Observable<Cliente[]>{
      var url = `${this.PHP_API_SERVER}listarCliente&nome=${nomePesq}`;
      return this.http.get<Cliente[]>(url);
    }

    consultarCliente(id) : Observable<Cliente>{
      var url = this.PHP_API_SERVER + 'consultarCliente&id=' + id;
      console.log(url);
      return this.http.get<Cliente>(url)
    }

    incluirCliente(cliente: Cliente) : Observable<Cliente>{
      var url = this.PHP_API_SERVER + 'incluirCliente';
      return this.http.post<Cliente>(url, cliente)
    }

    alterarCliente(cliente: Cliente) : Observable<Cliente>{
      var url = this.PHP_API_SERVER + 'alterarCliente';
      return this.http.post<Cliente>(url, cliente)
    }

    excluirCliente(id) : Observable<Cliente>{
      var url = this.PHP_API_SERVER + 'excluirCliente&id=' + id;
      return this.http.get<Cliente>(url)
    }

    // FABRICANTE
    listaFabricante(nomePesq): Observable<Fabricante[]>{
      var url = `${this.PHP_API_SERVER}listarFabricante&nome=${nomePesq}`;
      return this.http.get<Fabricante[]>(url);
    }

    consultarFabricante(id) : Observable<Fabricante>{
      var url = this.PHP_API_SERVER + 'consultarFabricante&id=' + id;
      console.log(url);
      return this.http.get<Fabricante>(url)
    }

    incluirFabricante(fabricante: Fabricante) : Observable<Fabricante>{
      var url = this.PHP_API_SERVER + 'incluirFabricante';
      return this.http.post<Fabricante>(url, fabricante)
    }

    alterarFabricante(fabricante: Fabricante) : Observable<Fabricante>{
      var url = this.PHP_API_SERVER + 'alterarFabricante';
      return this.http.post<Fabricante>(url, fabricante)
    }

    excluirFabricante(id) : Observable<Fabricante>{
      var url = this.PHP_API_SERVER + 'excluirFabricante&id=' + id;
      return this.http.get<Fabricante>(url)
    }

}
