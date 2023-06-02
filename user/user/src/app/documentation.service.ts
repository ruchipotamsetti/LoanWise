import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Documentation} from './documentation.model'

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  constructor(private _http:HttpClient) { }
  uploadDocs(documentation: Documentation, email: string){
    return this._http.post<Documentation>(`http://localhost:9999/recommend/uploaddocs/${email}`, documentation);
  }
}
