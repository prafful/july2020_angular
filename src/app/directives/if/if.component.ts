import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  displaybox:boolean = true
  displayname:boolean = true
  displayelse:boolean = true
  iamstring:string ='check'
  iamnullstring:string =null

  toggleDisplayName=()=>{
      this.displayname = !this.displayname
  }

  toggleDisplayBox=()=>{
    this.displaybox = !this.displaybox
  }

  toggleDisplayElse=()=>{
    this.displayelse = !this.displayelse
  }
  constructor() { }

  ngOnInit(): void {
  }

}
