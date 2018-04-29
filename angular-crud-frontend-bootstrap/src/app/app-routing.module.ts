import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';

const routes: Routes = [
  {
    path: 'usuario-read',
    component: UsuarioReadComponent
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
