import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanForm } from './addLoan.model';

@Injectable({
  providedIn: 'root'
})
export class SaveLoanServiceService {

  constructor(private _http:HttpClient) { }

  saveLoanDetails(loanform:LoanForm,type:string){
    return this._http.post<LoanForm>(`http://localhost:9999/recommend/saveLoan/${type}`, loanform,{responseType: 'text' as 'json'});
  }

}
