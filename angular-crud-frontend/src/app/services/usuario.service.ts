import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../model/usuario.model';
import { catchError, retry, tap, map } from 'rxjs/operators';

@Injectable()
export class UsuarioService {

    readonly resourceUrl: string = 'http://localhost:8080/angular-crud-server/api/usuario';
    
    // pelo jeito não preciso mandar os headers, mas se precisar tá aqui:
    // contentTypeJsonHeaders: HttpHeaders = new HttpHeaders().set("content-type", "application/json");

    constructor(private http: HttpClient) {
    }

    readAll() {
        return this.http.get<Usuario[]>(this.resourceUrl);
    }

    create(usuario: Usuario) {
        // TODO tentar usar pipe(), parece que eh o jeito mais moderno
        this.http.post(this.resourceUrl, usuario).subscribe(
            response => console.dir(response), error => console.dir(error)
        );

    
        // const headers:HttpHeaders = new HttpHeaders().set("content-type", "application/json");
        // return this.http.post<Usuario>(this.resourceUrl, usuario, '').pipe(tap( // Log the result or error
        //     data => console.log(data),
        //     error => console.log(error)
        //   ));

        //   .pipe(
        //     catchError(this.handleError('addHero', hero))
        //   );
    }

}
