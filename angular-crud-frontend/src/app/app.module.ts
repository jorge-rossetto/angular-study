import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuarioReadComponent } from './usuario-read/usuario-read.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioReadComponent
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
