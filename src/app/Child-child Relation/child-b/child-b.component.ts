import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-b',
  imports: [],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.css'
})
export class ChildBComponent {
  @Input() messageFromA:string='';

}
