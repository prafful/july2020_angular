import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  getBackgroundColor=()=>{
    return "red";
  }

  getBorderColor=()=>{
    return "yellow"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
