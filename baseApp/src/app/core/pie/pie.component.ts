import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  autor: string;
  lugar: string;
  fecha: string;
  constructor() { }

  ngOnInit() {
    this.autor = 'David Gonzalez Endrinal';
    this.lugar = 'Babel';
    this.fecha = '06/03/2018';
  }

}
