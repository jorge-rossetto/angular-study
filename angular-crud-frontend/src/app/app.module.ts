import { Ng2OrderModule } from 'ng2-order-pipe';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioCreateOrUpdateComponent } from './components/usuario-create-or-update/usuario-create-or-update.component';
import { UsuarioReadAllComponent } from './components/usuario-read-all/usuario-read-all.component';

import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SingleFieldFilterPipe } from './infra/single-field-filter.pipe';
import { UsuarioReadAllBasicoComponent } from './components/usuario-read-all-basico/usuario-read-all-basico.component';
import { UsuarioReadAllPaginacaoComponent } from './components/usuario-read-all-paginacao/usuario-read-all-paginacao.component';
import { UsuarioReadAllNenhumRegistroEncontradoComponent } from './components/usuario-read-all-nenhum-registro-encontrado/usuario-read-all-nenhum-registro-encontrado.component';
import { UsuarioReadAllFiltroComponent } from './components/usuario-read-all-filtro/usuario-read-all-filtro.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioCreateOrUpdateComponent,
    UsuarioReadAllComponent,
    SingleFieldFilterPipe,
    UsuarioReadAllBasicoComponent,
    UsuarioReadAllPaginacaoComponent,
    UsuarioReadAllNenhumRegistroEncontradoComponent,
    UsuarioReadAllFiltroComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
