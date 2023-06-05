import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  formData = {
    username: '',
    password: ''
  };

  constructor(private _router:Router){}

  
  onSubmit(){
    if (this.formData.username == 'admin' && this.formData.password == 'password') {
      // Authentication successful, perform admin actions or navigate to admin dashboard
      console.log('Login successful');
      this._router.navigate(['/viewDocs'])
    } else {
      // console.log("username: "+this.formData.username);
      // console.log("password: "+this.formData.password);
      console.log('Login failed');
    }
  }
}
