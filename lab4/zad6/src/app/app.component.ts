import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public disableBtn: boolean = false; 
  public parentCounter: number = 0;

  getDataFromChild(event){
    this.parentCounter = event;
    if(this.parentCounter >= 10){
      this.disableBtn = true;
    }
  }
}
