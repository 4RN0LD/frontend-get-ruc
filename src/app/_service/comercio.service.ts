import { Comercio } from './../_model/comercio';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  url: string = `${environment.HOST}/comercios`;

  constructor(public http: HttpClient) { }

  findByRuc(ruc: string, token: string) {
    return this.http.get<Comercio>(`${this.url}/${ruc}?token=${token}`).pipe(
      catchError(e => {
        if (e.status == 404) {
          Swal.fire("Error", "Comercio no existe", "error");
        }
        if (e.status == 403) {
          Swal.fire("Error", "No tiene permiso para consultar este recurso", "error");
        }
        return throwError(e);
      })
    );
  }
}
