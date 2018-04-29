import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCreateOrUpdateComponent } from './components/usuario-create-or-update/usuario-create-or-update.component';
import { UsuarioReadAllComponent } from './components/usuario-read-all/usuario-read-all.component';

const routes: Routes = [
  {
    path: 'usuario-read-all',
    component: UsuarioReadAllComponent
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
