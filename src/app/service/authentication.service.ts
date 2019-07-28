import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password){

    if(username === "carledwin" && password === "p@ssword"){
      sessionStorage.setItem('loggedUser', username)
      return true
    }

    return false
  }

  isUserLoggedIn(){
    
    let user = sessionStorage.getItem('loggedUser')
    return (user !== null)
  }

  logOut(){
    sessionStorage.removeItem('loggedUser');
  }
}
