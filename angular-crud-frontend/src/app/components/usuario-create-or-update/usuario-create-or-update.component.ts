import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-usuario-create-or-update',
  templateUrl: './usuario-create-or-update.component.html'
})
export class UsuarioCreateOrUpdateComponent implements OnInit {

  id: any;
  updateMode: boolean;
  submitButtonTitle: string;
  breadcrumbTitle: string;
  usuario: Usuario = new Usuario();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.storeIdParameter();
    this.setCreateOrUpdateMode();
    this.setBreadcrumbTitle();
    this.setSubmitButtonTitle();
    this.initializeModel();
  }

  storeIdParameter() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    console.log('Query param "id":', this.id);
  }

  setCreateOrUpdateMode() {
    this.updateMode = isNumeric(this.id);
  }

  setBreadcrumbTitle() {
    if (this.updateMode) {
      this.breadcrumbTitle = 'Alteração';
    } else {
      this.breadcrumbTitle = 'Inclusão';
    }
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
    }
  }

  initializeExistingModelById() {
    this.usuarioService.readById(this.id).
      subscribe(
        retorno => { console.log('Successo: ', retorno); this.usuario = retorno; },
        erro => console.log('Erro: ', erro) // TODO não seria melhor tratar erros só nos services?
      );

    // TODO quando usuario passou um id que não tem nenhum usuario, mandar de volta pra pagina de consulta, com mensagem de erro

  }

  initializeNewModel() {
    this.usuario = new Usuario();
  }

  onSubmit() {
    if (this.updateMode) {
      this.updateModel();
    } else {
      this.createModel();
    }
  }

  updateModel() {
    this.usuarioService.update(this.usuario).subscribe(
      (response: Response) => {
        console.log('Update OK');
        this.backToReadAllPage();
      },
      error => console.dir(error) // TODO concentrar tratamento de erros no service
    );
  }

  createModel() {
    this.usuarioService.create(this.usuario).subscribe(
      (response: Response) => {
        console.log('Create OK');
        this.backToReadAllPage();
      },
      error => console.dir(error) // TODO concentrar tratamento de erros no service
    );
  }

  backToReadAllPage() {
    this.router.navigate(['usuario-read-all']);
  }

}
