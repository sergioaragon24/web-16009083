import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']
})
export class PrimoComponent implements OnInit {
  num;
  showMessage;
  constructor() { }

  ngOnInit(): void {
    this.num 
  }
  muestraResultado(){
    this.showMessage = !this.showMessage;
}


}
