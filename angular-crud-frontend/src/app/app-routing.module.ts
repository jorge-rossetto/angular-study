import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCreateOrUpdateComponent } from './components/usuario-create-or-update/usuario-create-or-update.component';
import { UsuarioReadAllComponent } from './components/usuario-read-all/usuario-read-all.component';
import { UsuarioReadAllBasicoComponent } from './components/usuario-read-all-basico/usuario-read-all-basico.component';
import { UsuarioReadAllPaginacaoComponent } from './components/usuario-read-all-paginacao/usuario-read-all-paginacao.component';
import { UsuarioReadAllNenhumRegistroEncontradoComponent } from './components/usuario-read-all-nenhum-registro-encontrado/usuario-read-all-nenhum-registro-encontrado.component';
import { UsuarioReadAllFiltroComponent } from './components/usuario-read-all-filtro/usuario-read-all-filtro.component';

const routes: Routes = [
  {
    path: 'usuario-read-all',
    component: UsuarioReadAllComponent
  },
  {
    path: 'usuario-read-all-basico',
    component: UsuarioReadAllBasicoComponent
  },
  {
    path: 'usuario-read-all-paginacao',
    component: UsuarioReadAllPaginacaoComponent
  },
  {
    path: 'usuario-read-all-nenhum-registro-encontrado',
    component: UsuarioReadAllNenhumRegistroEncontradoComponent
  },
  {
    path: 'usuario-read-all-filtro',
    component: UsuarioReadAllFiltroComponent
  },
  {
    path: 'usuario-create-or-update',
    component: UsuarioCreateOrUpdateComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
