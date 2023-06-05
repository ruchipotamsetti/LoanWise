import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PersonalLoan } from '../personalLoan.model';
import { RecommendationService } from '../recommendation.service';
import { RecommendForm } from '../RecommendForm.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recom-form',
  templateUrl: './recom-form.component.html',
  styleUrls: ['./recom-form.component.css']
})
export class RecomFormComponent {
  recomForm =new FormGroup({
    interestRate:new FormControl(),
    loanAmt:new FormControl(),
    tenure:new FormControl(),
    salary:new FormControl(),
    occupationType:new FormControl(),
    //panCard:new FormControl(),
    loanType:new FormControl(),
    //creditScore:new FormControl(),
    autoTypeOption: new FormControl()
  });
 

  ngOnInit(){
    // localStorage.setItem('personal','');
    // localStorage.setItem('home','');
    // localStorage.setItem('auto','');

  }

  constructor(private _recomSrv:RecommendationService, private _userSrv:UserService ,private _router:Router){

  }

  rForm= new RecommendForm();
  display=false;
  displayops=true;
  displayAutodd=false;
 autoTypeOption:String='';
  displayForm(){
    this.display=true;
    this.displayops=false;
    if(this.rForm.loanType == "Auto Loan"){
      this.displayAutodd=true;
    }
  }

  
  submitRecomForm(){
    this.getCreditScore();
    let credit =localStorage.getItem('creditScore')+'';
    let credit1=parseInt(credit);
    console.log('Inside submitRecomForm: '+credit1)
    this.rForm.creditScore = credit1;
    if(this.recomForm.valid){
      localStorage.setItem("loanType",this.rForm.loanType);

      console.log(this.rForm);
      if(this.rForm.loanType=="Personal Loan"){
        this._recomSrv.getPersonalLoan(this.rForm).subscribe(
          data=>{
            
            alert('Recommendations Personal Loan')
            localStorage.setItem('personal', JSON.stringify(data));
            console.log(data)
            this._router.navigate(['/rlist'])
          },
          error=>{
            console.log(error)
          }
        )
      }

      else if(this.rForm.loanType=="Home Loan"){
        this._recomSrv.getHomeLoan(this.rForm).subscribe(
          data=>{
            alert('Recommendations Home Loan')
            localStorage.setItem('home', JSON.stringify(data));
            console.log(data)
            this._router.navigate(['/rlist'])
          },
          error=>{
            console.log(error)
          }
        )
      }
      else if(this.rForm.loanType=="Auto Loan"){
        console.log("Auto Type:"+this.autoTypeOption);
        this._recomSrv.getAutoLoan(this.rForm,this.autoTypeOption).subscribe(
          data=>{
            alert('Recommendations auto Loan')
            localStorage.setItem('auto', JSON.stringify(data));
            console.log(data)
            this._router.navigate(['/rlist'])
          },
          error=>{
            console.log(error)
          }
        )
      }
     
    }
    else{
      alert('Enter all information')
    }

  }

  email!:string;
  getCreditScore(){

    this.email = localStorage.getItem('email')+'';
    this._userSrv.getCreditScore(this.email).subscribe(
      data=>{
        console.log(data)
        localStorage.setItem('creditScore',data.toString());
      },
      error=>{

        console.log(error)
      }
    )
  }
}


