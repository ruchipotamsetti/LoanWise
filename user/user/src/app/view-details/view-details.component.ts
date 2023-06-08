import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecommendationService } from '../recommendation.service';
import { LoanApplications } from '../loanapplications.model';
import { UserService } from '../user.service';
import { NavigationEnd } from '@angular/router';
import { RecommendForm } from '../RecommendForm.model';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
id: any;
constructor(private _recomSrv:RecommendationService, private _userSrv : UserService ,private _router:Router){}
selectedLoan:any;
pageReload=false;
ngOnInit(){
  // this.reload();

  let loan = localStorage.getItem('selectedLoan')
  if(loan!=null){
    this.selectedLoan=JSON.parse(loan);
  }
  
  console.log(this.selectedLoan)
}

reload(){
  if(!this.pageReload){
    this.pageReload=true;
    window.location.reload();
  }
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
      this.loanApplication.emiPerMonth=selectedLoan.emiPerMonth;
      this.loanApplication.tenure=selectedLoan.maxTenure;
      console.log(selectedLoan.interestRate)
      this.loanApplication.interestRate=selectedLoan.interestRate;


      
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
