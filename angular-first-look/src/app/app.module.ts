import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AzulComponent } from './azul/azul.component';
import { PretoComponent } from './preto/preto.component';
import { VermelhoComponent } from './vermelho/vermelho.component';


@NgModule({
  declarations: [
    AppComponent,
    AzulComponent,
    PretoComponent,
    VermelhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
