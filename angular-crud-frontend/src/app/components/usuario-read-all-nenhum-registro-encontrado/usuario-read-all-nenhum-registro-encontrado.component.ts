import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../model/usuario.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-usuario-read-all-nenhum-registro-encontrado',
  templateUrl: './usuario-read-all-nenhum-registro-encontrado.component.html'
})
export class UsuarioReadAllNenhumRegistroEncontradoComponent implements OnInit {

  usuarios: Usuario[];
  usuarioMarkedToDelete: Usuario;
  recordsFound: boolean;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.loadModel();
  }

  loadModel() {
    this.usuarioService.readAll().subscribe(
      (usuariosRetornados: Usuario[]) => {
        this.usuarios = usuariosRetornados;
        this.recordsFound = (this.usuarios.length > 0);
      }
    );
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
