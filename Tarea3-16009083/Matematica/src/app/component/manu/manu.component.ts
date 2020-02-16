import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.css']
})
export class ManuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irARuta(ruta:string) {
    this.router.navigateByUrl(ruta);
  }

}
