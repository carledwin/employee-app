import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Employee{
  
  constructor(
    public id:string,
    public firstNameme:string,
    public email:string,
    public designation:string,
    public salary:string
    ){}
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class HttpClientService {
    
  static basePath:string = 'http://localhost:8080/employees';

  constructor(private httpClient:HttpClient) { 
  }

  getEmployees(){
   return this.httpClient.get<Employee[]>(HttpClientService.basePath); 
  }

  public delete(employee){
    return this.httpClient.delete(HttpClientService.basePath + '/' + employee.id);
  }

  public create(employee){
    return this.httpClient.post<Employee>(HttpClientService.basePath, employee);
  }

  public update(employee){
    return this.httpClient.put<Employee>(HttpClientService.basePath, employee);
  }
}
