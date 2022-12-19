import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {LoginDTO} from '../model/LoginDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseURL:string="http://localhost:8080/api/users/";

  constructor(private http: HttpClient) { }

  login(loginDetail:LoginDTO):Observable<any>
  {
    const headers={'content-type':'application/json'}
    const body=JSON.stringify(loginDetail);
    return this.http.post(this.baseURL+'signin',body,{'headers':headers});
    
  }


  signup(userDetail:User):Observable<any>
  {
    const headers={'content-type':'application/json'}
    const body=JSON.stringify(userDetail);
    return this.http.post(this.baseURL+'signup',body,{'headers':headers});
    
  }

}
