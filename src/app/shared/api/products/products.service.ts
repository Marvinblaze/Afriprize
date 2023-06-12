import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from '../endpoint';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }


  getrecommend(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.recommend}`);
 
  };


  getlist(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.list}`);
  };

  listsingle(query:string): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.listsingle}(query)`);
  }



}
