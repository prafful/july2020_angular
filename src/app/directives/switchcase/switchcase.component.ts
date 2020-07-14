import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  experience:string = "one"

  constructor() { }

  ngOnInit(): void {
  }

}
