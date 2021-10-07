import { Comercio } from './../../_model/comercio';
import { ComercioService } from './../../_service/comercio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public comercio;

  constructor(private service: ComercioService) { }

  ngOnInit() {
  }

  consultar(ruc: string) {
    this.service.findByRuc(ruc, sessionStorage.getItem("token")).subscribe(comercio => this.comercio = comercio)
  }

}
