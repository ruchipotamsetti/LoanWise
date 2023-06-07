import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { CodeComponent } from './otpvalidation/code/code.component';
import { DashboardComponent } from './otpvalidation/dashboard/dashboard.component';
import { PhonenumberComponent } from './otpvalidation/phonenumber/phonenumber.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { RecomFormComponent } from './recom-form/recom-form.component';
import { HomeComponent } from './home/home.component';
import { RlistComponent } from './rlist/rlist.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"forgot", component:ForgotComponent},
  {path:"reset", component:ResetComponent},
  {path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard],},
  { path: 'phone', component: PhonenumberComponent },
  {path:"code", component:CodeComponent},
  {path:"recomform", component:RecomFormComponent},
  {path:"home",component:HomeComponent},
  {path:"rlist",component:RlistComponent},
  {path:"viewdetails",component:ViewDetailsComponent},
  {path:"documentationForm", component: DocumentationComponent},
  {path:"viewDocs", component: AdminDashboardComponent},
  {path:"homeDashboard", component: HomeDashboardComponent},
  {path:"adminLogin", component: AdminLoginComponent},
  {path:"aboutus", component: AboutusComponent},
  {path:"adminDashboard", component: AdminLoginComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
