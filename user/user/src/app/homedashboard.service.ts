import { Injectable } from '@angular/core';
import { LoanApplications } from './loanapplications.model';
import { HttpClient } from '@angular/common/http';
import { Emi } from './emi.model';

@Injectable({
  providedIn: 'root'
})
export class HomedashboardService {

  constructor(private _http:HttpClient) { }

  getApplications(email:String){
    return this._http.get(`http://localhost:9999/recommend/getapplications/?email=${email}`);
  }

  getEmi(email:string, applicationId:number){
    return this._http.get<Emi[]>(`http://localhost:9999/recommend/getemi/${email}/${applicationId}`);
  }

  updateEmiStatus(emi:Emi){
    return this._http.put<String>(`http://localhost:9999/recommend/updateemi`, emi, {responseType: 'text' as 'json'});
    
  }

}
