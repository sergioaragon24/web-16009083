import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombres:string[];
  constructor() { }

  ngOnInit() {
    this.nombres = new Array();
  }

  agregarNombre(nombre:string) {
    this.nombres.push(nombre);
    console.log(this.nombres);
  }

}
