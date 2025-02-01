import { Component } from '@angular/core';
import { ChildBComponent } from '../child-b/child-b.component';
import { ChildAComponent } from '../child-a/child-a.component';

@Component({
  selector: 'app-parent',
  imports: [ChildBComponent,ChildAComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  messageFromA:string='';

  RecieveMessage(event:string)
  {
    this.messageFromA = event;
console.log(this.messageFromA);
  }

}
