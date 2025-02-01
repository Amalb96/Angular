import { Component, EventEmitter, Output } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-child-a',
  imports: [],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent {

  @Output() messageEvent = new EventEmitter<string>();


  sendMessage()
  {
console.log('Message from Child A');
  
    this.messageEvent.emit('Message from Child A');
//  this.createPromise().then((message) => {
//     console.log(message);
  // });
}


  

// createPromise(): Promise<string> {

//   // return new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     resolve('Message from Child A');
//   //   }, 3000);
//   // });


// }



}
