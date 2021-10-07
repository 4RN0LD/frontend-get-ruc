import { Usuario } from './../_model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = `${environment.HOST}/usuarios`;

  constructor(public http: HttpClient) { }

  login(usuario: Usuario) {
    return this.http.post<any>(this.url, usuario).pipe(
      catchError(e => {
        if (e.status == 406) {
          Swal.fire("Error", "Credenciales Incorrectas", "error");
        }
        return throwError(e);
      })
    );
  }

}
