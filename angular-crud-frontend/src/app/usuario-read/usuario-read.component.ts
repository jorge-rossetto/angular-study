import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.scss']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  posts: Observable<any>;

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.readAll()
      .catch(error => {
        console.log(error);
        return Observable.of(error);
      });

    this.usuarios.subscribe(res => console.log(JSON.stringify(res)));
    this.usuarios.subscribe(res => console.dir(res));

  }

}
