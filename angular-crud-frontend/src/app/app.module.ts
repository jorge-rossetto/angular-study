import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioReadComponent,
    UsuarioCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
