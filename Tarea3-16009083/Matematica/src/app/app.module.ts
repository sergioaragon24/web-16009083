import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { PrimoComponent } from './component/primo/primo.component';
import { NotasComponent } from './component/notas/notas.component';
import { ManuComponent } from './component/manu/manu.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    PrimoComponent,
    NotasComponent,
    ManuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
