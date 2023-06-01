import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from '../endpoint';

interface user {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }


  login(body:any): Observable<any> {
    return this.http.post<any>(`${environment.url}${endpoints.login}`, body);
  }



  signin(body:any): Observable<any> {
    return this.http.post<any>(`${environment.url}${endpoints.signin}`, body);
 
 
  }
  verify(body:any): Observable<any> {
    return this.http.post<any>(`${environment.url}${endpoints.verify}`, body);
  }
}
