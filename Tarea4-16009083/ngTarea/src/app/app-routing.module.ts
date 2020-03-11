import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaludoComponent } from './component/saludo/saludo.component';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';

const routes: Routes = [
  {path:"calcu", component: CalculadoraComponent},
  {path:"saludo", component: SaludoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
