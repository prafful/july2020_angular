import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  mydate:Date = new Date()
  message:string = 'lorEM IPSum DORoTh LinUM'
  salary:number = 8888

  constructor() { }

  ngOnInit(): void {
  }

}
