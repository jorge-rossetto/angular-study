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


@NgModule({
  declarations: [
    AppComponent,
    UsuarioCreateOrUpdateComponent,
    UsuarioReadAllComponent,
    SingleFieldFilterPipe,
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
