import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apptitle = 'Angular 10';
  score = 88

  welcome(){
    return "Welcome to " + this.apptitle
  }

  changeScore(){
    console.log("Value of score: " + this.score)
    this.score++
  }

}
