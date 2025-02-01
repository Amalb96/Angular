import { Component, OnInit } from '@angular/core';
import { Employees } from '../Model/employee.interface';
import { ChildComponent } from './child/child.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [ChildComponent,NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  Manager='amal';
  employees: Employees[] = [
    { id: 1, name: 'John Doe', department: 'HR', jobTitle: 'Manager' },
  { id: 2, name: 'Jane Doe', department: 'Marketing', jobTitle: 'Executive' },
  { id: 3, name: 'Bob Smith', department: 'IT', jobTitle: 'Developer' }
];


  ngOnInit(): void {
  }


}
