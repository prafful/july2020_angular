import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  fname: string = null
  lname:string = null
  programming:string = null

  saveEnginnerData=(ef)=>{
    console.log("Captured Submit Even for Enginner Form!!!!")
    console.log(ef)
    console.log(ef.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
