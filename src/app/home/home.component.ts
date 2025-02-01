import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Employees } from '../Model/employee.interface';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   employees:Employees []= [
    { id: 1, name: 'John Doe', department: 'HR', jobTitle: 'Manager' },
    { id: 2, name: 'Jane Smith', department: 'IT', jobTitle: 'Developer' },
    { id: 3, name: 'Bob Johnson', department: 'Finance', jobTitle: 'Accountant' }
  ]
}
