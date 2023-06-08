import { Injectable } from '@angular/core';
import { LoanApplications } from './loanapplications.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Emi } from './emi.model';

@Injectable({
  providedIn: 'root'
})
export class HomedashboardService {

  constructor(private _http:HttpClient) { }

  // getRequestFromJWT(token:string){
  //   let myToken = 'Bearer '+ token;
  //   let headers = new HttpHeaders().set('Authorization', myToken);
  //   return this._http.get<string>('http://localhost:5555/user/test', {headers, responseType:'text' as 'json'});
  // }

  getApplications(email:String){
    let myToken = 'Bearer '+ localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', myToken);
    return this._http.get(`http://localhost:5555/recommend/getapplications/?email=${email}`, {headers});
  }

  getEmi(email:string, applicationId:number){
    return this._http.get<Emi[]>(`http://localhost:9999/recommend/getemi/${email}/${applicationId}`);
  }

  updateEmiStatus(emi:Emi){
    return this._http.put<String>(`http://localhost:9999/recommend/updateemi`, emi, {responseType: 'text' as 'json'});
    
  }

}
