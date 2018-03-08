import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count:number = 100;
  name:string ="test";

  updateFromChild($event){
  	this.count++;
  }
  countReset(){
  	this.count = 0;
  }
    updateFromParent(){
  	this.count++;
  }
}
