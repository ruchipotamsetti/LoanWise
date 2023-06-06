import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from './authRequest.model';
import { User } from './user.model';
import { LoanApplications } from './loanapplications.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  signup(user:User){
    return this._http.post<User>('http://localhost:5555/user/na/signup', user);
  }

  login(authRequest:AuthRequest){
    return this._http.post<string>('http://localhost:5555/user/na/login', authRequest, {responseType: 'text' as 'json'});
  }

  getRequestFromJWT(token:string){
    let myToken = 'Bearer '+ token;
    let headers = new HttpHeaders().set('Authorization', myToken);
    return this._http.get<string>('http://localhost:5555/user/test', {headers, responseType:'text' as 'json'});
  }

  forgot(user:User){
    return this._http.post<User>('http://localhost:5555/user/na/forgot', user);
  }

  reset(user:User){
    return this._http.put<User>('http://localhost:5555/user/na/reset', user);
  }

  applyLoan(loanApplication: LoanApplications){
    return this._http.post<LoanApplications>('http://localhost:9999/recommend/saveloanapplication', loanApplication);
  }

  getUserById(authRequest:AuthRequest){
    return this._http.post<User>('http://localhost:5555/user/na/userbyid', authRequest);
  }
  

}
