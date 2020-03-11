import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1;
  num2;
  showMessage;
  showMessage1;
  showMessage2;
  showMessage3;
 constructor() { }

 ngOnInit() {
   this.num1 ;
   this.num2 ;
 }

 muestraResultado(){
     this.showMessage = !this.showMessage;
 }
 muestraResultado1(){
   this.showMessage1 = !this.showMessage1;
 }
 muestraResultado2(){
   this.showMessage2 = !this.showMessage2;
 }
 muestraResultado3(){
   this.showMessage3 = !this.showMessage3;
 }

}
