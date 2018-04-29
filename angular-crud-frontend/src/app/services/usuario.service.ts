import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/usuario.model';
import { catchError, retry, tap, map } from 'rxjs/operators';

@Injectable()
export class UsuarioService {

    readonly resourceUrl: string = 'http://localhost:8080/angular-crud-server/api/usuario/';

    // pelo jeito não preciso mandar os headers, mas se precisar tá aqui:
    // contentTypeJsonHeaders: HttpHeaders = new HttpHeaders().set("content-type", "application/json");

    // se precisar passar query params:
    // const options = { params: new HttpParams().set('id', id.toString()), reportProgress: true };
    // console.log(options.params.toString());

    constructor(private http: HttpClient) {
    }

    readAll(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.resourceUrl);
    }

    readById(id: number): Observable<Usuario> {

        return this.http.get<Usuario>(this.resourceUrl + id);
    }

    create(usuario: Usuario): void {
        // TODO tentar usar pipe(), parece que eh o jeito mais moderno
        this.http.post(this.resourceUrl, usuario).subscribe(
            response => console.dir(response), error => console.dir(error)
        );
    }

    update(usuario: Usuario): void {
        this.http.put(this.resourceUrl, usuario).subscribe(
            response => console.dir(response), error => console.dir(error)
        );
    }

}
