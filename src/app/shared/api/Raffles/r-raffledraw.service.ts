import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from '../endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RRaffledrawService {

  constructor(private http: HttpClient) { }




  listraffle(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.listraffles}`);
  }


  Ads(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.listads}`);
  };


}
