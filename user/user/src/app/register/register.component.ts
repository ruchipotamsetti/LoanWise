import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { PhonenumberComponent } from '../otpvalidation/phonenumber/phonenumber.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  p!: PhonenumberComponent ;

  regForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
    secQuestion: new FormControl(),
    secAnswer:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    panCard:new FormControl(),
    mobile:new FormControl(),
    address:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    country:new FormControl(),
    pincode:new FormControl(),
    occupationType:new FormControl(),
  })

  user=new User()
  
  constructor(private _userSrv:UserService, private _router:Router){}

  signup(){

    if(this.regForm.valid){
      //this.p.getOTP2(this.user.mobile);
      this._userSrv.signup(this.user).subscribe(
        data=>{
          alert('User saved!')
          this._router.navigate(["/login"])
        },
        error=>{
          console.log(error)
        }
      )
    }
    else{
      alert('Enter all information')
    }
    
  }
}
