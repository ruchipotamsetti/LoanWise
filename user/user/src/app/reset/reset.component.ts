import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/email.validator';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  resetForm=new FormGroup({
    newpassword:new FormControl(),
    confirmpassword:new FormControl(),
  })

  builder = new FormBuilder();

  user = new User();

  constructor(private _userSrv:UserService, private _router:Router){
    // this.resetForm = this.builder.group(
    //   {
    //     { validator: emailValidator }
    //   }
    // );
  }

  reset(){
    if(this.resetForm.valid){
      this.user.email=localStorage.getItem('email')
      this._userSrv.reset(this.user).subscribe(
        data=>{
          
          if(data!=null){
            alert('Password updated!');
            this._router.navigate(["/login"]);
          }
          else{
            alert('Enter correct email id')
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
