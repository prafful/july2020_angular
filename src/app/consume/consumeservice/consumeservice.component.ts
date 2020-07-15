import { Component, OnInit } from '@angular/core';
import { MathService } from "../../services/math.service";

@Component({
  selector: 'cts-consumeservice',
  templateUrl: './consumeservice.component.html',
  styleUrls: ['./consumeservice.component.css']
})
export class ConsumeserviceComponent implements OnInit {

  score:number = null


  constructor(private localapi:MathService) { }

  ngOnInit(): void {
    this.score = this.localapi.getScore()
  }

  changeScore=()=>{
    this.localapi.setScore(88)
    this.score = this.localapi.getScore()
  }

}
