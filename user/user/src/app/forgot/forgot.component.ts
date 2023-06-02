import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {


  forgotForm=new FormGroup({
    email:new FormControl(),
    secQuestion: new FormControl(),
    secAnswer:new FormControl()
  })

  user=new User()
  
  constructor(private _userSrv:UserService, private _router:Router){}

  forgotBySecurityQues(){

    if(this.forgotForm.valid){
      this._userSrv.forgot(this.user).subscribe(
        data=>{
          if(data!=null){
            let email = JSON.parse(JSON.stringify(this.user.email))
            localStorage.setItem('email', email)
            alert('Set your new password');
            this._router.navigate(["/reset"])
          }
          else{
            alert('User not found');
          }
          
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
