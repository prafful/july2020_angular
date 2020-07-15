import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cts-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  reactiveEnginner:any
  fname:string=null
  lname:string=null
  programming:string=null

  constructor() { }

  ngOnInit(): void {
    this.reactiveEnginner = new FormGroup({
      fname: new FormControl("PD", Validators.compose([
                                                        Validators.required,
                                                        Validators.minLength(3),
                                                        Validators.pattern('^[a-zA-Z ]+$')

      ])),
      lname: new FormControl("", this.customValidateLength),
      programming: new FormControl()
    })
  }

  customValidateLength=(formControlInstance)=>{
    console.log(formControlInstance)
    if(formControlInstance.value.length < 3){
      return {
        lname:true
      }
    }
  }

  saveEnginnerData =(re)=>{
    console.log(re)
    console.log(re.value)

  }

}
