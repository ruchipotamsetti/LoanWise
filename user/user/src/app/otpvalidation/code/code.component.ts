import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  'firebase/compat/auth';
import  'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var config={

  apiKey: "AIzaSyARLhWeMcKPZ4qaORjjU2LUfcS1AMyFvIs",
  authDomain: "otpvalidation-bed1d.firebaseapp.com",
  projectId: "otpvalidation-bed1d",
  storageBucket: "otpvalidation-bed1d.appspot.com",
  messagingSenderId: "833571407515",
  appId: "1:833571407515:web:82978922713d3f488be83e",
  measurementId: "G-XVZ1NHV3F2"
}

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})

export class CodeComponent  implements OnInit {
  otp!: string;
  verify: any;
  displayotp = true;
  constructor(private router: Router, private ngZone: NgZone) {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit() {

firebase.initializeApp(config);

    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }




  onOtpChange(otp: string) {
    this.otp = otp;
  }

  handleClick() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          alert("Phone number verified")
          // this.router.navigate(['/dashboard']);
          window.location.href='/register';

        });
      })
      .catch((error) => {
        this.wrongotp=true;
        this.otp=''
        this.displayotp=false
        alert("Invalid OTP")
        // console.log(error);
        // alert(error.message);
      });
  }


  phoneNumber: any;
  reCaptchaVerifier!: any;
  wrongotp=false;
  getOTP() {
    this.phoneNumber=localStorage.getItem('number');
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log(this.reCaptchaVerifier);

    console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );

      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }

  resend(){
    this.displayotp=true;
    this.getOTP();
  }

}
