import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login.service';
import { SharedHeaderFooterService } from '../shared-header-footer.service';

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

  constructor(private adminLoginService: AdminLoginService,private sharedService:SharedHeaderFooterService) { }

  ngOnInit() {
    this.sharedService.parentProperty = false; // Change the value as per your requirement
  }

  onSubmit() {
    if (this.formData.username === 'admin' && this.formData.password === 'password') {
      // Authentication successful
      this.adminLoginService.login();
      localStorage.setItem('usertype','admin');
      console.log('Authentication successful');
      
    } else {
      // Authentication failed
      console.log('Authentication failed');
    }
  }
  

}
