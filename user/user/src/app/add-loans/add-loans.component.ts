import { Component } from '@angular/core';
import { LoanForm } from '../addLoan.model';
import { SaveLoanServiceService } from '../save-loan-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loans',
  templateUrl: './add-loans.component.html',
  styleUrls: ['./add-loans.component.css']
})
export class AddLoansComponent {
  constructor(private _saveloan:SaveLoanServiceService ,private _router:Router){
  }
 
  display=false;
  displayops=true;
  displayAutodd=false;
 autoTypeOption:string='';
 saveLoanForm= new LoanForm();
 loanType:string='';

 displayForm(){
  this.display=true;

  this.displayops=false;
  console.log(this.loanType);
  console.log(this.display+" "+this.displayops);
  if(this.loanType == "Auto Loan"){
    this.displayAutodd=true;
    
  }
}

  selectType(type:string){
    this.loanType = type;
    this.displayForm();
  }

 submitRecomForm(){
  // this.getCreditScore();
  // let credit =localStorage.getItem('creditScore')+'';
  // let credit1=parseInt(credit);
  //console.log('Inside submitRecomForm: '+credit1)
  // this. saveLoandetails= new LoanForm();
  // .creditScore = credit1;
  
    console.log("saveloan"+this.saveLoanForm);
    console.log("autotype:"+this.autoTypeOption)
      this._saveloan.saveLoanDetails(this.saveLoanForm,this.loanType).subscribe(
        data=>{
          if(data!=null){

          }
          alert("data saved");
          this._router.navigate(['/adminDashboard'])
          console.log("the loan details are"+data)
        },
        error=>{
          console.log(error)
        }
      )
    }

    
   
  }
  
  

