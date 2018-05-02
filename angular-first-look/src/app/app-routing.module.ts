import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AzulComponent } from './azul/azul.component';
import { VermelhoComponent } from './vermelho/vermelho.component';
import { PretoComponent } from './preto/preto.component';

const routes: Routes = [{
  path: 'azul',
  component: AzulComponent
},
{
  path: 'vermelho',
  component: VermelhoComponent
},
{
  path: 'preto',
  component: PretoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
