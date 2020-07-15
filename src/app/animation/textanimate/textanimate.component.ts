import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'cts-textanimate',
  templateUrl: './textanimate.component.html',
  styleUrls: ['./textanimate.component.css'],
  animations:[
    trigger('animateText', [
                            state("first", style({
                                                  backgroundColor:'red',
                                                  color:'yellow',
                                                  transform:'scale(2)',
                                                  letterSpacing:'6px'
                            })),
                            state("second", style({
                                                  backgroundColor:'yellow',
                                                  color:'red',
                                                  transform:'scale(4)',
                                                  letterSpacing:'-2px'
                            })),
                            transition(
                              'first<->second', animate('500ms ease-in')
                            )
    ])
  ]
})
export class TextanimateComponent implements OnInit {

  currentState = 'second'


  animateText=()=>{
    this.currentState = this.currentState === 'first'?'second':'first'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

/*
Evey animation will have some name
trigger -> it triggers the animation with some name
state -> on trigger, element will change from one state to another state.
style -> it defines the state with css like style-rules.
transition -> when state changes fromone state to another, it animates through transition
animate -> helps in transition!
*/
