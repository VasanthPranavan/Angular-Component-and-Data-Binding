import { Component, OnInit } from '@angular/core';
import { Employee } from './employee'
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }
  employee:Employee[]=[{
    employeeId:1876627,
    firstName:"Vasanth",
    lastName:"Selvam",
    dept:"Software",
    city:"Chicago",
    email:"myemail@email.com"
  }];

  expression: boolean= true;
  EditEmp(){
    this.expression=!this.expression;
    
    }
    UpdateEmp(){
      this.expression=!this.expression;
      
    }
  
}
