import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
    constructor(private http: HttpClient) {

    }

    readAll() {
        return this.http.get<Usuario[]>('http://localhost:8080/angular-crud-server/api/usuario');
    }
}
