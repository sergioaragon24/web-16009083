import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/modelos/Clase';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  num1;
  carrera;
  showMessage;
  notas: Clase[]= [{materia: 'Matematicas', nota: 90}, {materia: 'Programacion', nota: 100}]
  constructor() { }

  ngOnInit(): void {
    this.num1;
    this.carrera;
  }
  muestraResultado(){
    this.showMessage = !this.showMessage;
}

}
