import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() sendname

  @Output() broadcastName = new EventEmitter()

  updateName =()=>{
    this.broadcastName.emit(this.sendname)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
