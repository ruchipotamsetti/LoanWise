import { Injectable } from '@angular/core';
import { RecommendForm } from './RecommendForm.model';
import { HttpClient } from '@angular/common/http';
import { PersonalLoan } from './personalLoan.model';
import { HomeLoan } from './homeLoan.model';
import { AutoLoan } from './AutoLoan.model';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
constructor(private _http:HttpClient) { }

  getPersonalLoan(recomForm:RecommendForm){
    return this._http.post<PersonalLoan[]>('http://localhost:9999/recommend/personalloanbyrequest', recomForm);
  }

  getHomeLoan(recomForm:RecommendForm){
    return this._http.post<HomeLoan[]>('http://localhost:9999/recommend/homeloanbyrequest', recomForm);
  }
  getAutoLoan(recomForm:RecommendForm,autoType:String){
    return this._http.post<AutoLoan[]>(`http://localhost:9999/recommend/autoloanbyrequest/${autoType}`, recomForm);
  }
  
getDetails(id:any){
  return this._http.get<PersonalLoan>(`http://localhost:9999/recommend/getpersonalbyid/${id}`);
}


}