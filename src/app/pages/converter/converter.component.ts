import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  euro: number = 0;
  dollaro: number = this.euro * 1.13;

  constructor(
  ) { }

  /*
  onClick(euro: number): number {
    return euro * 1.13;
  }

  dollaro: number = 12345; //euro * 1.13;
*/

  ngOnInit(): void {
  }

}
