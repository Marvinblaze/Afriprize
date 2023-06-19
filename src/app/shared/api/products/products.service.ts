import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { endpoints } from '../endpoint';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }


  // getrecommend(productId: string): Observable<any>{

  //   const requestBody = {
  //     productId: productId
  //   };
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    
  //   return this.http.get<any>(`${environment.url}${endpoints.recommend}`,{params: params1});
 
  // };


  getlist(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.list}`);
  };

  listsingle(query:string): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.listsingle}(query)`);
  }






  saveOrder(products: any[]): Observable<any> {
    const requestBody = { products };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${environment.url}${endpoints.saveorder}`, requestBody, { headers });
  }


  userwallet(amount: number){
    const body = { amount };
    return this.http.post<any>(`${environment.url}${endpoints.fundwallet}`,body)
  }



  banks(): Observable<any>{
    return this.http.get<any>(`${environment.url}${endpoints.banks}`)
  }


  verifyAccount(bankCode: string, accountNumber: string): Observable<any> {
    const params = {
      bank_code: bankCode,
      account_number: accountNumber
    };
    return this.http.get<any>(`${environment.url}${endpoints.verifyaccount}`, {params});
  }

  

}
