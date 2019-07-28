import { Component, OnInit } from '@angular/core';
import {HttpClientService, Employee} from '../service/http-client.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee("", "", "", "");

  constructor(private httpClientService: HttpClientService) { 
  }

  ngOnInit() {
  }

  create(): void{
    this.httpClientService.create(this.employee).subscribe(
      data => {
        alert('Employee created');
      }
    );
  }
}
