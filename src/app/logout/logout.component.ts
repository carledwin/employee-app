import { Router } from '@angular/router';
import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authenticationService.logOut()
    this.router.navigate(['login'])
  }

}
