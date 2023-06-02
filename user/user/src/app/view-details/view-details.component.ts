import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecommendationService } from '../recommendation.service';
import { LoanApplications } from '../loanapplications.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
id: any;
constructor(private _recomSrv:RecommendationService, private _userSrv : UserService ,private _router:Router){}
selectedLoan:any;
ngOnInit(){

  this._router.navigate(['/viewdetails'])
  // window.location.href='/viewdetails';
  let loan = localStorage.getItem('selectedLoan')
  if(loan!=null){
    this.selectedLoan=JSON.parse(loan);
  }
  
  console.log(this.selectedLoan)
}




getDetailById(){
 
   
      this._recomSrv.getDetails(this.id).subscribe(
        data=>{
          
          
         
          console.log(data)
        },
        error=>{
          console.log(error)
        }
      )
    }


    
    loanApplication= new LoanApplications();
    applyLoan(selectedLoan:any){
      console.log("Inside apply loan()")
      this.loanApplication.bankName=selectedLoan.bankName;
      this.loanApplication.email=localStorage.getItem("email")+'';
      this.loanApplication.loanAmount=selectedLoan.maxLoanAmt;
      this.loanApplication.loanId=selectedLoan.loanId;
      this.loanApplication.loanType=localStorage.getItem("loanType")+'';
      
      console.log(this.loanApplication)
      this._userSrv.applyLoan(this.loanApplication).subscribe(
        data=>{
          if(data==null){
            alert("You have already applied to this loan!")
            this._router.navigate(['/rlist'])
          }
          else{
            console.log(data)
            this._router.navigate(['/documentationForm'])
          }
        },
        error=>{
          console.log(error)
        }
      )

    }
}
