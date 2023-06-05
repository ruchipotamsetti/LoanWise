import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { CodeComponent } from './otpvalidation/code/code.component';
import { PhonenumberComponent } from './otpvalidation/phonenumber/phonenumber.component';
import { DashboardComponent } from './otpvalidation/dashboard/dashboard.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgOtpInputModule } from 'ng-otp-input';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './firebase-config';
import { RecomFormComponent } from './recom-form/recom-form.component';
import { HomeComponent } from './home/home.component';
import { RlistComponent } from './rlist/rlist.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ResetComponent,
    CodeComponent,
    PhonenumberComponent,
    DashboardComponent,
    RecomFormComponent,
    HomeComponent,
    RlistComponent,
    ViewDetailsComponent,
    DocumentationComponent,
    AdminDashboardComponent,
    HomeDashboardComponent,
    AdminLoginComponent,
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseconfig),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    NgOtpInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
