import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';

const routes: Routes = [
  {
    path: 'usuario-read',
    component: UsuarioReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
