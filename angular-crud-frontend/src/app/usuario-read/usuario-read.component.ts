import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario.model';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.scss']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.readAll().subscribe(
      (usuariosRetornados: any[]) => {
        this.usuarios = usuariosRetornados
      }, error => console.log(error)
    )

    console.log(this.usuarios)
  }

}
