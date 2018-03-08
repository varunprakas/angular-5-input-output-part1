import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<div class="border-child">{{title}}-{{count}}-{{name}} <button (click)="updateParent($event)">update</button></div>',
  style: ['.border-child{border:1px solid green}']
})
export class childComponent {
  title = 'child component';
  @Input("parentCount")
  count: number = 200;

  @Input("parentName")
  name: string;
  
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  
  updateParent(){
  	//this.count = 100;
    this.change.emit(this.count);
  }

}
