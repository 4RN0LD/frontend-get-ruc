import { UsuarioService } from './../../_service/usuario.service';
import { Usuario } from './../../_model/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    this.service.login(this.usuario).subscribe(token => {
      sessionStorage.setItem('token', token.token);
      this.router.navigate(["consulta"]);
    });
  }

}
