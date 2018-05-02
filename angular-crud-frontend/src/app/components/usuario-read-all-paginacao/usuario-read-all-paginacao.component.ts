import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-usuario-read-all-paginacao',
  templateUrl: './usuario-read-all-paginacao.component.html'
})
export class UsuarioReadAllPaginacaoComponent implements OnInit {

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
        console.log('delete OK');
        this.loadModel();
      },
      error => console.dir(error)
    );
  }

}
