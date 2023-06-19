import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from '../endpoint';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }





  getprofile(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.profile}`);
  }

  shipping(body: any): Observable<any>{
    return this.http.put(`${environment.url}${endpoints.shipping}`, body);
  }


  changepassword(body: any): Observable<any>{
    return this.http.put(`${environment.url}${endpoints.reset}`, body);

  }

  deleteproduct(): Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + sessionStorage.getItem('token')
    });
    return this.http.post<any>(`${environment.url}${endpoints.delete}`,{headers});
}




imageupdate(body:any): Observable<any>{
  return this.http.post<any>(`${environment.url}${endpoints.image}`,body);

}
}
