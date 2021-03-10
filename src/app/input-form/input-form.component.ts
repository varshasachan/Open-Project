import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  public val =  "Quick cash disbursem";
  public val1 = "Get terms loans that your business needs within 72 hrs.";
  value1: number = 100000;
  value2: number = 0;
  options: Options = {
    floor: 100000,
    ceil: 300000
  };

  options1: Options = {
    floor:0,
    ceil: 100000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
