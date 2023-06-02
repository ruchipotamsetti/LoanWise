import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


// import core firebase client (required)
import firebase from 'firebase/compat/app';

// import Firebase Authentication (optional)
import  'firebase/compat/auth';


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
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent {

  phoneNumber: any;
  reCaptchaVerifier!: any;


  ngOnInit() {

firebase.initializeApp(config);
  }

  getOTP() {
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

        localStorage.setItem('number',this.phoneNumber);
        window.location.href='/code';
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }

  getOTP2(userPhoneNumber: any){
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log(this.reCaptchaVerifier);

    console.log(userPhoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(userPhoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );

        localStorage.setItem('number',userPhoneNumber);
        window.location.href='/code';
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }

}
