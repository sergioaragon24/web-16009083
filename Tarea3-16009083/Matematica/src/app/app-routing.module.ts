import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';
import { PrimoComponent } from './component/primo/primo.component';
import { NotasComponent } from './component/notas/notas.component';


const routes: Routes = [
  {path:"calcu", component: CalculadoraComponent},
  {path:"primo", component: PrimoComponent},
  {path:"notas", component: NotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
