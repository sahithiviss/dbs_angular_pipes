import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  title = "Data from the parent component"

  handleEventClicked($event){
    console.log('Handled the child event in the parent.....');  
    console.log($event);
  }

}
