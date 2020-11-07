import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private httpClient:HttpClient){ }

  updateUser(userId,email,firstName,lastName):Observable<any>{
    let headers:HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params = new HttpParams();
    params = params.append('userId', userId);
    params = params.append('email', email);
    params = params.append('firstName', firstName);
    params = params.append('lastName', lastName);

    // return this.httpClient.post("http://localhost:8080/WhereTheBoysAt/user/update",{},{headers:headers, withCredentials:true,params:params})
    return this.httpClient.post("http://ec2-54-237-35-242.compute-1.amazonaws.com:8088/WhereTheBoysAt/user/update",{headers:headers,withCredentials:true,params:params});
 }
}