import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  isLoggedIn = false;

  constructor(private router: Router) { }

  login() {
    // Perform authentication logic here
    this.isLoggedIn = true;
    this.router.navigate(['/viewDocs']); // Navigate to the desired component after login
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/adminLogin']); // Navigate back to the login component after logout
  }
}
