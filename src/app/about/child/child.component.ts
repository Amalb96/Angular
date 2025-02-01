import { Component, Input, OnInit } from '@angular/core';
import { Employees } from '../../Model/employee.interface';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() Manager!: string;
  @Input() Employee!: Employees;

  ngOnInit(): void {
    console.log(this.Manager);
    console.log(this.Employee);
  }


}
