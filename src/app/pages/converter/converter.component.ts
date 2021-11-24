import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  euro: FormControl = new FormControl(0)
  dollaro: number = 0;
  cambioEuroDollaro: number = 1.13;

  constructor(
  ) { }

  conversione(): void {
    this.dollaro = this.euro.value * this.cambioEuroDollaro;
  }

  plus10(): void {
    this.euro.setValue(this.euro.value + 10);
    this.conversione();
  }
  plus100(): void {
    this.euro.setValue(this.euro.value + 100)
    this.conversione();
  }
  reset(): void {
    this.euro.setValue(0);
    this.conversione();
  }

  ngOnInit(): void {
  }

}
