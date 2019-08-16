import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

 @Input("data") inputData;

 @Output('eventClicked') eventHandler = new EventEmitter();

 btnClicked(){
  // console.log('Came inside the button clicked of child component....');
   this.eventHandler.emit("dummy data from the child....");
 }

}
