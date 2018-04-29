import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioReadAllComponent } from './components/usuario-read-all/usuario-read-all.component';

const routes: Routes = [
  {
    path: 'usuario-read-all',
    component: UsuarioReadAllComponent
  },
  {
    path: 'usuario-create',
    component: UsuarioCreateComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
