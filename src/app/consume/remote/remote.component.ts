import { Component, OnInit } from '@angular/core';
import { RestapiService } from "../../services/restapi.service";
import { MathService } from 'src/app/services/math.service';


@Component({
  selector: 'cts-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  friends:any=null
  score:number = null

  constructor(private restapi:RestapiService, private math:MathService) { }

  ngOnInit(): void {
    this.score = this.math.getScore()
    this.restapi.getUsers().subscribe(response =>{
      console.log(response)
      this.friends = response
    }, error=>{
      console.log(error)
    })
  }

}
