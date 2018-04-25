import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html'
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.usuarioService.readAll();
    // TODO try catch?

    // this.usuarios.subscribe(res => console.log(JSON.stringify(res)));
    // this.usuarios.subscribe(res => console.dir(res));

  }

}
