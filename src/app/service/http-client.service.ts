import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Employee{
  
  constructor(
    public id:string,
    public firstNameme:string,
    public designation:string,
    public salary:string
    ){}
  }
  
  @Injectable({
    providedIn: 'root'
  })
  export class HttpClientService {
    
  basePath:string = 'http://localhost:8080/employees';

  constructor(private httpClient:HttpClient) { 
  }

  getEmployees(){

    console.log("Chamando a api")
    return this.httpClient.get<Employee[]>(this.basePath); 
  }

  public delete(employee){
    return this.httpClient.delete(this.basePath + '/' + employee.id);
  }

  public create(employee){
    return this.httpClient.post<Employee>(this.basePath, employee);
  }

  public update(employee){
    return this.httpClient.put<Employee>(this.basePath, employee);
  }

}
