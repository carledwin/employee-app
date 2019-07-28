import { HttpClientService, Employee } from './../service/http-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:string[]

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response),);
  }

  handleSuccessfulResponse(response){
    this.employees=response;
  }

  delete(employee:Employee):void{

    this.httpClientService.delete(employee).subscribe(
        data => {
          this.employees = this.employees.filter(u => u !== employee.id);
          alert('Employee removed');
        });
  }

}
