import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { Employees } from '../Model/employee.interface';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contact',
imports: [ReactiveFormsModule, NgIf],  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  employees: Employees[] = [
    { id: 1, name: 'John Doe', department: 'HR', jobTitle: 'Manager' },
  { id: 2, name: 'Jane Doe', department: 'Marketing', jobTitle: 'Executive' },
  { id: 3, name: 'Bob Smith', department: 'IT', jobTitle: 'Developer' }
];

  employee: Employees = { id: 0, name: 'amal', department: 'dep', jobTitle: 'job' };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.contactForm = this.fb.group({
      id: [this.employee.id, Validators.required],
      name: [this.employee.name, Validators.required],
      department:  [this.employee.department, Validators.required],
      jobTitle:  [ this.employee.jobTitle, Validators.required],
    });


  }

  addEmployee(){
    // console.log(this.contactForm.value);
    this.employees.push(this.contactForm.value);
    // let  k=this.employees.slice(2,4);
    console.log(this.employees);
  }

}
