import { Component } from '@angular/core';
import { HomedashboardService } from '../homedashboard.service';
import { Router } from '@angular/router';
import { LoanApplications } from '../loanapplications.model';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {

  constructor(private _homeSrv:HomedashboardService, private _router:Router){}
ngOnInit(): void {
  if(localStorage.getItem('email')){
    this.getAllApplications()
  }
  else{
    alert("Please login to view your applications")
    this._router.navigate(['/login'])
  }
   
}
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  

  email:string='';
  applications: LoanApplications[] = [];
  getAllApplications(){
    this.email = localStorage.getItem("email")+'';
    console.log(this.email)
    this._homeSrv.getApplications(this.email).subscribe(
      data=>{
        this.applications = JSON.parse(JSON.stringify(data))

        console.log(data)
        console.log("this is ="+this.applications);
      },
      error=>{
        console.log(error)
      }
    )
  }

}
