import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  private score:number = 8

  pi:number = 3.14

  welcome(){
    return "Welcome to Math Service!!!!"
  }

  getScore(){
    return this.score 
  }

  setScore(score){
    this.score = score
  }


  constructor() { }
}
