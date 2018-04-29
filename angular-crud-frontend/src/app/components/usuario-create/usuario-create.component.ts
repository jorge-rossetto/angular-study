import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html'
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.createUsuario(); 
    this.backToReadAllPage();
  }

  createUsuario() {
    this.usuarioService.create(this.usuario);
  }

  backToReadAllPage() {
    this.router.navigate(['usuario-read-all']);
  }

}
