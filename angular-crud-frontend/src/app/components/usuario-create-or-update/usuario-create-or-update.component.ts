import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { isNumeric } from "rxjs/util/isNumeric"

@Component({
  selector: 'app-usuario-create-or-update',
  templateUrl: './usuario-create-or-update.component.html'
})
export class UsuarioCreateOrUpdateComponent implements OnInit {

  id: any;
  updateMode: boolean;
  submitButtonTitle: string;
  usuario: Usuario;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.storeIdParameter();
    this.setCreateOrUpdateMode();
    this.setSubmitButtonTitle();
    this.initializeModel();
  }

  storeIdParameter() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    console.log('query param "id":', this.id);
  }

  setCreateOrUpdateMode() {
    this.updateMode = isNumeric(this.id);
  }

  setSubmitButtonTitle() {
    if (this.updateMode) {
      this.submitButtonTitle = 'Alterar';
    } else {
      this.submitButtonTitle = 'Incluir';
    }
  }

  initializeModel() {
    if (this.updateMode) {
      this.initializeExistingModelById();
    } else {
      this.initializeNewModel();
    }
  }

  initializeExistingModelById() {
    this.usuarioService.readById(this.id).
    subscribe(
      retorno => {console.log('successo: ', retorno); this.usuario = retorno},
      erro => console.log('erro: ', erro) // TODO não seria melhor tratar erros só nos services?
    );

    // TODO quando usuario passou um id que não tem nenhum usuario, mandar de volta pra pagina de consulta, com mensagem de erro

  }

  initializeNewModel() {
    this.usuario = new Usuario();
  }

  onSubmit() {
    if (this.updateMode) {
      this.updateUsuario();
    } else {
      this.createUsuario();
    }

    this.backToReadAllPage();
  }

  updateUsuario() {
    this.usuarioService.update(this.usuario);
  }

  createUsuario() {
    this.usuarioService.create(this.usuario);
  }

  backToReadAllPage() {
    this.router.navigate(['usuario-read-all']);
  }

}
