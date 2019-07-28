import { AppComponent } from './app.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent, canActivate: [AuthGaurdService]},
  {path: 'add', component: AddEmployeeComponent, canActivate: [AuthGaurdService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService]},
  {path: '', component: AppComponent, canActivate: [AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
