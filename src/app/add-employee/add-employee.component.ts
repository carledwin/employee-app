import { Component, OnInit } from '@angular/core';
import {HttpClientService, Employee} from '../service/http-client.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee("", "", "", "");

  constructor(private httpClientService: HttpClientService, private router: Router) { 
  }

  ngOnInit() {
  }

  create(): void{
    this.httpClientService.create(this.employee).subscribe(
      data => {
        this.router.navigate(['employees'])
      }
    );
  }
}
