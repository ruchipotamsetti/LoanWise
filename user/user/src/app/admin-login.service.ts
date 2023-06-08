import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  isLoggedIn = false;
  userType='';

  constructor(private router: Router) { }

  login() {
    // Perform authentication logic here
    this.isLoggedIn = true;
    this.router.navigate(['/adminDashboard']); // Navigate to the desired component after login
    
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.setItem('usertype','');
    this.router.navigate(['/adminLogin']); // Navigate back to the login component after logout
   
  }
}
