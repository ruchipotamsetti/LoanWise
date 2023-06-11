import { Component } from '@angular/core';
import { SharedHeaderFooterService } from './shared-header-footer.service';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user';
  showHeaderAndFooter= true;

 sharedService:SharedHeaderFooterService;
constructor(shared :SharedHeaderFooterService, private _router:Router){
  this.sharedService=shared;
  this.sharedService.parentProperty = true; // Set the initial value

}
  pageReload: boolean = false;

isLoggedIn(): boolean {
  // Retrieve the email from local storage
  const email = localStorage.getItem('email');
  
  // Return true if email is present, indicating the user is logged in
  return email !== null;
}
logout(): void {
  // Remove the email from local storage to log out the user
  localStorage.clear();
  //this.reload();
  this._router.navigate(['/home']);

}
reload() {
  if (!this.pageReload) {
    this.pageReload = true;
    window.location.reload();
  }
}


}
