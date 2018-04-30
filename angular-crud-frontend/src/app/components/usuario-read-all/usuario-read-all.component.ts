import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-usuario-read-all',
  templateUrl: './usuario-read-all.component.html'
})
export class UsuarioReadAllComponent implements OnInit {

  usuarios: Observable<Usuario[]>;
  usuarioMarkedToDelete: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.loadModel();
  }

  loadModel() {
    this.usuarios = this.usuarioService.readAll();
  }

  onClickDelete(usuario: Usuario) {
    this.usuarioMarkedToDelete = usuario;
  }

  onClickConfirmDelete() {
    this.usuarioService.delete(this.usuarioMarkedToDelete.id).subscribe(
      (response: Response) => {
        console.log("delete OK");
        this.loadModel();
      },
      error => console.dir(error)
    );
  }

}