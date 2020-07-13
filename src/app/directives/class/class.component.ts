import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  active:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
