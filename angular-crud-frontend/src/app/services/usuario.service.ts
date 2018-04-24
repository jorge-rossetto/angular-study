import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
    constructor(private http: HttpClient) {
        
    }

    readAll() {
        return this.http.get('/api/usuario').map((response : Response) => response.json());
    }
}