import { Injectable } from '@angular/core';
import { LoanApplications } from './loanapplications.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomedashboardService {

  constructor(private _http:HttpClient) { }

  getApplications(email:String){
    return this._http.get(`http://localhost:9999/recommend/getapplications/?email=${email}`);
  }

}
